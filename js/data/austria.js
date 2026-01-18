/**
 * Austrian Federal States (Bundesländer) Data
 * OE1-OE9 prefix to federal state mapping
 */

export const AUSTRIA_STATES = [
  {
    id: 1,
    prefix: "OE1",
    name: "Wien",
    nameEn: "Vienna",
    capital: "Wien",
    flag: "🏴",
    coat: "🔴⚪"
  },
  {
    id: 2,
    prefix: "OE2",
    name: "Salzburg",
    nameEn: "Salzburg",
    capital: "Salzburg",
    flag: "🏴",
    coat: "🔴🟡"
  },
  {
    id: 3,
    prefix: "OE3",
    name: "Niederösterreich",
    nameEn: "Lower Austria",
    capital: "St. Pölten",
    flag: "🏴",
    coat: "🔵🟡"
  },
  {
    id: 4,
    prefix: "OE4",
    name: "Burgenland",
    nameEn: "Burgenland",
    capital: "Eisenstadt",
    flag: "🏴",
    coat: "🔴🟡"
  },
  {
    id: 5,
    prefix: "OE5",
    name: "Oberösterreich",
    nameEn: "Upper Austria",
    capital: "Linz",
    flag: "🏴",
    coat: "⚪🔴"
  },
  {
    id: 6,
    prefix: "OE6",
    name: "Steiermark",
    nameEn: "Styria",
    capital: "Graz",
    flag: "🏴",
    coat: "⚪🟢"
  },
  {
    id: 7,
    prefix: "OE7",
    name: "Tirol",
    nameEn: "Tyrol",
    capital: "Innsbruck",
    flag: "🏴",
    coat: "⚪🔴"
  },
  {
    id: 8,
    prefix: "OE8",
    name: "Kärnten",
    nameEn: "Carinthia",
    capital: "Klagenfurt",
    flag: "🏴",
    coat: "🟡🔴🟡"
  },
  {
    id: 9,
    prefix: "OE9",
    name: "Vorarlberg",
    nameEn: "Vorarlberg",
    capital: "Bregenz",
    flag: "🏴",
    coat: "🔴⚪"
  }
];

// Lookup maps
export const PREFIX_TO_STATE = new Map();
export const ID_TO_STATE = new Map();

/**
 * Initialize lookup maps
 */
export function initializeAustriaLookups() {
  AUSTRIA_STATES.forEach(state => {
    PREFIX_TO_STATE.set(state.prefix, state);
    ID_TO_STATE.set(state.id, state);
  });
}

/**
 * Get state by prefix (e.g., "OE1" -> Wien)
 */
export function getStateByPrefix(prefix) {
  return PREFIX_TO_STATE.get(prefix.toUpperCase());
}

/**
 * Get state by ID
 */
export function getStateById(id) {
  return ID_TO_STATE.get(id);
}

/**
 * Get random state, optionally excluding some
 */
export function getRandomState(excludeIds = []) {
  const available = AUSTRIA_STATES.filter(s => !excludeIds.includes(s.id));
  if (available.length === 0) {
    return AUSTRIA_STATES[Math.floor(Math.random() * AUSTRIA_STATES.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Get all Austrian prefixes
 */
export function getAllAustrianPrefixes() {
  return AUSTRIA_STATES.map(s => s.prefix);
}
