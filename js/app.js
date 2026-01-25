/**
 * PrefixPlay - Main Application
 * Ham Radio Callsign Prefix Learning Game
 */

import { DXCC_ENTITIES, initializeLookups } from './data/dxcc.js';
import { GameState, GAME_MODES, getGameModeById } from './models/game-state.js';
import { QuestionGenerator } from './models/question.js';
import { ScoringSystem } from './systems/scoring.js';
import { AchievementSystem } from './systems/achievements.js';
import { RetryPool } from './systems/retry-pool.js';
import { GameCard } from './ui/game-card.js';
import { Menu } from './ui/menu.js';
import { StatsPanel } from './ui/stats-panel.js';
import { AchievementsPanel } from './ui/achievements-panel.js';
import { showPrivacyNotice, showResetConfirmation, showToast, showAchievementToast } from './ui/modals.js';
import { initI18n, t, getLanguage } from './i18n/translations.js';
import { loadConfig } from './config.js';
import { initTheme } from './systems/theme.js';

/**
 * Main Application Class
 */
class PrefixPlayApp {
  constructor() {
    // Initialize i18n first
    initI18n();

    // Initialize theme
    initTheme();

    // Initialize data lookups
    initializeLookups();

    // Load config and render parent site branding
    this.loadAndRenderBranding();

    // Initialize systems
    this.scoring = new ScoringSystem();
    this.achievements = new AchievementSystem(this.scoring);
    this.retryPool = new RetryPool();

    // Initialize state
    this.state = new GameState();
    this.questionGenerator = new QuestionGenerator(this.retryPool);

    // Initialize UI components
    this.initializeUI();

    // Setup language change listener
    this.setupLanguageListener();

    // Update page title based on current language
    this.updatePageTitle();

    // Show privacy notice on first visit
    this.checkFirstVisit();

    // Start the game
    this.nextQuestion();

    console.log('PrefixPlay initialized');
  }

  /**
   * Initialize UI components
   */
  initializeUI() {
    // Menu/Navigation
    this.menu = new Menu(document.getElementById('menu'), {
      onModeChange: (modeId) => this.handleModeChange(modeId),
      onPracticeToggle: () => this.handlePracticeToggle(),
      onReset: () => this.handleReset(),
      onShowAchievements: () => this.showAchievements(),
      onShowPrivacy: () => showPrivacyNotice()
    });

    // Game Card
    this.gameCard = new GameCard(document.getElementById('game-area'), {
      onAnswer: (answer) => this.handleAnswer(answer),
      onNext: () => this.nextQuestion()
    });

    // Stats Panel
    this.statsPanel = new StatsPanel(document.getElementById('stats'));
    this.updateStatsDisplay();

    // Achievements Panel
    this.achievementsPanel = new AchievementsPanel(
      document.getElementById('achievements-container')
    );

    // Update practice button state
    this.menu.updateRetryCount(this.retryPool.getCount(this.state.currentMode.id));
  }

  /**
   * Check if this is the first visit and show privacy notice
   */
  checkFirstVisit() {
    if (!localStorage.getItem('prefixplay_visited')) {
      showPrivacyNotice(() => {
        localStorage.setItem('prefixplay_visited', 'true');
      });
    }
  }

  /**
   * Setup language change listener to re-render UI
   */
  setupLanguageListener() {
    window.addEventListener('languagechange', () => {
      // Update page title and subtitle
      this.updatePageTitle();

      // Re-render stats (menu re-renders itself)
      this.updateStatsDisplay();

      // Re-render current question if exists
      if (this.state.currentQuestion && !this.state.currentQuestion.answered) {
        // Generate new question with translated text
        this.nextQuestion();
      }
    });
  }

  /**
   * Update page title based on language
   */
  updatePageTitle() {
    const titleEl = document.querySelector('.header-title');
    const subtitleEl = document.querySelector('.header-subtitle');

    if (titleEl) titleEl.textContent = t('appTitle');
    if (subtitleEl) subtitleEl.textContent = t('appSubtitle');

    // Update document title
    document.title = `${t('appTitle')} - ${t('appSubtitle')}`;
  }

  /**
   * Load config and render parent site branding
   */
  async loadAndRenderBranding() {
    try {
      const config = await loadConfig();

      // Render header logo
      const logoContainer = document.getElementById('parent-site-logo');
      if (logoContainer && config.parentSiteLogo && config.parentSiteUrl) {
        logoContainer.innerHTML = `
          <a href="${config.parentSiteUrl}" target="_blank" rel="noopener" class="parent-logo-link">
            <img src="${config.parentSiteLogo}" alt="${config.parentSiteName || 'Parent Site'}" class="parent-logo">
          </a>
        `;
      }

      // Render footer branding
      const footerContainer = document.getElementById('parent-site-footer');
      if (footerContainer && config.parentSiteName && config.parentSiteUrl) {
        footerContainer.innerHTML = `
          <div class="parent-site-branding">
            Part of <a href="${config.parentSiteUrl}" target="_blank" rel="noopener">${config.parentSiteName}</a> Tools
          </div>
        `;
      }
    } catch (error) {
      console.warn('Failed to load branding config:', error);
    }
  }

