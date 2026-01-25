/**
 * Internationalization (i18n) System
 * German (default) and English translations
 */

const STORAGE_KEY = 'prefixplay_language';

/**
 * Translation strings
 */
export const TRANSLATIONS = {
  de: {
    // App
    appTitle: 'PrefixPlay',
    appSubtitle: 'Lerne Amateurfunk-Rufzeichenprefixe',

    // Navigation/Menu
    menu: 'Men\u00FC',
    gameMode: 'Spielmodus',
    practiceMode: 'Fehler \u00FCben',
    practiceModeShort: '\u00DCben',
    settings: 'Einstellungen',
    achievements: 'Erfolge',
    statistics: 'Statistik',
    privacy: 'Datenschutz',
    resetProgress: 'Fortschritt zur\u00FCcksetzen',
    language: 'Sprache',

    // Game modes - DXCC
    dxccModes: 'DXCC Weltweit',
    prefixToCountry: 'Prefix \u2192 Land',
    prefixToCountryDesc: 'Erkenne das Land anhand des Rufzeichen-Prefix',
    countryToPrefix: 'Land \u2192 Prefix',
    countryToPrefixDesc: 'Erkenne den Prefix anhand des Landes',

    // Game modes - Austria
    austriaModes: '\u{1F1E6}\u{1F1F9} \u00D6sterreich',
    oePrefixToState: 'OE \u2192 Bundesland',
    oePrefixToStateDesc: 'Erkenne das Bundesland anhand des OE-Prefix',
    stateToOePrefix: 'Bundesland \u2192 OE',
    stateToOePrefixDesc: 'Erkenne den OE-Prefix anhand des Bundeslandes',
    whichStateUsesPrefix: 'Welches Bundesland verwendet "{prefix}"?',
    whatPrefixForState: 'Welcher Prefix gilt f\u00FCr {state}?',

    // Game modes - Neighbors
    neighborsModes: '\u{1F1EA}\u{1F1FA} Nachbarl\u00E4nder',
    neighborPrefixToCountry: 'Prefix \u2192 Nachbarland',
    neighborPrefixToCountryDesc: 'Erkenne das Nachbarland anhand des Prefix',
    countryToNeighborPrefix: 'Nachbarland \u2192 Prefix',
    countryToNeighborPrefixDesc: 'Erkenne den Prefix anhand des Nachbarlandes',
    whichNeighborUsesPrefix: 'Welches Nachbarland verwendet "{prefix}"?',
    whatPrefixForNeighbor: 'Welcher Prefix gilt f\u00FCr {country}?',

    // Game
    whatCountryUsesPrefix: 'Welches Land verwendet den Prefix "{prefix}"?',
    whatIsPrefixFor: 'Was ist der prim\u00E4re Prefix f\u00FCr {country}?',
    correct: 'Richtig!',
    incorrect: 'Falsch!',
    correctAnswerWas: 'Die richtige Antwort war: {answer}',
    nextQuestion: 'N\u00E4chste Frage',
    skip: '\u00DCberspringen',

    // Stats
    totalAttempts: 'Versuche gesamt',
    totalCorrect: 'Richtig gesamt',
    accuracy: 'Genauigkeit',
    currentStreak: 'Aktuelle Serie',
    bestStreak: 'Beste Serie',
    entitiesMastered: 'Gemeisterte L\u00E4nder',
    retryPoolCount: 'Fehler zum \u00DCben',

    // Achievements
    achievementsTitle: 'Erfolge',
    achievementUnlocked: 'Erfolg freigeschaltet!',
    unlockedCount: '{count} von {total} freigeschaltet',
    locked: 'Gesperrt',
    unlocked: 'Freigeschaltet',

    // Achievement names
    'first-steps': 'Erste Schritte',
    'first-steps-desc': 'Beantworte deine erste Frage richtig',
    'getting-started': 'Der Anfang',
    'getting-started-desc': 'Beantworte 10 Fragen richtig',
    'warming-up': 'Aufwärmphase',
    'warming-up-desc': 'Beantworte 25 Fragen richtig',
    'half-century': 'Halbes Jahrhundert',
    'half-century-desc': 'Beantworte 50 Fragen richtig',
    'century': 'Jahrhundert-Club',
    'century-desc': 'Beantworte 100 Fragen richtig',
    'double-century': 'Doppeltes Jahrhundert',
    'double-century-desc': 'Beantworte 200 Fragen richtig',
    'five-hundred': '500er Club',
    'five-hundred-desc': 'Beantworte 500 Fragen richtig',
    'on-a-roll': 'Gut dabei',
    'on-a-roll-desc': '5 richtige Antworten hintereinander',
    'hot-streak': 'Hei\u00DFe Serie',
    'hot-streak-desc': '10 richtige Antworten hintereinander',
    'unstoppable': 'Unaufhaltbar',
    'unstoppable-desc': '25 richtige Antworten hintereinander',
    'perfect-fifty': 'Perfekte 50',
    'perfect-fifty-desc': '50 richtige Antworten hintereinander',
    'explorer': 'Entdecker',
    'explorer-desc': 'Beantworte Fragen zu 25 verschiedenen L\u00E4ndern',
    'world-traveler': 'Weltreisender',
    'world-traveler-desc': 'Meistere 25 verschiedene DXCC-Gebiete',
    'globe-trotter': 'Globetrotter',
    'globe-trotter-desc': 'Meistere 50 verschiedene DXCC-Gebiete',
    'dxcc-master': 'DXCC-Meister',
    'dxcc-master-desc': 'Meistere 100 verschiedene DXCC-Gebiete',
    'dx-legend': 'DX-Legende',
    'dx-legend-desc': 'Meistere 200 verschiedene DXCC-Gebiete',
    'sharpshooter': 'Scharfsch\u00FCtze',
    'sharpshooter-desc': 'Erreiche 80% Genauigkeit bei 25+ Versuchen',
    'perfectionist': 'Perfektionist',
    'perfectionist-desc': 'Erreiche 90% Genauigkeit bei 50+ Versuchen',
    'elite': 'Elite',
    'elite-desc': 'Erreiche 95% Genauigkeit bei 100+ Versuchen',
    'comeback-kid': 'Comeback-Kid',
    'comeback-kid-desc': 'L\u00F6sche 10 Eintr\u00E4ge aus deiner Fehlerliste',
    'never-give-up': 'Niemals aufgeben',
    'never-give-up-desc': 'L\u00F6sche 50 Eintr\u00E4ge aus deiner Fehlerliste',
    'dedicated': 'Engagiert',
    'dedicated-desc': 'Beantworte 500 Fragen insgesamt',
    'obsessed': 'Besessen',
    'obsessed-desc': 'Beantworte 1000 Fragen insgesamt',
    'prefix-pro': 'Prefix-Profi',
    'prefix-pro-desc': 'Beantworte 50 Prefix\u2192Land Fragen richtig',
    'country-expert': 'L\u00E4nder-Experte',
    'country-expert-desc': 'Beantworte 50 Land\u2192Prefix Fragen richtig',

    // Achievement categories
    catBeginner: 'Erste Schritte',
    catMilestone: 'Meilensteine',
    catStreak: 'Serien',
    catExploration: 'Entdeckung',
    catAccuracy: 'Genauigkeit',
    catPractice: '\u00DCbung',
    catDedication: 'Einsatz',
    catMode: 'Spielmodi',

    // Privacy
    privacyTitle: 'Datenschutzhinweis',
    privacyText1: 'PrefixPlay respektiert deine Privatsph\u00E4re.',
    privacyText2: 'Alle Spieldaten werden ausschlie\u00DFlich lokal in deinem Browser gespeichert (localStorage).',
    privacyText3: 'Es werden keine Daten an Server gesendet.',
    privacyText4: 'Keine Analyse-Tools oder Tracking.',
    privacyText5: 'Keine Cookies au\u00DFer lokalem Speicher.',
    privacyText6: 'Keine pers\u00F6nlichen Daten werden erhoben.',
    privacyText7: 'Das L\u00F6schen der Browserdaten setzt deinen Fortschritt zur\u00FCck.',
    privacyBadge: 'Alle Daten bleiben lokal in deinem Browser',
    understand: 'Verstanden',

    // Reset
    resetTitle: 'Fortschritt zur\u00FCcksetzen',
    resetWarning: 'M\u00F6chtest du wirklich deinen gesamten Fortschritt zur\u00FCcksetzen? Dies l\u00F6scht:',
    resetItem1: 'Alle Punkte und Statistiken',
    resetItem2: 'Alle freigeschalteten Erfolge',
    resetItem3: 'Deine Fehlerliste zum \u00DCben',
    resetConfirm: 'Diese Aktion kann nicht r\u00FCckg\u00E4ngig gemacht werden!',
    resetButton: 'Zur\u00FCcksetzen',
    cancel: 'Abbrechen',
    resetSuccess: 'Fortschritt zur\u00FCckgesetzt',

    // Footer
    footerPrivacy: 'Datenschutz',
    footerAchievements: 'Erfolge',
    footerGithub: 'GitHub',
    allDataLocal: 'Alle Daten bleiben lokal im Browser',

    // Imprint
    imprintTitle: 'Impressum',
    imprintResponsible: 'Verantwortlich f\u00FCr den Inhalt',
    imprintContact: 'Kontakt',
    imprintNote: 'Diese Website ist ein privates, nicht-kommerzielles Projekt zur Unterst\u00FCtzung der Amateurfunk-Ausbildung.',

    // Misc
    close: 'Schlie\u00DFen',
    loading: 'Laden...',
    noRetryItems: 'Keine Fehler zum \u00DCben',
    practiceDisabled: '\u00DCbungsmodus nicht verf\u00FCgbar (keine Fehler)',
    startPractice: '\u00DCbungsmodus starten ({count} Fehler)',
    stopPractice: '\u00DCbungsmodus beenden',
    practiceComplete: '\u{1F389} \u00DCbung abgeschlossen! Alle Fehler wurden gelernt.',
    practiceProgress: 'Noch {count} zu lernen',
    practiceModeActive: '\u00DCbungsmodus',
    practiceTip: 'Fehler wiederholen',
    prefixOverview: 'Präfix-Übersicht',
    theme: 'Design',
    themeDark: 'Dunkel',
    themeLight: 'Hell',

    // Round system
    questionOf: 'Frage {current}/{total}',
    roundComplete: 'Runde abgeschlossen!',
    roundPerfect: 'Perfekt! Alle Fragen richtig!',
    roundGreat: 'Super! Sehr gut gemacht!',
    roundGood: 'Gut! Weiter so!',
    roundKeepPracticing: 'Übung macht den Meister!',
    newRound: 'Neue Runde'
  },

  en: {
    // App
    appTitle: 'PrefixPlay',
    appSubtitle: 'Learn Amateur Radio Callsign Prefixes',

    // Navigation/Menu
    menu: 'Menu',
    gameMode: 'Game Mode',
    practiceMode: 'Practice Mistakes',
    practiceModeShort: 'Practice',
    settings: 'Settings',
    achievements: 'Achievements',
    statistics: 'Statistics',
    privacy: 'Privacy',
    resetProgress: 'Reset Progress',
    language: 'Language',

    // Game modes - DXCC
    dxccModes: 'DXCC Worldwide',
    prefixToCountry: 'Prefix \u2192 Country',
    prefixToCountryDesc: 'Identify the country from a callsign prefix',
    countryToPrefix: 'Country \u2192 Prefix',
    countryToPrefixDesc: 'Identify the prefix from a country name',

    // Game modes - Austria
    austriaModes: '\u{1F1E6}\u{1F1F9} Austria',
    oePrefixToState: 'OE \u2192 Federal State',
    oePrefixToStateDesc: 'Identify the federal state from OE prefix',
    stateToOePrefix: 'Federal State \u2192 OE',
    stateToOePrefixDesc: 'Identify the OE prefix from federal state',
    whichStateUsesPrefix: 'Which federal state uses "{prefix}"?',
    whatPrefixForState: 'What is the prefix for {state}?',

    // Game modes - Neighbors
    neighborsModes: '\u{1F1EA}\u{1F1FA} Neighboring Countries',
    neighborPrefixToCountry: 'Prefix \u2192 Neighbor',
    neighborPrefixToCountryDesc: 'Identify the neighboring country from prefix',
    countryToNeighborPrefix: 'Neighbor \u2192 Prefix',
    countryToNeighborPrefixDesc: 'Identify the prefix of a neighboring country',
    whichNeighborUsesPrefix: 'Which neighboring country uses "{prefix}"?',
    whatPrefixForNeighbor: 'What is the prefix for {country}?',

    // Game
    whatCountryUsesPrefix: 'What country uses the prefix "{prefix}"?',
    whatIsPrefixFor: 'What is the primary prefix for {country}?',
    correct: 'Correct!',
    incorrect: 'Incorrect!',
    correctAnswerWas: 'The correct answer was: {answer}',
    nextQuestion: 'Next Question',
    skip: 'Skip',

    // Stats
    totalAttempts: 'Total Attempts',
    totalCorrect: 'Total Correct',
    accuracy: 'Accuracy',
    currentStreak: 'Current Streak',
    bestStreak: 'Best Streak',
    entitiesMastered: 'Entities Mastered',
    retryPoolCount: 'Mistakes to Practice',

    // Achievements
    achievementsTitle: 'Achievements',
    achievementUnlocked: 'Achievement Unlocked!',
    unlockedCount: '{count} of {total} unlocked',
    locked: 'Locked',
    unlocked: 'Unlocked',

    // Achievement names
    'first-steps': 'First Steps',
    'first-steps-desc': 'Get your first correct answer',
    'getting-started': 'Getting Started',
    'getting-started-desc': 'Answer 10 questions correctly',
    'warming-up': 'Warming Up',
    'warming-up-desc': 'Answer 25 questions correctly',
    'half-century': 'Half Century',
    'half-century-desc': 'Answer 50 questions correctly',
    'century': 'Century Club',
    'century-desc': 'Answer 100 questions correctly',
    'double-century': 'Double Century',
    'double-century-desc': 'Answer 200 questions correctly',
    'five-hundred': '500 Club',
    'five-hundred-desc': 'Answer 500 questions correctly',
    'on-a-roll': 'On a Roll',
    'on-a-roll-desc': 'Get 5 correct answers in a row',
    'hot-streak': 'Hot Streak',
    'hot-streak-desc': 'Get 10 correct answers in a row',
    'unstoppable': 'Unstoppable',
    'unstoppable-desc': 'Get 25 correct answers in a row',
    'perfect-fifty': 'Perfect Fifty',
    'perfect-fifty-desc': 'Get 50 correct answers in a row',
    'explorer': 'Explorer',
    'explorer-desc': 'Try questions about 25 different entities',
    'world-traveler': 'World Traveler',
    'world-traveler-desc': 'Master 25 different DXCC entities',
    'globe-trotter': 'Globe Trotter',
    'globe-trotter-desc': 'Master 50 different DXCC entities',
    'dxcc-master': 'DXCC Master',
    'dxcc-master-desc': 'Master 100 different DXCC entities',
    'dx-legend': 'DX Legend',
    'dx-legend-desc': 'Master 200 different DXCC entities',
    'sharpshooter': 'Sharpshooter',
    'sharpshooter-desc': 'Achieve 80% accuracy over 25+ attempts',
    'perfectionist': 'Perfectionist',
    'perfectionist-desc': 'Achieve 90% accuracy over 50+ attempts',
    'elite': 'Elite',
    'elite-desc': 'Achieve 95% accuracy over 100+ attempts',
    'comeback-kid': 'Comeback Kid',
    'comeback-kid-desc': 'Clear 10 items from your retry pool',
    'never-give-up': 'Never Give Up',
    'never-give-up-desc': 'Clear 50 items from your retry pool',
    'dedicated': 'Dedicated',
    'dedicated-desc': 'Attempt 500 questions total',
    'obsessed': 'Obsessed',
    'obsessed-desc': 'Attempt 1000 questions total',
    'prefix-pro': 'Prefix Pro',
    'prefix-pro-desc': 'Answer 50 Prefix\u2192Country questions correctly',
    'country-expert': 'Country Expert',
    'country-expert-desc': 'Answer 50 Country\u2192Prefix questions correctly',

    // Achievement categories
    catBeginner: 'Getting Started',
    catMilestone: 'Milestones',
    catStreak: 'Streaks',
    catExploration: 'Exploration',
    catAccuracy: 'Accuracy',
    catPractice: 'Practice',
    catDedication: 'Dedication',
    catMode: 'Mode Mastery',

    // Privacy
    privacyTitle: 'Privacy Notice',
    privacyText1: 'PrefixPlay respects your privacy.',
    privacyText2: 'All game data is stored exclusively in your browser (localStorage).',
    privacyText3: 'No data is sent to any server.',
    privacyText4: 'No analytics or tracking.',
    privacyText5: 'No cookies except for local storage.',
    privacyText6: 'No personal information is collected.',
    privacyText7: 'Clearing your browser data will reset your progress.',
    privacyBadge: 'All data stays local in your browser',
    understand: 'I Understand',

    // Reset
    resetTitle: 'Reset Progress',
    resetWarning: 'Are you sure you want to reset all your progress? This will delete:',
    resetItem1: 'All scores and statistics',
    resetItem2: 'All unlocked achievements',
    resetItem3: 'Your retry pool for practice',
    resetConfirm: 'This action cannot be undone!',
    resetButton: 'Reset',
    cancel: 'Cancel',
    resetSuccess: 'Progress reset successfully',

    // Footer
    footerPrivacy: 'Privacy',
    footerAchievements: 'Achievements',
    footerGithub: 'GitHub',
    allDataLocal: 'All data stays local in your browser',

    // Imprint
    imprintTitle: 'Imprint',
    imprintResponsible: 'Responsible for content',
    imprintContact: 'Contact',
    imprintNote: 'This website is a private, non-commercial project to support amateur radio training.',

    // Misc
    close: 'Close',
    loading: 'Loading...',
    noRetryItems: 'No mistakes to practice',
    practiceDisabled: 'Practice mode unavailable (no mistakes)',
    startPractice: 'Start practice mode ({count} mistakes)',
    stopPractice: 'Stop practice mode',
    practiceComplete: '\u{1F389} Practice complete! All mistakes have been learned.',
    practiceProgress: '{count} left to learn',
    practiceModeActive: 'Practice Mode',
    practiceTip: 'Review your mistakes',
    prefixOverview: 'Prefix Overview',
    theme: 'Theme',
    themeDark: 'Dark',
    themeLight: 'Light',

    // Round system
    questionOf: 'Question {current}/{total}',
    roundComplete: 'Round Complete!',
    roundPerfect: 'Perfect! All questions correct!',
    roundGreat: 'Great job! Well done!',
    roundGood: 'Good! Keep it up!',
    roundKeepPracticing: 'Practice makes perfect!',
    newRound: 'New Round'
  }
};

