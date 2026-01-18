/**
 * Modal Dialogs
 * Privacy notice, reset confirmation, and toast notifications
 */

import { t } from '../i18n/translations.js';

/**
 * Get or create the modal container
 */
function getModalContainer() {
  let container = document.getElementById('modal-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'modal-container';
    document.body.appendChild(container);
  }
  return container;
}

/**
 * Show Privacy Notice Modal
 */
export function showPrivacyNotice(onClose = () => {}) {
  const container = getModalContainer();

  const html = `
    <div class="modal-overlay" id="privacy-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>\u{1F512} ${t('privacyTitle')}</h2>
        </div>
        <div class="modal-body">
          <p><strong>${t('privacyText1')}</strong></p>
          <ul class="privacy-list">
            <li>\u2713 ${t('privacyText2')}</li>
            <li>\u2713 ${t('privacyText3')}</li>
            <li>\u2713 ${t('privacyText4')}</li>
            <li>\u2713 ${t('privacyText5')}</li>
            <li>\u2713 ${t('privacyText6')}</li>
            <li>\u26A0 ${t('privacyText7')}</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" id="privacy-accept">${t('understand')}</button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Animate in
  requestAnimationFrame(() => {
    container.querySelector('.modal-overlay')?.classList.add('visible');
  });

  // Close button
  const acceptBtn = container.querySelector('#privacy-accept');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      closeModal('privacy-modal', onClose);
    });
  }

  // Click outside to close
  const overlay = container.querySelector('.modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal('privacy-modal', onClose);
      }
    });
  }

  // Escape to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal('privacy-modal', onClose);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/**
 * Show Imprint Modal
 */
export function showImprint(onClose = () => {}) {
  const container = getModalContainer();

  const html = `
    <div class="modal-overlay" id="imprint-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>${t('imprintTitle')}</h2>
        </div>
        <div class="modal-body">
          <p><strong>${t('imprintResponsible')}</strong></p>
          <p>
            Kurt Baumann<br>
            OE8YML<br>
            9521 Treffen<br>
            Austria
          </p>
          <p><strong>${t('imprintContact')}</strong></p>
          <p>
            E-Mail: <a href="mailto:oe8yml@rednil.at">oe8yml@rednil.at</a>
          </p>
          <p class="imprint-note">${t('imprintNote')}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" id="imprint-close">${t('close')}</button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Animate in
  requestAnimationFrame(() => {
    container.querySelector('.modal-overlay')?.classList.add('visible');
  });

  // Close button
  const closeBtn = container.querySelector('#imprint-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeModal('imprint-modal', onClose);
    });
  }

  // Click outside to close
  const overlay = container.querySelector('.modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal('imprint-modal', onClose);
      }
    });
  }

  // Escape to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal('imprint-modal', onClose);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/**
 * Show Reset Confirmation Modal
 */
export function showResetConfirmation(onConfirm = () => {}, onCancel = () => {}) {
  const container = getModalContainer();

  const html = `
    <div class="modal-overlay" id="reset-modal">
      <div class="modal-content modal-danger">
        <div class="modal-header">
          <h2>\u26A0 ${t('resetTitle')}</h2>
        </div>
        <div class="modal-body">
          <p>${t('resetWarning')}</p>
          <ul class="reset-list">
            <li>\u{1F4CA} ${t('resetItem1')}</li>
            <li>\u{1F3C6} ${t('resetItem2')}</li>
            <li>\u{1F4DD} ${t('resetItem3')}</li>
          </ul>
          <p class="warning-text"><strong>\u26A0 ${t('resetConfirm')}</strong></p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="reset-cancel">${t('cancel')}</button>
          <button class="btn btn-danger" id="reset-confirm">${t('resetButton')}</button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Animate in
  requestAnimationFrame(() => {
    container.querySelector('.modal-overlay')?.classList.add('visible');
  });

  // Cancel button
  const cancelBtn = container.querySelector('#reset-cancel');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      closeModal('reset-modal', onCancel);
    });
  }

  // Confirm button
  const confirmBtn = container.querySelector('#reset-confirm');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      closeModal('reset-modal', onConfirm);
    });
  }

  // Click outside to cancel
  const overlay = container.querySelector('.modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal('reset-modal', onCancel);
      }
    });
  }

  // Escape to cancel
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal('reset-modal', onCancel);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/**
 * Close a modal by ID
 */
function closeModal(modalId, callback = () => {}) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('visible');
    setTimeout(() => {
      const container = getModalContainer();
      container.innerHTML = '';
      callback();
    }, 300);
  }
}

/**
 * Show a toast notification
 */
export function showToast(message, type = 'success', duration = 3000) {
  // Remove existing toasts
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '\u2713' : type === 'error' ? '\u2717' : '\u2139'}</span>
    <span class="toast-message">${message}</span>
  `;

  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  // Auto-remove
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, duration);

  return toast;
}

/**
 * Show achievement unlocked toast
 */
export function showAchievementToast(achievement) {
  const name = t(achievement.id) || achievement.name;

  const toast = document.createElement('div');
  toast.className = 'toast toast-achievement';
  toast.innerHTML = `
    <span class="toast-icon achievement-icon">${achievement.icon}</span>
    <div class="toast-content">
      <span class="toast-title">${t('achievementUnlocked')}</span>
      <span class="toast-message">${name}</span>
    </div>
  `;

  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  // Auto-remove
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 4000);

  return toast;
}
