/**
 * Retry Pool System
 * Tracks wrong answers for practice mode
 */

const STORAGE_KEY = 'prefixplay_retry';

/**
 * Retry Pool Class
 * Manages the pool of entities that need practice
 */
export class RetryPool {
  constructor() {
    this.pool = this.load();
  }

  /**
   * Load pool from localStorage
   */
  load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.warn('Failed to load retry pool:', e);
      return {};
    }
  }

  /**
   * Save pool to localStorage
   */
  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.pool));
    } catch (e) {
      console.warn('Failed to save retry pool:', e);
    }
  }

  /**
   * Add an entity to the retry pool for a specific mode
   */
  add(modeId, entityId) {
    if (!this.pool[modeId]) {
      this.pool[modeId] = [];
    }

    // Only add if not already in pool
    if (!this.pool[modeId].includes(entityId)) {
      this.pool[modeId].push(entityId);
      this.save();
    }
  }

  /**
   * Remove an entity from the retry pool
   * Returns true if item was removed
   */
  remove(modeId, entityId) {
    if (this.pool[modeId]) {
      const index = this.pool[modeId].indexOf(entityId);
      if (index !== -1) {
        this.pool[modeId].splice(index, 1);
        this.save();
        return true;
      }
    }
    return false;
  }

  /**
   * Check if pool has items for a mode
   */
  hasItems(modeId) {
    return this.pool[modeId]?.length > 0;
  }

  /**
   * Get a random entity ID from the pool for a mode
   */
  getNext(modeId) {
    if (!this.hasItems(modeId)) return null;
    const pool = this.pool[modeId];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  /**
   * Get all entity IDs in the pool for a mode
   */
  getAll(modeId) {
    return this.pool[modeId] || [];
  }

  /**
   * Get count of items in pool for a mode
   */
  getCount(modeId) {
    return this.pool[modeId]?.length || 0;
  }

  /**
   * Get total count across all modes
   */
  getTotalCount() {
    return Object.values(this.pool).reduce((sum, arr) => sum + arr.length, 0);
  }

  /**
   * Get counts by mode
   */
  getCountsByMode() {
    const counts = {};
    for (const [modeId, entities] of Object.entries(this.pool)) {
      counts[modeId] = entities.length;
    }
    return counts;
  }

  /**
   * Clear pool for a specific mode
   */
  clearMode(modeId) {
    if (this.pool[modeId]) {
      delete this.pool[modeId];
      this.save();
    }
  }

  /**
   * Clear entire pool
   */
  clearAll() {
    this.pool = {};
    this.save();
  }

  /**
   * Check if an entity is in the pool for a mode
   */
  contains(modeId, entityId) {
    return this.pool[modeId]?.includes(entityId) || false;
  }
}
