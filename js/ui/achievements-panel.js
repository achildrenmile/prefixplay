/**
 * Achievements Panel Component
 * Displays achievements/badges
 */

import { t } from '../i18n/translations.js';
import { getAchievementCategories } from '../systems/achievements.js';

/**
 * Achievements Panel Class
 */
export class AchievementsPanel {
  constructor(container) {
    this.container = container;
    this.isVisible = false;
  }

  /**
   * Show achievements panel
   */
  show(achievements, stats = {}) {
    this.isVisible = true;
    const categories = getAchievementCategories();

    // Group achievements by category
    const grouped = {};
    for (const achievement of achievements) {
      if (!grouped[achievement.category]) {
        grouped[achievement.category] = [];
      }
      grouped[achievement.category].push(achievement);
    }

    const unlockedCount = achievements.filter(a => a.unlocked).length;
    const totalCount = achievements.length;

    const html = `
      <div class="achievements-overlay">
        <div class="achievements-modal">
          <div class="achievements-header">
            <h2>\u{1F3C6} ${t('achievementsTitle')}</h2>
            <p class="achievements-progress">${t('unlockedCount', { count: unlockedCount, total: totalCount })}</p>
            <button class="close-btn" aria-label="${t('close')}">\u2715</button>
          </div>

          <div class="achievements-content">
            ${Object.entries(categories).map(([catId, catInfo]) => {
              const catAchievements = grouped[catId] || [];
              if (catAchievements.length === 0) return '';

              const catUnlocked = catAchievements.filter(a => a.unlocked).length;

              return `
                <div class="achievement-category">
                  <h3 class="category-title">
                    ${catInfo.icon} ${t('cat' + catId.charAt(0).toUpperCase() + catId.slice(1))}
                    <span class="category-count">(${catUnlocked}/${catAchievements.length})</span>
                  </h3>
                  <div class="achievement-grid">
                    ${catAchievements.map(a => this.renderAchievement(a)).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.attachListeners();

    // Animate in
    requestAnimationFrame(() => {
      this.container.querySelector('.achievements-overlay')?.classList.add('visible');
    });
  }

  /**
   * Render a single achievement
   */
  renderAchievement(achievement) {
    const name = t(achievement.id) || achievement.name;
    const desc = t(achievement.id + '-desc') || achievement.description;

    return `
      <div class="achievement-badge ${achievement.unlocked ? 'unlocked' : 'locked'}">
        <div class="badge-icon">${achievement.icon}</div>
        <div class="badge-info">
          <div class="badge-name">${name}</div>
          <div class="badge-desc">${desc}</div>
        </div>
        <div class="badge-status">
          ${achievement.unlocked ? '\u2713' : '\u{1F512}'}
        </div>
      </div>
    `;
  }

  /**
   * Hide achievements panel
   */
  hide() {
    const overlay = this.container.querySelector('.achievements-overlay');
    if (overlay) {
      overlay.classList.remove('visible');
      setTimeout(() => {
        this.container.innerHTML = '';
        this.isVisible = false;
      }, 300);
    }
  }

  /**
   * Attach event listeners
   */
  attachListeners() {
    // Close button
    const closeBtn = this.container.querySelector('.close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hide());
    }

    // Click outside to close
    const overlay = this.container.querySelector('.achievements-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.hide();
        }
      });
    }

    // Escape key to close
    const escHandler = (e) => {
      if (e.key === 'Escape' && this.isVisible) {
        this.hide();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }
}
