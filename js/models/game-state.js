/**
 * Game State Management
 * Centralized state for PrefixPlay
 */

/**
 * Available game modes
 * Each mode defines how questions are generated
 */
export const GAME_MODES = {
  // DXCC World Modes
  PREFIX_TO_COUNTRY: {
    id: 'prefix-to-country',
    name: 'Prefix \u2192 Country',
    icon: '\u{1F4E1}',
    category: 'dxcc',
    description: 'Identify the country from a callsign prefix',
    questionTemplate: 'What country uses the prefix {prefix}?',
    answerType: 'country'
  },
  COUNTRY_TO_PREFIX: {
    id: 'country-to-prefix',
    name: 'Country \u2192 Prefix',
    icon: '\u{1F30D}',
    category: 'dxcc',
    description: 'Identify the prefix from a country name',
    questionTemplate: 'What is the primary prefix for {country}?',
    answerType: 'prefix'
  },

  // Austria (OE) Modes
  OE_PREFIX_TO_STATE: {
    id: 'oe-prefix-to-state',
    name: 'OE \u2192 Bundesland',
    icon: '\u{1F1E6}\u{1F1F9}',
    category: 'austria',
    description: 'Identify the Austrian federal state from OE prefix',
    questionTemplate: 'Which federal state uses {prefix}?',
    answerType: 'state'
  },
  STATE_TO_OE_PREFIX: {
    id: 'state-to-oe-prefix',
    name: 'Bundesland \u2192 OE',
    icon: '\u{1F3D4}\u{FE0F}',
    category: 'austria',
    description: 'Identify the OE prefix from federal state',
    questionTemplate: 'What is the prefix for {state}?',
    answerType: 'prefix'
  },

  // Neighbors (bordering countries) Modes
  NEIGHBOR_PREFIX_TO_COUNTRY: {
    id: 'neighbor-prefix-to-country',
    name: 'Nachbar-Prefix \u2192 Land',
    icon: '\u{1F1EA}\u{1F1FA}',
    category: 'neighbors',
    description: 'Identify the neighboring country from prefix',
    questionTemplate: 'Which country uses {prefix}?',
    answerType: 'country'
  },
  COUNTRY_TO_NEIGHBOR_PREFIX: {
    id: 'country-to-neighbor-prefix',
    name: 'Land \u2192 Nachbar-Prefix',
    icon: '\u{1F5FA}\u{FE0F}',
    category: 'neighbors',
    description: 'Identify the prefix of a neighboring country',
    questionTemplate: 'What is the prefix for {country}?',
    answerType: 'prefix'
  }
};

/**
 * Get all available game modes
 */
export function getGameModes() {
  return Object.values(GAME_MODES);
}

/**
 * Get game modes by category
 */
export function getGameModesByCategory(category) {
  return Object.values(GAME_MODES).filter(m => m.category === category);
}

/**
 * Get DXCC (world) game modes
 */
export function getDxccModes() {
  return getGameModesByCategory('dxcc');
}

/**
 * Get Austria game modes
 */
export function getAustriaModes() {
  return getGameModesByCategory('austria');
}

/**
 * Get Neighbors (bordering countries) game modes
 */
export function getNeighborModes() {
  return getGameModesByCategory('neighbors');
}

/**
 * Get game mode by ID
 */
export function getGameModeById(id) {
  return Object.values(GAME_MODES).find(m => m.id === id);
}

/**
 * Game State Class
 * Manages the current state of the game session
 */
export class GameState {
  constructor() {
    this.currentMode = GAME_MODES.PREFIX_TO_COUNTRY;
    this.currentQuestion = null;
    this.questionHistory = [];
    this.isPracticeMode = false;
    this.sessionStats = {
      attempted: 0,
      correct: 0
    };
  }

  /**
   * Set the current game mode
   */
  setMode(modeId) {
    const mode = getGameModeById(modeId);
    if (mode) {
      this.currentMode = mode;
      this.currentQuestion = null;
    }
  }

  /**
   * Toggle practice mode (focus on mistakes)
   */
  togglePracticeMode() {
    this.isPracticeMode = !this.isPracticeMode;
  }

  /**
   * Set practice mode explicitly
   */
  setPracticeMode(enabled) {
    this.isPracticeMode = enabled;
  }

  /**
   * Set the current question
   */
  setCurrentQuestion(question) {
    this.currentQuestion = question;
  }

  /**
   * Record an answer and update history
   */
  recordAnswer(question, userAnswer) {
    question.answered = true;
    question.userAnswer = userAnswer;
    question.wasCorrect = userAnswer === question.correctAnswer;
    question.answeredAt = Date.now();

    // Update session stats
    this.sessionStats.attempted++;
    if (question.wasCorrect) {
      this.sessionStats.correct++;
    }

    // Add to history (keep last 20 to avoid repeats)
    this.questionHistory.push({
      entityId: question.entityId,
      wasCorrect: question.wasCorrect,
      timestamp: question.answeredAt
    });

    if (this.questionHistory.length > 20) {
      this.questionHistory.shift();
    }

    return question.wasCorrect;
  }

  /**
   * Get recently asked entity IDs (for avoiding repeats)
   */
  getRecentEntityIds(count = 10) {
    return this.questionHistory
      .slice(-count)
      .map(h => h.entityId);
  }

  /**
   * Get session accuracy
   */
  getSessionAccuracy() {
    if (this.sessionStats.attempted === 0) return 0;
    return (this.sessionStats.correct / this.sessionStats.attempted) * 100;
  }

  /**
   * Reset session stats (not persistent stats)
   */
  resetSession() {
    this.sessionStats = { attempted: 0, correct: 0 };
    this.questionHistory = [];
    this.currentQuestion = null;
  }
}
