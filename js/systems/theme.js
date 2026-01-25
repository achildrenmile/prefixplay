/**
 * Theme Management System
 * Handles dark, light, and auto (system) themes
 */

const STORAGE_KEY = 'prefixplay_theme';
const VALID_THEMES = ['dark', 'light', 'auto'];

let currentTheme = 'dark';

/**
 * Initialize theme system
 */
export function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && VALID_THEMES.includes(stored)) {
    currentTheme = stored;
  } else {
    currentTheme = 'dark';
  }
  applyTheme(currentTheme);
  return currentTheme;
}

/**
 * Get current theme
 */
export function getTheme() {
  return currentTheme;
}

/**
 * Set theme
 */
export function setTheme(theme) {
  if (!VALID_THEMES.includes(theme)) {
    return false;
  }
  currentTheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  return true;
}

/**
 * Apply theme to document
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Get available themes
 */
export function getAvailableThemes() {
  return [
    { code: 'dark', icon: '🌙' },
    { code: 'light', icon: '☀️' },
    { code: 'auto', icon: '🔄' }
  ];
}

/**
 * Check if current effective theme is light
 * (considers auto mode with system preference)
 */
export function isLightTheme() {
  if (currentTheme === 'light') return true;
  if (currentTheme === 'auto') {
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  }
  return false;
}
