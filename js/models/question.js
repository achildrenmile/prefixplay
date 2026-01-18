/**
 * Question Model and Generator
 * Handles question creation for all game modes
 */

import { DXCC_ENTITIES, getRandomEntity, CONTINENT_GROUPS } from '../data/dxcc.js';
import { AUSTRIA_STATES, getRandomState, initializeAustriaLookups } from '../data/austria.js';
import { GAME_MODES } from './game-state.js';

// Initialize Austria lookups
initializeAustriaLookups();

/**
 * Question class representing a single quiz question
 */
export class Question {
  constructor({ mode, prompt, correctAnswer, options, entityId, metadata = {} }) {
    this.mode = mode;
    this.prompt = prompt;
    this.correctAnswer = correctAnswer;
    this.options = options; // Array of { value, label, flag? }
    this.entityId = entityId;
    this.metadata = metadata;
    this.answered = false;
    this.userAnswer = null;
    this.wasCorrect = null;
    this.createdAt = Date.now();
    this.answeredAt = null;
  }
}

/**
 * Question Generator class
 * Creates questions for different game modes
 */
export class QuestionGenerator {
  constructor(retryPool = null) {
    this.entities = DXCC_ENTITIES;
    this.retryPool = retryPool;
  }

  /**
   * Generate a question for the given mode
   */
  generate(mode, options = {}) {
    const { practiceMode = false, excludeRecent = [] } = options;

    // Handle Austrian modes separately
    if (mode.category === 'austria') {
      return this.generateAustrianQuestion(mode, options);
    }

    let targetEntity;

    // If practice mode and retry pool has items for this mode
    if (practiceMode && this.retryPool && this.retryPool.hasItems(mode.id)) {
      const entityId = this.retryPool.getNext(mode.id);
      targetEntity = this.entities.find(e => e.id === entityId);
    }

    // Fall back to random selection
    if (!targetEntity) {
      targetEntity = this.selectRandomEntity(excludeRecent);
    }

    // Generate question based on mode
    switch (mode.id) {
      case GAME_MODES.PREFIX_TO_COUNTRY.id:
        return this.generatePrefixToCountry(targetEntity, mode);
      case GAME_MODES.COUNTRY_TO_PREFIX.id:
        return this.generateCountryToPrefix(targetEntity, mode);
      default:
        return this.generatePrefixToCountry(targetEntity, mode);
    }
  }

  /**
   * Generate Austrian question
   */
  generateAustrianQuestion(mode, options = {}) {
    const { practiceMode = false, excludeRecent = [] } = options;

    let targetState;

    // If practice mode
    if (practiceMode && this.retryPool && this.retryPool.hasItems(mode.id)) {
      const stateId = this.retryPool.getNext(mode.id);
      targetState = AUSTRIA_STATES.find(s => s.id === stateId);
    }

    // Fall back to random
    if (!targetState) {
      targetState = getRandomState(excludeRecent);
    }

    switch (mode.id) {
      case GAME_MODES.OE_PREFIX_TO_STATE.id:
        return this.generateOEPrefixToState(targetState, mode);
      case GAME_MODES.STATE_TO_OE_PREFIX.id:
        return this.generateStateToOEPrefix(targetState, mode);
      default:
        return this.generateOEPrefixToState(targetState, mode);
    }
  }

  /**
   * Generate "OE Prefix -> Federal State" question
   */
  generateOEPrefixToState(state, mode) {
    // Get distractors (other Austrian states)
    const distractors = this.generateAustrianDistractors(state, 3);

    // Create options
    const options = [
      { value: state.name, label: state.name },
      ...distractors.map(d => ({ value: d.name, label: d.name }))
    ];

    this.shuffleArray(options);

    return new Question({
      mode,
      prompt: `Welches Bundesland verwendet "${state.prefix}"?`,
      correctAnswer: state.name,
      options,
      entityId: state.id,
      metadata: {
        prefix: state.prefix,
        capital: state.capital,
        icon: mode.icon
      }
    });
  }

