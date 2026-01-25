/**
 * Game Card Component
 * Reusable card for displaying questions and answer options
 */

import { t } from '../i18n/translations.js';
import { getMap } from './map.js';

// Same colors as in map.js for consistency
const QUIZ_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#f97316'];

/**
 * Game Card Class
 */
export class GameCard {
  constructor(container, options = {}) {
    this.container = container;
    this.onAnswer = options.onAnswer || (() => {});
    this.onNext = options.onNext || (() => {});
    this.onNewRound = options.onNewRound || (() => {});
    this.element = null;
    this.question = null;
    this.isLocked = false;
    this.isPracticeMode = false;
    this.roundProgress = null;
    this.boundHandleKeyDown = this.handleKeyDown.bind(this);
    this.boundHandleThemeChange = this.handleThemeChange.bind(this);
  }

  /**
   * Set practice mode state
   */
  setPracticeMode(isPractice) {
    this.isPracticeMode = isPractice;
  }

  /**
   * Set round progress
   */
  setRoundProgress(progress) {
    this.roundProgress = progress;
  }

  /**
   * Render a question
   */
  async render(question) {
    this.question = question;
    this.isLocked = false;

    const practiceBadge = this.isPracticeMode
      ? `<span class="practice-badge">\u{1F4AA} ${t('practiceModeShort')}</span>`
      : '';

    const roundIndicator = !this.isPracticeMode && this.roundProgress
      ? `<span class="round-indicator">${t('questionOf', { current: this.roundProgress.current, total: this.roundProgress.total })}</span>`
      : '';

    const html = `
      <div class="game-card ${this.isPracticeMode ? 'practice-active' : ''}">
        <div class="card-header">
          <span class="mode-icon">${question.metadata?.icon || '\u{1F4E1}'}</span>
          <span class="mode-label">${question.mode.name}</span>
          ${practiceBadge}
          ${roundIndicator}
        </div>
        <div class="card-map" id="question-map"></div>
        <div class="card-prompt">
          <h2>${question.prompt}</h2>
        </div>
        <div class="card-options">
          ${question.options.map((opt, i) => {
            const showColorIndicator = question.mode?.category !== 'austria' && question.mode?.category !== 'neighbors';
            return `
            <button class="option-btn" data-index="${i}" data-value="${this.escapeHtml(opt.value)}">
              ${showColorIndicator ? `<span class="color-indicator" style="background-color: ${QUIZ_COLORS[i % QUIZ_COLORS.length]}"></span>` : ''}
              ${opt.flag ? `<span class="flag">${opt.flag}</span>` : ''}
              <span class="option-text">${this.escapeHtml(opt.label)}</span>
            </button>
          `}).join('')}
        </div>
        <div class="card-feedback hidden">
          <div class="feedback-content">
            <div class="feedback-icon"></div>
            <div class="feedback-text"></div>
          </div>
          <button class="next-btn">${t('nextQuestion')} \u2192</button>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.element = this.container.querySelector('.game-card');
    this.attachListeners();

    // Render map
    this.renderMap(question);
  }

  /**
   * Render the map for the question with retry
   */
  async renderMap(question, retryCount = 0) {
    const mapContainer = this.element.querySelector('#question-map');
    if (!mapContainer) return;

    try {
      const map = await getMap();
      // Use new quiz rendering with colored options
      map.renderQuizTo(mapContainer, question, question.options);
    } catch (error) {
      console.error('Failed to render map:', error);

      // Retry up to 2 times with delay
      if (retryCount < 2) {
        console.log(`Retrying map load (attempt ${retryCount + 2})...`);
        setTimeout(() => this.renderMap(question, retryCount + 1), 1000);
      } else {
        // Show error message instead of hiding
        mapContainer.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#94a3b8;">Map loading failed. Please refresh.</div>';
      }
    }
  }

  /**
   * Attach event listeners
   */
  attachListeners() {
    // Option buttons
    const buttons = this.element.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isLocked || this.question.answered) return;
        const value = btn.dataset.value;
        this.handleAnswer(value);
      });
    });

    // Next button
    const nextBtn = this.element.querySelector('.next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.onNext();
      });
    }

    // Keyboard support
    document.addEventListener('keydown', this.boundHandleKeyDown);

    // Theme change support - re-render map when theme changes
    window.addEventListener('themechange', this.boundHandleThemeChange);
  }

  /**
   * Handle theme change - re-render map with new colors
   */
  handleThemeChange() {
    if (this.question && this.element) {
      this.renderMap(this.question);
    }
  }

  /**
   * Handle keyboard input
   */
  handleKeyDown(e) {
    if (this.isLocked || !this.question) return;

    // Number keys 1-4 for options
    if (!this.question.answered && e.key >= '1' && e.key <= '4') {
      const index = parseInt(e.key) - 1;
      const buttons = this.element?.querySelectorAll('.option-btn');
      if (buttons && buttons[index]) {
        buttons[index].click();
      }
    }

    // Enter or Space for next question
    if (this.question.answered && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      this.onNext();
    }
  }

  /**
   * Handle answer selection
   */
  handleAnswer(value) {
    this.isLocked = true;
    this.question.userAnswer = value;
    this.question.answered = true;
    this.question.wasCorrect = value === this.question.correctAnswer;

    this.showFeedback();
    this.onAnswer(value);
  }

  /**
   * Show feedback after answer
   */
  showFeedback() {
    const buttons = this.element.querySelectorAll('.option-btn');
    const feedback = this.element.querySelector('.card-feedback');
    const isCorrect = this.question.wasCorrect;

    // Highlight buttons
    buttons.forEach(btn => {
      btn.disabled = true;
      const btnValue = btn.dataset.value;

      if (btnValue === this.question.correctAnswer) {
        btn.classList.add('correct');
      } else if (btnValue === this.question.userAnswer && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    // Show feedback message
    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'success' : 'error');

    const feedbackIcon = feedback.querySelector('.feedback-icon');
    const feedbackText = feedback.querySelector('.feedback-text');

    feedbackIcon.textContent = isCorrect ? '\u2713' : '\u2717';
    feedbackText.innerHTML = isCorrect
      ? `<strong>${t('correct')}</strong>`
      : `<strong>${t('incorrect')}</strong><br>${t('correctAnswerWas', { answer: this.question.correctAnswer })}`;

    // Focus next button
    const nextBtn = feedback.querySelector('.next-btn');
    if (nextBtn) {
      setTimeout(() => nextBtn.focus(), 100);
    }
  }

  /**
   * Show loading state
   */
  showLoading() {
    this.container.innerHTML = `
      <div class="game-card loading">
        <div class="spinner"></div>
        <p>${t('loading')}</p>
      </div>
    `;
  }

  /**
   * Show round complete summary
   */
  showRoundComplete(roundStats, modeName) {
    const percentage = Math.round((roundStats.correct / roundStats.total) * 100);
    let emoji, message;

    if (percentage === 100) {
      emoji = '\u{1F3C6}';
      message = t('roundPerfect');
    } else if (percentage >= 80) {
      emoji = '\u{1F31F}';
      message = t('roundGreat');
    } else if (percentage >= 60) {
      emoji = '\u{1F44D}';
      message = t('roundGood');
    } else {
      emoji = '\u{1F4AA}';
      message = t('roundKeepPracticing');
    }

    this.container.innerHTML = `
      <div class="game-card round-complete">
        <div class="round-complete-content">
          <div class="round-complete-emoji">${emoji}</div>
          <h2>${t('roundComplete')}</h2>
          <p class="round-complete-mode">${modeName}</p>
          <div class="round-complete-score">
            <span class="score-big">${roundStats.correct}/${roundStats.total}</span>
            <span class="score-percent">(${percentage}%)</span>
          </div>
          <p class="round-complete-message">${message}</p>
          <button class="new-round-btn">${t('newRound')} \u2192</button>
        </div>
      </div>
    `;

    // Attach listener for new round button
    const newRoundBtn = this.container.querySelector('.new-round-btn');
    if (newRoundBtn) {
      newRoundBtn.addEventListener('click', () => {
        this.onNewRound();
      });
      // Focus for keyboard navigation
      setTimeout(() => newRoundBtn.focus(), 100);
    }

    // Handle Enter key for new round
    const handleEnter = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        document.removeEventListener('keydown', handleEnter);
        this.onNewRound();
      }
    };
    document.addEventListener('keydown', handleEnter);
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Clean up event listeners
   */
  destroy() {
    document.removeEventListener('keydown', this.boundHandleKeyDown);
    window.removeEventListener('themechange', this.boundHandleThemeChange);
  }
}
