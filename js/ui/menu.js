/**
 * Menu Component
 * Navigation, mode selection, and settings
 */

import { t, getLanguage, setLanguage, getAvailableLanguages } from '../i18n/translations.js';
import { getGameModes } from '../models/game-state.js';

/**
 * Menu Class
 */
export class Menu {
  constructor(container, options = {}) {
    this.container = container;
    this.onModeChange = options.onModeChange || (() => {});
    this.onPracticeToggle = options.onPracticeToggle || (() => {});
    this.onReset = options.onReset || (() => {});
    this.onShowAchievements = options.onShowAchievements || (() => {});
    this.onShowPrivacy = options.onShowPrivacy || (() => {});

    this.currentModeId = 'prefix-to-country';
    this.isPracticeMode = false;
    this.retryCount = 0;

    this.render();
    this.attachLanguageListener();
  }

  /**
   * Render the menu
   */
  render() {
    const modes = getGameModes();
    const languages = getAvailableLanguages();
    const currentLang = getLanguage();

    const html = `
      <div class="menu-panel">
        <!-- Language Selector -->
        <div class="menu-section">
          <label class="menu-label">${t('language')}</label>
          <div class="language-selector">
            ${languages.map(lang => `
              <button class="lang-btn ${lang.code === currentLang ? 'active' : ''}"
                      data-lang="${lang.code}"
                      title="${lang.name}">
                <span class="lang-flag">${lang.flag}</span>
                <span class="lang-name">${lang.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Game Mode Selector -->
        <div class="menu-section">
          <label class="menu-label">${t('gameMode')}</label>
          <div class="mode-selector">
            ${modes.map(mode => `
              <button class="mode-btn ${mode.id === this.currentModeId ? 'active' : ''}"
                      data-mode="${mode.id}">
                <span class="mode-icon">${mode.icon}</span>
                <span class="mode-name">${mode.id === 'prefix-to-country' ? t('prefixToCountry') : t('countryToPrefix')}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Practice Mode Toggle -->
        <div class="menu-section">
          <label class="menu-label">${t('practiceMode')}</label>
          <button class="practice-btn ${this.isPracticeMode ? 'active' : ''}"
                  id="practice-toggle"
                  ${this.retryCount === 0 ? 'disabled' : ''}>
            <span class="practice-icon">${this.isPracticeMode ? '\u{1F504}' : '\u{1F4AA}'}</span>
            <span class="practice-text">
              ${this.isPracticeMode
                ? t('stopPractice')
                : (this.retryCount > 0
                    ? t('startPractice', { count: this.retryCount })
                    : t('noRetryItems'))}
            </span>
          </button>
        </div>

        <!-- Actions -->
        <div class="menu-section menu-actions">
          <button class="menu-action-btn" id="show-achievements">
            <span>\u{1F3C6}</span> ${t('achievements')}
          </button>
          <button class="menu-action-btn" id="show-privacy">
            <span>\u{1F512}</span> ${t('privacy')}
          </button>
          <button class="menu-action-btn danger" id="reset-progress">
            <span>\u{1F5D1}</span> ${t('resetProgress')}
          </button>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.attachListeners();
  }

  /**
   * Attach event listeners
   */
  attachListeners() {
    // Language buttons
    const langBtns = this.container.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
      });
    });

    // Mode buttons
    const modeBtns = this.container.querySelectorAll('.mode-btn');
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const modeId = btn.dataset.mode;
        this.setActiveMode(modeId);
        this.onModeChange(modeId);
      });
    });

    // Practice toggle
    const practiceBtn = this.container.querySelector('#practice-toggle');
    if (practiceBtn) {
      practiceBtn.addEventListener('click', () => {
        if (this.retryCount > 0 || this.isPracticeMode) {
          this.onPracticeToggle();
        }
      });
    }

    // Achievements button
    const achievementsBtn = this.container.querySelector('#show-achievements');
    if (achievementsBtn) {
      achievementsBtn.addEventListener('click', () => this.onShowAchievements());
    }

    // Privacy button
    const privacyBtn = this.container.querySelector('#show-privacy');
    if (privacyBtn) {
      privacyBtn.addEventListener('click', () => this.onShowPrivacy());
    }

    // Reset button
    const resetBtn = this.container.querySelector('#reset-progress');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.onReset());
    }
  }

  /**
   * Set active mode visually
   */
  setActiveMode(modeId) {
    this.currentModeId = modeId;
    const modeBtns = this.container.querySelectorAll('.mode-btn');
    modeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === modeId);
    });
  }

  /**
   * Update practice mode state
   */
  updatePracticeMode(isPractice, retryCount) {
    this.isPracticeMode = isPractice;
    this.retryCount = retryCount;
    this.render();
  }

  /**
   * Update retry count
   */
  updateRetryCount(count) {
    this.retryCount = count;
    const practiceBtn = this.container.querySelector('#practice-toggle');
    if (practiceBtn) {
      const textSpan = practiceBtn.querySelector('.practice-text');
      if (textSpan) {
        if (this.isPracticeMode) {
          textSpan.textContent = t('stopPractice');
        } else if (count > 0) {
          textSpan.textContent = t('startPractice', { count });
          practiceBtn.disabled = false;
        } else {
          textSpan.textContent = t('noRetryItems');
          practiceBtn.disabled = true;
        }
      }
    }
  }

  /**
   * Listen for language changes
   */
  attachLanguageListener() {
    window.addEventListener('languagechange', () => {
      this.render();
    });
  }
}
