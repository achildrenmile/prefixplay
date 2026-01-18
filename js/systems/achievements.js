/**
 * Achievements System
 * Badge-based achievement tracking with localStorage persistence
 */

const STORAGE_KEY = 'prefixplay_achievements';
const META_KEY = 'prefixplay_achievements_meta';

/**
 * Achievement definitions
 */
export const ACHIEVEMENTS = {
  // Getting started
  FIRST_STEPS: {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Get your first correct answer',
    icon: '\u{1F3AF}',
    category: 'beginner',
    condition: (stats) => stats.global.totalCorrect >= 1
  },
  GETTING_STARTED: {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Answer 10 questions correctly',
    icon: '\u{1F4FB}',
    category: 'beginner',
    condition: (stats) => stats.global.totalCorrect >= 10
  },
  WARMING_UP: {
    id: 'warming-up',
    name: 'Warming Up',
    description: 'Answer 25 questions correctly',
    icon: '\u{1F525}',
    category: 'beginner',
    condition: (stats) => stats.global.totalCorrect >= 25
  },

  // Milestones
  HALF_CENTURY: {
    id: 'half-century',
    name: 'Half Century',
    description: 'Answer 50 questions correctly',
    icon: '\u{1F3C6}',
    category: 'milestone',
    condition: (stats) => stats.global.totalCorrect >= 50
  },
  CENTURY: {
    id: 'century',
    name: 'Century Club',
    description: 'Answer 100 questions correctly',
    icon: '\u{1F4AF}',
    category: 'milestone',
    condition: (stats) => stats.global.totalCorrect >= 100
  },
  DOUBLE_CENTURY: {
    id: 'double-century',
    name: 'Double Century',
    description: 'Answer 200 questions correctly',
    icon: '\u{1F31F}',
    category: 'milestone',
    condition: (stats) => stats.global.totalCorrect >= 200
  },
  FIVE_HUNDRED: {
    id: 'five-hundred',
    name: '500 Club',
    description: 'Answer 500 questions correctly',
    icon: '\u{1F451}',
    category: 'milestone',
    condition: (stats) => stats.global.totalCorrect >= 500
  },

  // Streaks
  ON_A_ROLL: {
    id: 'on-a-roll',
    name: 'On a Roll',
    description: 'Get 5 correct answers in a row',
    icon: '\u{1F680}',
    category: 'streak',
    condition: (stats) => stats.global.bestStreak >= 5
  },
  HOT_STREAK: {
    id: 'hot-streak',
    name: 'Hot Streak',
    description: 'Get 10 correct answers in a row',
    icon: '\u{1F525}',
    category: 'streak',
    condition: (stats) => stats.global.bestStreak >= 10
  },
  UNSTOPPABLE: {
    id: 'unstoppable',
    name: 'Unstoppable',
    description: 'Get 25 correct answers in a row',
    icon: '\u{26A1}',
    category: 'streak',
    condition: (stats) => stats.global.bestStreak >= 25
  },
  PERFECT_FIFTY: {
    id: 'perfect-fifty',
    name: 'Perfect Fifty',
    description: 'Get 50 correct answers in a row',
    icon: '\u{1F308}',
    category: 'streak',
    condition: (stats) => stats.global.bestStreak >= 50
  },

  // Exploration (DXCC mastery)
  EXPLORER: {
    id: 'explorer',
    name: 'Explorer',
    description: 'Try questions about 25 different entities',
    icon: '\u{1F9ED}',
    category: 'exploration',
    condition: (stats) => Object.keys(stats.byEntity).length >= 25
  },
  WORLD_TRAVELER: {
    id: 'world-traveler',
    name: 'World Traveler',
    description: 'Master 25 different DXCC entities',
    icon: '\u{1F30D}',
    category: 'exploration',
    condition: (stats, scoring) => scoring.getMasteredEntities().length >= 25
  },
  GLOBE_TROTTER: {
    id: 'globe-trotter',
    name: 'Globe Trotter',
    description: 'Master 50 different DXCC entities',
    icon: '\u{2708}\u{FE0F}',
    category: 'exploration',
    condition: (stats, scoring) => scoring.getMasteredEntities().length >= 50
  },
  DXCC_MASTER: {
    id: 'dxcc-master',
    name: 'DXCC Master',
    description: 'Master 100 different DXCC entities',
    icon: '\u{1F451}',
    category: 'exploration',
    condition: (stats, scoring) => scoring.getMasteredEntities().length >= 100
  },
  DX_LEGEND: {
    id: 'dx-legend',
    name: 'DX Legend',
    description: 'Master 200 different DXCC entities',
    icon: '\u{1F3C5}',
    category: 'exploration',
    condition: (stats, scoring) => scoring.getMasteredEntities().length >= 200
  },

  // Accuracy
  SHARPSHOOTER: {
    id: 'sharpshooter',
    name: 'Sharpshooter',
    description: 'Achieve 80% accuracy over 25+ attempts',
    icon: '\u{1F3AF}',
    category: 'accuracy',
    condition: (stats) =>
      stats.global.totalAttempts >= 25 &&
      (stats.global.totalCorrect / stats.global.totalAttempts) >= 0.8
  },
  PERFECTIONIST: {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Achieve 90% accuracy over 50+ attempts',
    icon: '\u{2B50}',
    category: 'accuracy',
    condition: (stats) =>
      stats.global.totalAttempts >= 50 &&
      (stats.global.totalCorrect / stats.global.totalAttempts) >= 0.9
  },
  ELITE: {
    id: 'elite',
    name: 'Elite',
    description: 'Achieve 95% accuracy over 100+ attempts',
    icon: '\u{1F48E}',
    category: 'accuracy',
    condition: (stats) =>
      stats.global.totalAttempts >= 100 &&
      (stats.global.totalCorrect / stats.global.totalAttempts) >= 0.95
  },

  // Practice mode
  COMEBACK_KID: {
    id: 'comeback-kid',
    name: 'Comeback Kid',
    description: 'Clear 10 items from your retry pool',
    icon: '\u{1F4AA}',
    category: 'practice',
    condition: (stats, scoring, meta) => (meta.retryCleared || 0) >= 10
  },
  NEVER_GIVE_UP: {
    id: 'never-give-up',
    name: 'Never Give Up',
    description: 'Clear 50 items from your retry pool',
    icon: '\u{1F9D7}',
    category: 'practice',
    condition: (stats, scoring, meta) => (meta.retryCleared || 0) >= 50
  },

  // Dedication
  DEDICATED: {
    id: 'dedicated',
    name: 'Dedicated',
    description: 'Attempt 500 questions total',
    icon: '\u{1F396}\u{FE0F}',
    category: 'dedication',
    condition: (stats) => stats.global.totalAttempts >= 500
  },
  OBSESSED: {
    id: 'obsessed',
    name: 'Obsessed',
    description: 'Attempt 1000 questions total',
    icon: '\u{1F3C7}',
    category: 'dedication',
    condition: (stats) => stats.global.totalAttempts >= 1000
  },

  // Mode mastery
  PREFIX_PRO: {
    id: 'prefix-pro',
    name: 'Prefix Pro',
    description: 'Answer 50 Prefix\u2192Country questions correctly',
    icon: '\u{1F4E1}',
    category: 'mode',
    condition: (stats) => (stats.byMode['prefix-to-country']?.correct || 0) >= 50
  },
  COUNTRY_EXPERT: {
    id: 'country-expert',
    name: 'Country Expert',
    description: 'Answer 50 Country\u2192Prefix questions correctly',
    icon: '\u{1F5FA}\u{FE0F}',
    category: 'mode',
    condition: (stats) => (stats.byMode['country-to-prefix']?.correct || 0) >= 50
  }
};