/**
 * Current language
 */
let currentLanguage = 'de';

/**
 * Initialize the i18n system
 */
export function initI18n() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && TRANSLATIONS[stored]) {
    currentLanguage = stored;
  } else {
    // Default to German (user can switch to English manually)
    currentLanguage = 'de';
  }
  return currentLanguage;
}

/**
 * Get current language
 */
export function getLanguage() {
  return currentLanguage;
}

/**
 * Set language
 */
export function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLanguage = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    // Dispatch event for UI updates
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
    return true;
  }
  return false;
}

/**
 * Get available languages
 */
export function getAvailableLanguages() {
  return [
    { code: 'de', name: 'Deutsch', flag: '\u{1F1E9}\u{1F1EA}' },
    { code: 'en', name: 'English', flag: '\u{1F1EC}\u{1F1E7}' }
  ];
}

/**
 * Translate a key
 * @param {string} key - Translation key
 * @param {object} params - Optional parameters for interpolation
 */
export function t(key, params = {}) {
  let text = TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS['de']?.[key] || key;

  // Interpolate parameters
  for (const [param, value] of Object.entries(params)) {
    text = text.replace(`{${param}}`, value);
  }

  return text;
}

/**
 * Translate with fallback
 */
export function tf(key, fallback, params = {}) {
  const text = TRANSLATIONS[currentLanguage]?.[key];
  if (text) {
    let result = text;
    for (const [param, value] of Object.entries(params)) {
      result = result.replace(`{${param}}`, value);
    }
    return result;
  }
  return fallback;
}