  /**
   * Handle game mode change
   */
  handleModeChange(modeId) {
    this.state.setMode(modeId);

    // Update practice button for new mode
    this.menu.updateRetryCount(this.retryPool.getCount(modeId));

    // If in practice mode but new mode has no retry items, exit practice
    if (this.state.isPracticeMode && !this.retryPool.hasItems(modeId)) {
      this.state.setPracticeMode(false);
      this.menu.updatePracticeMode(false, 0);
    }

    this.nextQuestion();
  }

  /**
   * Handle practice mode toggle
   */
  handlePracticeToggle() {
    const modeId = this.state.currentMode.id;
    const hasItems = this.retryPool.hasItems(modeId);

    if (this.state.isPracticeMode) {
      // Exit practice mode
      this.state.setPracticeMode(false);
      this.menu.updatePracticeMode(false, this.retryPool.getCount(modeId));
    } else if (hasItems) {
      // Enter practice mode
      this.state.setPracticeMode(true);
      this.menu.updatePracticeMode(true, this.retryPool.getCount(modeId));
    }

    this.nextQuestion();
  }

  /**
   * Handle answer selection
   */
  handleAnswer(userAnswer) {
    const question = this.state.currentQuestion;
    const wasCorrect = this.state.recordAnswer(question, userAnswer);

    // Update scoring system
    const stats = this.scoring.recordAnswer(
      this.state.currentMode.id,
      question.entityId,
      wasCorrect
    );

    // Handle retry pool
    if (wasCorrect) {
      // If in practice mode and answered correctly, remove from retry pool
      if (this.state.isPracticeMode) {
        const removed = this.retryPool.remove(this.state.currentMode.id, question.entityId);
        if (removed) {
          this.achievements.incrementRetryClear();
        }

        // Check if practice mode is complete (no more items to practice)
        const remainingItems = this.retryPool.getCount(this.state.currentMode.id);
        if (remainingItems === 0) {
          // Practice complete - exit practice mode and show completion message
          this.state.setPracticeMode(false);
          this.menu.updatePracticeMode(false, 0);
          showToast(t('practiceComplete'), 'success');
        }
      }
    } else {
      // Add wrong answer to retry pool
      this.retryPool.add(this.state.currentMode.id, question.entityId);
    }

    // Check for new achievements (only in normal mode)
    if (!this.state.isPracticeMode) {
      const newAchievements = this.achievements.checkAndUnlock(stats);
      if (newAchievements.length > 0) {
        this.showNewAchievements(newAchievements);
      }
    }

    // Update UI
    this.updateStatsDisplay();
    this.menu.updateRetryCount(this.retryPool.getCount(this.state.currentMode.id));

    // Update streak animation in stats
    this.statsPanel.updateStreak(stats.global.currentStreak, wasCorrect);
  }

  /**
   * Generate and display next question
   */
  nextQuestion() {
    const excludeRecent = this.state.getRecentEntityIds(5);

    try {
      const question = this.questionGenerator.generate(
        this.state.currentMode,
        {
          practiceMode: this.state.isPracticeMode,
          excludeRecent
        }
      );

      this.state.setCurrentQuestion(question);
      this.gameCard.setPracticeMode(this.state.isPracticeMode);
      this.gameCard.render(question);
    } catch (error) {
      console.error('Failed to generate question:', error);
      // If practice mode fails (no items), exit practice mode
      if (this.state.isPracticeMode) {
        this.state.setPracticeMode(false);
        this.menu.updatePracticeMode(false, 0);
        this.nextQuestion();
      }
    }
  }

  /**
   * Update stats display
   */
  updateStatsDisplay() {
    const stats = this.scoring.getStats();
    const masteredCount = this.scoring.getMasteredEntities().length;
    const retryCount = this.retryPool.getCount(this.state.currentMode.id);

    this.statsPanel.render(stats, {
      masteredCount,
      retryCount,
      isPracticeMode: this.state.isPracticeMode
    });
  }

  /**
   * Show achievements panel
   */
  showAchievements() {
    const achievements = this.achievements.getAll();
    const stats = this.scoring.getStats();
    this.achievementsPanel.show(achievements, stats);
  }

  /**
   * Show new achievement toasts
   */
  showNewAchievements(achievements) {
    achievements.forEach((achievement, index) => {
      setTimeout(() => {
        showAchievementToast(achievement);
      }, index * 1000);
    });
  }

  /**
   * Handle reset confirmation
   */
  handleReset() {
    showResetConfirmation(() => {
      // Reset all systems
      this.scoring.reset();
      this.achievements.reset();
      this.retryPool.clearAll();

      // Reset state
      this.state = new GameState();
      this.questionGenerator = new QuestionGenerator(this.retryPool);

      // Update UI
      this.menu.updatePracticeMode(false, 0);
      this.updateStatsDisplay();
      this.nextQuestion();

      // Show confirmation toast
      showToast(t('resetSuccess'), 'success');
    });
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PrefixPlayApp();
});