/**
 * Get achievement categories
 */
export function getAchievementCategories() {
  return {
    beginner: { name: 'Getting Started', icon: '\u{1F331}' },
    milestone: { name: 'Milestones', icon: '\u{1F3C6}' },
    streak: { name: 'Streaks', icon: '\u{1F525}' },
    exploration: { name: 'Exploration', icon: '\u{1F30D}' },
    accuracy: { name: 'Accuracy', icon: '\u{1F3AF}' },
    practice: { name: 'Practice', icon: '\u{1F4AA}' },
    dedication: { name: 'Dedication', icon: '\u{1F396}\u{FE0F}' },
    mode: { name: 'Mode Mastery', icon: '\u{2B50}' }
  };
}

/**
 * Achievement System Class
 */
export class AchievementSystem {
  constructor(scoringSystem) {
    this.scoring = scoringSystem;
    this.unlocked = this.load();
    this.meta = this.loadMeta();
  }

  /**
   * Load unlocked achievements from localStorage
   */
  load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch (e) {
      console.warn('Failed to load achievements:', e);
      return new Set();
    }
  }

  /**
   * Load metadata from localStorage
   */
  loadMeta() {
    try {
      const stored = localStorage.getItem(META_KEY);
      return stored ? JSON.parse(stored) : { retryCleared: 0 };
    } catch (e) {
      return { retryCleared: 0 };
    }
  }

  /**
   * Save achievements to localStorage
   */
  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.unlocked]));
      localStorage.setItem(META_KEY, JSON.stringify(this.meta));
    } catch (e) {
      console.warn('Failed to save achievements:', e);
    }
  }

  /**
   * Check for newly unlocked achievements
   */
  checkAndUnlock(stats) {
    const newlyUnlocked = [];

    for (const achievement of Object.values(ACHIEVEMENTS)) {
      if (!this.unlocked.has(achievement.id)) {
        try {
          if (achievement.condition(stats, this.scoring, this.meta)) {
            this.unlocked.add(achievement.id);
            newlyUnlocked.push(achievement);
          }
        } catch (e) {
          // Condition check failed, skip this achievement
        }
      }
    }

    if (newlyUnlocked.length > 0) {
      this.save();
    }

    return newlyUnlocked;
  }

  /**
   * Increment retry clear counter
   */
  incrementRetryClear() {
    this.meta.retryCleared = (this.meta.retryCleared || 0) + 1;
    this.save();
  }

  /**
   * Get all achievements with unlock status
   */
  getAll() {
    return Object.values(ACHIEVEMENTS).map(a => ({
      ...a,
      unlocked: this.unlocked.has(a.id)
    }));
  }

  /**
   * Get achievements by category
   */
  getByCategory() {
    const all = this.getAll();
    const categories = getAchievementCategories();
    const result = {};

    for (const [catId, catInfo] of Object.entries(categories)) {
      result[catId] = {
        ...catInfo,
        achievements: all.filter(a => a.category === catId)
      };
    }

    return result;
  }

  /**
   * Get count of unlocked achievements
   */
  getUnlockedCount() {
    return this.unlocked.size;
  }

  /**
   * Get total achievement count
   */
  getTotalCount() {
    return Object.keys(ACHIEVEMENTS).length;
  }

  /**
   * Check if a specific achievement is unlocked
   */
  isUnlocked(achievementId) {
    return this.unlocked.has(achievementId);
  }

  /**
   * Reset all achievements
   */
  reset() {
    this.unlocked = new Set();
    this.meta = { retryCleared: 0 };
    this.save();
  }
}
