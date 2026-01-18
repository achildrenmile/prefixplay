/**
 * Game Card Component
 * Reusable card for displaying questions and answer options
 */

import { t } from '../i18n/translations.js';

/**
 * Game Card Class
 */
export class GameCard {
  constructor(container, options = {}) {
    this.container = container;
    this.onAnswer = options.onAnswer || (() => {});
    this.onNext = options.onNext || (() => {});
    this.element = null;
    this.question = null;
    this.isLocked = false;
  }

  /**
   * Render a question
   */
  render(question) {
    this.question = question;
    this.isLocked = false;

    const html = `
      <div class="game-card">
        <div class="card-header">
          <span class="mode-icon">${question.metadata?.icon || '\u{1F4E1}'}</span>
          <span class="mode-label">${question.mode.name}</span>
        </div>
        <div class="card-prompt">
          <h2>${question.prompt}</h2>
        </div>
        <div class="card-options">
          ${question.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}" data-value="${this.escapeHtml(opt.value)}">
              ${opt.flag ? `<span class="flag">${opt.flag}</span>` : ''}
              <span class="option-text">${this.escapeHtml(opt.label)}</span>
            </button>
          `).join('')}
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
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
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
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }
}