  /**
   * Generate "Federal State -> OE Prefix" question
   */
  generateStateToOEPrefix(state, mode) {
    // Get distractors
    const distractors = this.generateAustrianDistractors(state, 3);

    // Create options
    const options = [
      { value: state.prefix, label: state.prefix },
      ...distractors.map(d => ({ value: d.prefix, label: d.prefix }))
    ];

    this.shuffleArray(options);

    return new Question({
      mode,
      prompt: `Welcher Prefix gilt für ${state.name}?`,
      correctAnswer: state.prefix,
      options,
      entityId: state.id,
      metadata: {
        state: state.name,
        capital: state.capital,
        icon: mode.icon
      }
    });
  }

  /**
   * Generate Austrian distractors
   */
  generateAustrianDistractors(correctState, count = 3) {
    const available = AUSTRIA_STATES.filter(s => s.id !== correctState.id);
    this.shuffleArray(available);
    return available.slice(0, count);
  }

  /**
   * Generate a "Prefix -> Country" question
   */
  generatePrefixToCountry(entity, mode) {
    // Pick a prefix to show (primary or random)
    const prefix = entity.primaryPrefix;

    // Generate distractors (wrong answers)
    const distractors = this.generateDistractors(entity, 3);

    // Create options
    const options = [
      { value: entity.name, label: entity.name, flag: entity.flag },
      ...distractors.map(d => ({ value: d.name, label: d.name, flag: d.flag }))
    ];

    // Shuffle options
    this.shuffleArray(options);

    return new Question({
      mode,
      prompt: `What country uses the prefix "${prefix}"?`,
      correctAnswer: entity.name,
      options,
      entityId: entity.id,
      metadata: {
        prefix,
        continent: entity.continent,
        icon: mode.icon
      }
    });
  }

  /**
   * Generate a "Country -> Prefix" question
   */
  generateCountryToPrefix(entity, mode) {
    // Generate distractors
    const distractors = this.generateDistractors(entity, 3);

    // Create options
    const options = [
      { value: entity.primaryPrefix, label: entity.primaryPrefix },
      ...distractors.map(d => ({ value: d.primaryPrefix, label: d.primaryPrefix }))
    ];

    // Shuffle options
    this.shuffleArray(options);

    return new Question({
      mode,
      prompt: `What is the primary prefix for ${entity.flag} ${entity.name}?`,
      correctAnswer: entity.primaryPrefix,
      options,
      entityId: entity.id,
      metadata: {
        country: entity.name,
        flag: entity.flag,
        continent: entity.continent,
        icon: mode.icon
      }
    });
  }

  /**
   * Select a random entity, excluding recent ones
   */
  selectRandomEntity(excludeIds = []) {
    const available = this.entities.filter(e => !excludeIds.includes(e.id));
    if (available.length === 0) {
      return this.entities[Math.floor(Math.random() * this.entities.length)];
    }
    return available[Math.floor(Math.random() * available.length)];
  }

  /**
   * Generate distractor entities (wrong answers)
   * Tries to pick some from the same continent for harder questions
   */
  generateDistractors(correctEntity, count = 3) {
    const distractors = [];
    const usedIds = new Set([correctEntity.id]);

    // Get entities from same continent
    const sameContinent = (CONTINENT_GROUPS.get(correctEntity.continent) || [])
      .filter(e => e.id !== correctEntity.id);

    // Get entities from other continents
    const otherContinents = this.entities.filter(
      e => e.continent !== correctEntity.continent
    );

    // Pick 1-2 from same continent (if available) for harder questions
    const fromSameContinent = Math.min(
      Math.floor(Math.random() * 2) + 1,
      sameContinent.length,
      count
    );

    // Shuffle same continent entities
    this.shuffleArray(sameContinent);

    // Add from same continent
    for (let i = 0; i < fromSameContinent && distractors.length < count; i++) {
      if (!usedIds.has(sameContinent[i].id)) {
        distractors.push(sameContinent[i]);
        usedIds.add(sameContinent[i].id);
      }
    }

    // Shuffle other continents
    this.shuffleArray(otherContinents);

    // Fill remaining from other continents
    for (const entity of otherContinents) {
      if (distractors.length >= count) break;
      if (!usedIds.has(entity.id)) {
        distractors.push(entity);
        usedIds.add(entity.id);
      }
    }

    return distractors;
  }

  /**
   * Shuffle array in place (Fisher-Yates)
   */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
