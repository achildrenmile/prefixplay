/**
 * Stats Panel Component
 * Displays game statistics
 */

import { t } from '../i18n/translations.js';

/**
 * Stats Panel Class
 */
export class StatsPanel {
  constructor(container) {
    this.container = container;
    this.attachLanguageListener();
  }

  /**
   * Render stats
   */
  render(stats, options = {}) {
    const { masteredCount = 0, retryCount = 0, isPracticeMode = false } = options;

    // In practice mode, show simplified learning-focused stats
    if (isPracticeMode) {
      const html = `
        <div class="stats-panel practice-mode">
          <h3 class="stats-title">\u{1F4AA} ${t('practiceModeActive')}</h3>

          <div class="practice-progress">
            <div class="practice-progress-circle">
              <span class="practice-count">${retryCount}</span>
            </div>
            <div class="practice-progress-label">${t('practiceProgress', { count: retryCount })}</div>
          </div>

          <div class="practice-tip">
            <span>\u{1F4A1}</span>
            <span>${t('practiceModeShort')}: ${t('noRetryItems').toLowerCase() === 'keine fehler zum üben' ? 'Fehler wiederholen' : 'Review mistakes'}</span>
          </div>

          <div class="help-link">
            <a href="dxcc-list.html" class="help-link-btn">
              <span class="help-icon">\u{2753}</span>
              <span>Präfix-Übersicht</span>
            </a>
          </div>
        </div>
      `;
      this.container.innerHTML = html;
      return;
    }

    const accuracy = stats.global.totalAttempts > 0
      ? ((stats.global.totalCorrect / stats.global.totalAttempts) * 100).toFixed(1)
      : '0.0';

    const html = `
      <div class="stats-panel">
        <h3 class="stats-title">\u{1F4CA} ${t('statistics')}</h3>

        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">${stats.global.totalAttempts}</div>
            <div class="stat-label">${t('totalAttempts')}</div>
          </div>

          <div class="stat-item">
            <div class="stat-value">${stats.global.totalCorrect}</div>
            <div class="stat-label">${t('totalCorrect')}</div>
          </div>

          <div class="stat-item">
            <div class="stat-value">${accuracy}%</div>
            <div class="stat-label">${t('accuracy')}</div>
          </div>

          <div class="stat-item highlight">
            <div class="stat-value streak">${stats.global.currentStreak}</div>
            <div class="stat-label">${t('currentStreak')}</div>
          </div>

          <div class="stat-item">
            <div class="stat-value">${stats.global.bestStreak}</div>
            <div class="stat-label">${t('bestStreak')}</div>
          </div>

          <div class="stat-item">
            <div class="stat-value">${masteredCount}</div>
            <div class="stat-label">${t('entitiesMastered')}</div>
          </div>
        </div>

        ${retryCount > 0 ? `
          <div class="retry-info">
            <span class="retry-icon">\u{1F4DD}</span>
            <span class="retry-text">${t('retryPoolCount')}: <strong>${retryCount}</strong></span>
          </div>
        ` : ''}

        ${this.renderStreakIndicator(stats.global.currentStreak)}

        <div class="help-link">
          <a href="dxcc-list.html" class="help-link-btn">
            <span class="help-icon">\u{2753}</span>
            <span>Präfix-Übersicht</span>
          </a>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }

  /**
   * Render streak indicator (fire emojis for streaks)
   */
  renderStreakIndicator(streak) {
    if (streak < 3) return '';

    let flames = '';
    if (streak >= 50) {
      flames = '\u{1F525}\u{1F525}\u{1F525}\u{1F525}\u{1F525}';
    } else if (streak >= 25) {
      flames = '\u{1F525}\u{1F525}\u{1F525}\u{1F525}';
    } else if (streak >= 10) {
      flames = '\u{1F525}\u{1F525}\u{1F525}';
    } else if (streak >= 5) {
      flames = '\u{1F525}\u{1F525}';
    } else {
      flames = '\u{1F525}';
    }

    return `
      <div class="streak-indicator">
        <span class="streak-flames">${flames}</span>
      </div>
    `;
  }

  /**
   * Update just the streak display (for quick updates)
   */
  updateStreak(currentStreak, wasCorrect) {
    const streakEl = this.container.querySelector('.stat-value.streak');
    if (streakEl) {
      streakEl.textContent = currentStreak;

      // Add pulse animation
      streakEl.classList.remove('pulse-correct', 'pulse-incorrect');
      void streakEl.offsetWidth; // Force reflow
      streakEl.classList.add(wasCorrect ? 'pulse-correct' : 'pulse-incorrect');
    }
  }

  /**
   * Listen for language changes
   */
  attachLanguageListener() {
    window.addEventListener('languagechange', () => {
      // Will be re-rendered by app on language change
    });
  }
}
