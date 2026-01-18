/**
 * Austria's Neighboring Countries Data
 * Prefixes for countries bordering Austria
 */

export const AUSTRIA_NEIGHBORS = [
  {
    id: 'de',
    name: 'Deutschland',
    nameEn: 'Germany',
    prefixes: ['DL', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR'],
    primaryPrefix: 'DL',
    flag: '\u{1F1E9}\u{1F1EA}',
    capital: 'Berlin',
    continent: 'EU'
  },
  {
    id: 'ok',
    name: 'Tschechien',
    nameEn: 'Czech Republic',
    prefixes: ['OK', 'OL'],
    primaryPrefix: 'OK',
    flag: '\u{1F1E8}\u{1F1FF}',
    capital: 'Prag',
    continent: 'EU'
  },
  {
    id: 'om',
    name: 'Slowakei',
    nameEn: 'Slovakia',
    prefixes: ['OM'],
    primaryPrefix: 'OM',
    flag: '\u{1F1F8}\u{1F1F0}',
    capital: 'Bratislava',
    continent: 'EU'
  },
  {
    id: 'ha',
    name: 'Ungarn',
    nameEn: 'Hungary',
    prefixes: ['HA', 'HG'],
    primaryPrefix: 'HA',
    flag: '\u{1F1ED}\u{1F1FA}',
    capital: 'Budapest',
    continent: 'EU'
  },
  {
    id: 's5',
    name: 'Slowenien',
    nameEn: 'Slovenia',
    prefixes: ['S5'],
    primaryPrefix: 'S5',
    flag: '\u{1F1F8}\u{1F1EE}',
    capital: 'Ljubljana',
    continent: 'EU'
  },
  {
    id: 'i',
    name: 'Italien',
    nameEn: 'Italy',
    prefixes: ['I', 'IK', 'IZ', 'IW', 'IX', 'IY'],
    primaryPrefix: 'I',
    flag: '\u{1F1EE}\u{1F1F9}',
    capital: 'Rom',
    continent: 'EU'
  },
  {
    id: 'hb',
    name: 'Schweiz',
    nameEn: 'Switzerland',
    prefixes: ['HB', 'HB9'],
    primaryPrefix: 'HB9',
    flag: '\u{1F1E8}\u{1F1ED}',
    capital: 'Bern',
    continent: 'EU'
  },
  {
    id: 'hb0',
    name: 'Liechtenstein',
    nameEn: 'Liechtenstein',
    prefixes: ['HB0'],
    primaryPrefix: 'HB0',
    flag: '\u{1F1F1}\u{1F1EE}',
    capital: 'Vaduz',
    continent: 'EU'
  }
];

// Lookup maps
export const NEIGHBOR_BY_ID = new Map();
export const NEIGHBOR_BY_PREFIX = new Map();

/**
 * Initialize lookup maps
 */
export function initializeNeighborLookups() {
  AUSTRIA_NEIGHBORS.forEach(neighbor => {
    NEIGHBOR_BY_ID.set(neighbor.id, neighbor);
    neighbor.prefixes.forEach(prefix => {
      NEIGHBOR_BY_PREFIX.set(prefix.toUpperCase(), neighbor);
    });
  });
}

/**
 * Get neighbor by ID
 */
export function getNeighborById(id) {
  return NEIGHBOR_BY_ID.get(id);
}

/**
 * Get neighbor by prefix
 */
export function getNeighborByPrefix(prefix) {
  return NEIGHBOR_BY_PREFIX.get(prefix.toUpperCase());
}

/**
 * Get random neighbor, optionally excluding some
 */
export function getRandomNeighbor(excludeIds = []) {
  const available = AUSTRIA_NEIGHBORS.filter(n => !excludeIds.includes(n.id));
  if (available.length === 0) {
    return AUSTRIA_NEIGHBORS[Math.floor(Math.random() * AUSTRIA_NEIGHBORS.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Get all neighbor primary prefixes
 */
export function getAllNeighborPrefixes() {
  return AUSTRIA_NEIGHBORS.map(n => n.primaryPrefix);
}
