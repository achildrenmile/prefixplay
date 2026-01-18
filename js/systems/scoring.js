/**
 * Scoring System
 * Tracks and persists game scores using localStorage
 */

const STORAGE_KEY = 'prefixplay_scores';

/**
 * Scoring System Class
 * Manages all score tracking and persistence
 */
export class ScoringSystem {
  constructor() {
    this.data = this.load();
  }

  /**
   * Load scores from localStorage
   */
  load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with defaults to handle new fields
        return this.mergeWithDefaults(parsed);
      }
    } catch (e) {
      console.warn('Failed to load scores:', e);
    }
    return this.getDefaultData();
  }

  /**
   * Get default data structure
   */
  getDefaultData() {
    return {
      global: {
        totalAttempts: 0,
        totalCorrect: 0,
        currentStreak: 0,
        bestStreak: 0
      },
      byMode: {
        'prefix-to-country': { attempts: 0, correct: 0, bestStreak: 0, currentStreak: 0 },
        'country-to-prefix': { attempts: 0, correct: 0, bestStreak: 0, currentStreak: 0 }
      },
      byEntity: {},
      lastPlayed: null,
      firstPlayed: null
    };
  }

  /**
   * Merge loaded data with defaults (handles schema updates)
   */
  mergeWithDefaults(loaded) {
    const defaults = this.getDefaultData();

    return {
      global: { ...defaults.global, ...loaded.global },
      byMode: {
        ...defaults.byMode,
        ...Object.fromEntries(
          Object.entries(loaded.byMode || {}).map(([key, val]) => [
            key,
            { ...defaults.byMode[key], ...val }
          ])
        )
      },
      byEntity: loaded.byEntity || {},
      lastPlayed: loaded.lastPlayed || null,
      firstPlayed: loaded.firstPlayed || null
    };
  }

  /**
   * Save scores to localStorage
   */
  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn('Failed to save scores:', e);
    }
  }

  /**
   * Record an answer
   */
  recordAnswer(modeId, entityId, wasCorrect) {
    const now = Date.now();

    // Set first played if not set
    if (!this.data.firstPlayed) {
      this.data.firstPlayed = now;
    }

    // Update global stats
    this.data.global.totalAttempts++;
    if (wasCorrect) {
      this.data.global.totalCorrect++;
      this.data.global.currentStreak++;
      if (this.data.global.currentStreak > this.data.global.bestStreak) {
        this.data.global.bestStreak = this.data.global.currentStreak;
      }
    } else {
      this.data.global.currentStreak = 0;
    }

    // Update mode stats
    if (!this.data.byMode[modeId]) {
      this.data.byMode[modeId] = { attempts: 0, correct: 0, bestStreak: 0, currentStreak: 0 };
    }
    const mode = this.data.byMode[modeId];
    mode.attempts++;
    if (wasCorrect) {
      mode.correct++;
      mode.currentStreak++;
      if (mode.currentStreak > mode.bestStreak) {
        mode.bestStreak = mode.currentStreak;
      }
    } else {
      mode.currentStreak = 0;
    }

    // Update entity stats
    const entityKey = String(entityId);
    if (!this.data.byEntity[entityKey]) {
      this.data.byEntity[entityKey] = { attempts: 0, correct: 0, lastSeen: null };
    }
    const entity = this.data.byEntity[entityKey];
    entity.attempts++;
    if (wasCorrect) {
      entity.correct++;
    }
    entity.lastSeen = now;

    // Update last played
    this.data.lastPlayed = now;

    // Save to localStorage
    this.save();

    return this.data;
  }

  /**
   * Get all stats
   */
  getStats() {
    return { ...this.data };
  }

  /**
   * Get global accuracy percentage
   */
  getGlobalAccuracy() {
    if (this.data.global.totalAttempts === 0) return 0;
    return (this.data.global.totalCorrect / this.data.global.totalAttempts) * 100;
  }

  /**
   * Get mode accuracy percentage
   */
  getModeAccuracy(modeId) {
    const mode = this.data.byMode[modeId];
    if (!mode || mode.attempts === 0) return 0;
    return (mode.correct / mode.attempts) * 100;
  }

  /**
   * Get entity accuracy
   */
  getEntityAccuracy(entityId) {
    const entity = this.data.byEntity[String(entityId)];
    if (!entity || entity.attempts === 0) return 0;
    return (entity.correct / entity.attempts) * 100;
  }

  /**
   * Get mastered entities (>=80% accuracy with >=3 attempts)
   */
  getMasteredEntities(threshold = 0.8, minAttempts = 3) {
    return Object.entries(this.data.byEntity)
      .filter(([_, stats]) =>
        stats.attempts >= minAttempts &&
        (stats.correct / stats.attempts) >= threshold
      )
      .map(([id]) => parseInt(id, 10));
  }

  /**
   * Get weak entities (entities with low accuracy that need practice)
   */
  getWeakEntities(threshold = 0.5, minAttempts = 2) {
    return Object.entries(this.data.byEntity)
      .filter(([_, stats]) =>
        stats.attempts >= minAttempts &&
        (stats.correct / stats.attempts) < threshold
      )
      .map(([id]) => parseInt(id, 10));
  }

  /**
   * Get number of unique entities attempted
   */
  getUniqueEntitiesCount() {
    return Object.keys(this.data.byEntity).length;
  }

  /**
   * Reset all scores
   */
  reset() {
    this.data = this.getDefaultData();
    this.save();
  }
}
