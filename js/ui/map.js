/**
 * PrefixPlay Map Component
 * Interactive world map with country coloring
 */

// Complete mapping from amateur radio prefixes to country names (as in countries.json)
const PREFIX_TO_COUNTRY = {
  '3A': 'Monaco', '3B8': 'Mauritius', '3B9': 'Rodrigues Island', '3C': 'Eq. Guinea',
  '3D2': 'Fiji', '3DA': 'eSwatini', '3V': 'Tunisia', '3X': 'Guinea',
  '3Y/b': 'Bouvet Island', '3Y/p': 'Peter I Island', '4J': 'Azerbaijan', '4L': 'Georgia',
  '4O': 'Montenegro', '4S': 'Sri Lanka', '4W': 'Timor-Leste', '4X': 'Israel',
  '5A': 'Libya', '5B': 'Cyprus', '5H': 'Tanzania', '5N': 'Nigeria',
  '5R': 'Madagascar', '5T': 'Mauritania', '5U': 'Niger', '5V': 'Togo',
  '5W': 'Samoa', '5X': 'Uganda', '5Z': 'Kenya', '6O': 'Somalia',
  '6W': 'Senegal', '6Y': 'Jamaica', '7O': 'Yemen', '7P': 'Lesotho',
  '7Q': 'Malawi', '7X': 'Algeria', '8P': 'Barbados', '8Q': 'Maldives',
  '8R': 'Guyana', '9A': 'Croatia', '9G': 'Ghana', '9H': 'Malta',
  '9J': 'Zambia', '9K': 'Kuwait', '9L': 'Sierra Leone', '9M': 'Malaysia', '9M2': 'Malaysia',
  '9N': 'Nepal', '9Q': 'Dem. Rep. Congo', '9U': 'Burundi', '9V': 'Singapore',
  '9X': 'Rwanda', '9Y': 'Trinidad and Tobago', 'A2': 'Botswana', 'A3': 'Tonga',
  'A4': 'Oman', 'A6': 'United Arab Emirates', 'A7': 'Qatar', 'A9': 'Bahrain',
  'AP': 'Pakistan', 'BV': 'Taiwan', 'BY': 'China', 'C2': 'Nauru',
  'C3': 'Andorra', 'C5': 'Gambia', 'C6': 'Bahamas', 'C9': 'Mozambique',
  'CE': 'Chile', 'CE0Y': 'Easter Island', 'CN': 'Morocco', 'CO': 'Cuba',
  'CP': 'Bolivia', 'CT': 'Portugal', 'CT3': 'Madeira', 'CU': 'Azores',
  'CX': 'Uruguay', 'D2': 'Angola', 'D4': 'Cape Verde', 'D6': 'Comoros',
  'DL': 'Germany', 'DU': 'Philippines', 'E3': 'Eritrea', 'E5': 'Cook Islands',
  'E6': 'Niue', 'E7': 'Bosnia and Herz.', 'EA': 'Spain', 'EA6': 'Balearic Islands',
  'EA8': 'Canary Islands', 'EI': 'Ireland', 'EK': 'Armenia', 'EL': 'Liberia',
  'EP': 'Iran', 'ES': 'Estonia', 'ET': 'Ethiopia', 'EX': 'Kyrgyzstan',
  'EY': 'Tajikistan', 'EZ': 'Turkmenistan', 'F': 'France', 'FG': 'Guadeloupe',
  'FH': 'Mayotte', 'FK': 'New Caledonia', 'FM': 'Martinique', 'FO': 'French Polynesia',
  'FR': 'Reunion', 'FT5W': 'Crozet Islands', 'FT5X': 'Kerguelen Islands',
  'FT5Z': 'Amsterdam & St. Paul Islands', 'FW': 'Wallis & Futuna Islands',
  'FY': 'French Guiana', 'G': 'United Kingdom', 'GD': 'Isle of Man',
  'GI': 'United Kingdom', 'GJ': 'Jersey', 'GM': 'United Kingdom', 'GU': 'Guernsey',
  'GW': 'United Kingdom', 'H4': 'Solomon Is.', 'HA': 'Hungary', 'HB': 'Switzerland',
  'HB9': 'Switzerland', 'HB0': 'Liechtenstein', 'HC': 'Ecuador', 'HC8': 'Galapagos Islands',
  'HH': 'Haiti', 'HI': 'Dominican Rep.', 'HK': 'Colombia', 'HL': 'South Korea',
  'HP': 'Panama', 'HR': 'Honduras', 'HS': 'Thailand', 'HV': 'Vatican',
  'HZ': 'Saudi Arabia', 'I': 'Italy', 'IS0': 'Sardinia', 'J2': 'Djibouti',
  'J5': 'Guinea-Bissau', 'J6': 'St. Lucia', 'J8': 'St. Vincent', 'JA': 'Japan',
  'JT': 'Mongolia', 'JW': 'Svalbard', 'JY': 'Jordan', 'K': 'United States of America',
  'W': 'United States of America', 'N': 'United States of America',
  'KC4': 'Antarctica', 'KG4': 'Guantanamo Bay', 'KH0': 'Northern Mariana Islands',
  'KH1': 'Baker & Howland Islands', 'KH2': 'Guam', 'KH3': 'Johnston Island',
  'KH4': 'Midway Island', 'KH5': 'Palmyra & Jarvis Islands', 'KH6': 'Hawaii',
  'KH8': 'American Samoa', 'KH9': 'Wake Island', 'KL7': 'Alaska',
  'KP2': 'US Virgin Islands', 'KP4': 'Puerto Rico', 'LA': 'Norway',
  'LU': 'Argentina', 'LX': 'Luxembourg', 'LY': 'Lithuania', 'LZ': 'Bulgaria',
  'OA': 'Peru', 'OD': 'Lebanon', 'OE': 'Austria', 'OH': 'Finland',
  'OH0': 'Aland Islands', 'OK': 'Czechia', 'OM': 'Slovakia', 'ON': 'Belgium',
  'OX': 'Greenland', 'OY': 'Faroe Islands', 'OZ': 'Denmark', 'P2': 'Papua New Guinea',
  'P4': 'Aruba', 'P5': 'North Korea', 'PA': 'Netherlands', 'PJ2': 'Curacao',
  'PJ4': 'Bonaire', 'PJ5': 'Saba & St. Eustatius', 'PJ7': 'Sint Maarten',
  'PY': 'Brazil', 'PZ': 'Suriname', 'S2': 'Bangladesh', 'S5': 'Slovenia',
  'S7': 'Seychelles', 'S9': 'Sao Tome & Principe', 'SM': 'Sweden', 'SP': 'Poland',
  'ST': 'Sudan', 'SU': 'Egypt', 'SV': 'Greece', 'SV/A': 'Mount Athos',
  'SV5': 'Dodecanese', 'SV9': 'Crete', 'T2': 'Tuvalu', 'T3': 'Kiribati',
  'T7': 'San Marino', 'T8': 'Palau', 'TA': 'Turkey', 'TF': 'Iceland',
  'TG': 'Guatemala', 'TI': 'Costa Rica', 'TJ': 'Cameroon', 'TL': 'Central African Rep.',
  'TN': 'Congo', 'TR': 'Gabon', 'TT': 'Chad', 'TU': "Côte d'Ivoire",
  'TY': 'Benin', 'TZ': 'Mali', 'UA': 'Russia', 'UA0': 'Russia',
  'UK': 'Uzbekistan', 'UN': 'Kazakhstan', 'UR': 'Ukraine', 'V3': 'Belize',
  'V4': 'St. Kitts & Nevis', 'V5': 'Namibia', 'V6': 'Micronesia', 'V7': 'Marshall Islands',
  'V8': 'Brunei', 'VE': 'Canada', 'VK': 'Australia', 'VK0H': 'Heard Island',
  'VK0M': 'Macquarie Island', 'VK9C': 'Cocos (Keeling) Islands', 'VK9L': 'Lord Howe Island',
  'VK9N': 'Norfolk Island', 'VK9X': 'Christmas Island', 'VP2E': 'Anguilla',
  'VP2M': 'Montserrat', 'VP2V': 'British Virgin Islands', 'VP8': 'Falkland Is.',
  'VP8/G': 'South Georgia Island', 'VP8/O': 'South Orkney Islands',
  'VP8/S': 'South Shetland Islands', 'VQ9': 'Chagos Islands', 'VR': 'Hong Kong',
  'VU': 'India', 'VU4': 'Andaman & Nicobar Islands', 'VU7': 'Lakshadweep Islands',
  'XE': 'Mexico', 'XT': 'Burkina Faso', 'XU': 'Cambodia', 'XV': 'Vietnam',
  'XW': 'Laos', 'XX9': 'Macao', 'XY': 'Myanmar', 'YA': 'Afghanistan',
  'YB': 'Indonesia', 'YI': 'Iraq', 'YJ': 'Vanuatu', 'YK': 'Syria',
  'YL': 'Latvia', 'YN': 'Nicaragua', 'YO': 'Romania', 'YS': 'El Salvador',
  'YU': 'Serbia', 'YV': 'Venezuela', 'Z2': 'Zimbabwe', 'Z3': 'Macedonia',
  'Z6': 'Kosovo', 'Z8': 'S. Sudan', 'ZA': 'Albania', 'ZB': 'Gibraltar',
  'ZD7': 'St. Helena', 'ZD8': 'Ascension Island', 'ZD9': 'Tristan da Cunha',
  'ZF': 'Cayman Islands', 'ZK3': 'Tokelau', 'ZL': 'New Zealand', 'ZP': 'Paraguay',
  'ZS': 'South Africa',
  // Austrian states
  'OE1': 'Austria', 'OE2': 'Austria', 'OE3': 'Austria', 'OE4': 'Austria',
  'OE5': 'Austria', 'OE6': 'Austria', 'OE7': 'Austria', 'OE8': 'Austria', 'OE9': 'Austria'
};

// Map various names to English names in countries.json (110m)
const NAME_TO_COUNTRY = {
  // German names from neighbors.js
  'deutschland': 'Germany',
  'tschechien': 'Czechia',
  'slowakei': 'Slovakia',
  'ungarn': 'Hungary',
  'slowenien': 'Slovenia',
  'italien': 'Italy',
  'schweiz': 'Switzerland',
  'österreich': 'Austria',

  // DXCC names -> countries.json names (handle differences)
  'czech republic': 'Czechia',
  'bosnia-herzegovina': 'Bosnia and Herz.',
  'bosnia and herzegovina': 'Bosnia and Herz.',
  'north macedonia': 'Macedonia',
  'dr congo': 'Dem. Rep. Congo',
  'democratic republic of congo': 'Dem. Rep. Congo',
  'republic of congo': 'Congo',
  'dominican republic': 'Dominican Rep.',
  'equatorial guinea': 'Eq. Guinea',
  'south sudan': 'S. Sudan',
  'solomon islands': 'Solomon Is.',
  'trinidad & tobago': 'Trinidad and Tobago',
  'united states': 'United States of America',
  'usa': 'United States of America',
  'eswatini': 'eSwatini',
  'ivory coast': "Côte d'Ivoire",
  'cote d\'ivoire': "Côte d'Ivoire",
  'central african republic': 'Central African Rep.',

  // UK variants
  'uk': 'United Kingdom',
  'england': 'United Kingdom',
  'great britain': 'United Kingdom',
  'scotland': 'United Kingdom',
  'wales': 'United Kingdom',
  'northern ireland': 'United Kingdom',

  // Russia variants
  'european russia': 'Russia',
  'asiatic russia': 'Russia',

  // Direct mappings (same name)
  'germany': 'Germany',
  'czechia': 'Czechia',
  'slovakia': 'Slovakia',
  'hungary': 'Hungary',
  'slovenia': 'Slovenia',
  'italy': 'Italy',
  'switzerland': 'Switzerland',
  'austria': 'Austria',
  'russia': 'Russia',
  'china': 'China',
  'japan': 'Japan',
  'brazil': 'Brazil',
  'india': 'India',
  'australia': 'Australia',
  'canada': 'Canada',
  'mexico': 'Mexico',
  'france': 'France',
  'spain': 'Spain',
  'poland': 'Poland',
  'romania': 'Romania',
  'netherlands': 'Netherlands',
  'belgium': 'Belgium',
  'sweden': 'Sweden',
  'norway': 'Norway',
  'finland': 'Finland',
  'denmark': 'Denmark',
  'ireland': 'Ireland',
  'portugal': 'Portugal',
  'greece': 'Greece',
  'turkey': 'Turkey',
  'ukraine': 'Ukraine',
  'south africa': 'South Africa',
  'egypt': 'Egypt',
  'morocco': 'Morocco',
  'argentina': 'Argentina',
  'chile': 'Chile',
  'colombia': 'Colombia',
  'peru': 'Peru',
  'venezuela': 'Venezuela',
  'south korea': 'South Korea',
  'thailand': 'Thailand',
  'indonesia': 'Indonesia',
  'malaysia': 'Malaysia',
  'philippines': 'Philippines',
  'vietnam': 'Vietnam',
  'new zealand': 'New Zealand',
  'taiwan': 'Taiwan',
  'pakistan': 'Pakistan',
  'bangladesh': 'Bangladesh',
  'iran': 'Iran',
  'iraq': 'Iraq',
  'saudi arabia': 'Saudi Arabia',
  'israel': 'Israel',
  'jordan': 'Jordan',
  'lebanon': 'Lebanon',
  'syria': 'Syria',
  'yemen': 'Yemen',
  'oman': 'Oman',
  'united arab emirates': 'United Arab Emirates',
  'qatar': 'Qatar',
  'kuwait': 'Kuwait',
  'bahrain': 'Bahrain',
  'cyprus': 'Cyprus',
  'afghanistan': 'Afghanistan',
  'kazakhstan': 'Kazakhstan',
  'uzbekistan': 'Uzbekistan',
  'turkmenistan': 'Turkmenistan',
  'kyrgyzstan': 'Kyrgyzstan',
  'tajikistan': 'Tajikistan',
  'mongolia': 'Mongolia',
  'myanmar': 'Myanmar',
  'laos': 'Laos',
  'cambodia': 'Cambodia',
  'nepal': 'Nepal',
  'sri lanka': 'Sri Lanka',
  'algeria': 'Algeria',
  'libya': 'Libya',
  'tunisia': 'Tunisia',
  'sudan': 'Sudan',
  'ethiopia': 'Ethiopia',
  'kenya': 'Kenya',
  'tanzania': 'Tanzania',
  'uganda': 'Uganda',
  'nigeria': 'Nigeria',
  'ghana': 'Ghana',
  'senegal': 'Senegal',
  'cameroon': 'Cameroon',
  'angola': 'Angola',
  'mozambique': 'Mozambique',
  'zimbabwe': 'Zimbabwe',
  'zambia': 'Zambia',
  'botswana': 'Botswana',
  'namibia': 'Namibia',
  'madagascar': 'Madagascar',
  'cuba': 'Cuba',
  'haiti': 'Haiti',
  'jamaica': 'Jamaica',
  'costa rica': 'Costa Rica',
  'panama': 'Panama',
  'guatemala': 'Guatemala',
  'honduras': 'Honduras',
  'nicaragua': 'Nicaragua',
  'el salvador': 'El Salvador',
  'belize': 'Belize',
  'ecuador': 'Ecuador',
  'bolivia': 'Bolivia',
  'paraguay': 'Paraguay',
  'uruguay': 'Uruguay',
  'guyana': 'Guyana',
  'suriname': 'Suriname',
  'papua new guinea': 'Papua New Guinea',
  'fiji': 'Fiji',
  'greenland': 'Greenland',
  'iceland': 'Iceland'
};

// Coordinates for DXCC entities not in 110m map (islands, small countries, territories)
const SMALL_COUNTRY_COORDS = {
  // European microstates
  'liechtenstein': { lat: 47.16, lon: 9.55 },
  'monaco': { lat: 43.73, lon: 7.42 },
  'san marino': { lat: 43.94, lon: 12.46 },
  'vatican': { lat: 41.90, lon: 12.45 },
  'andorra': { lat: 42.51, lon: 1.52 },
  'malta': { lat: 35.94, lon: 14.38 },
  'gibraltar': { lat: 36.14, lon: -5.35 },

  // UK territories
  'england': { lat: 52.35, lon: -1.17 },
  'scotland': { lat: 56.49, lon: -4.20 },
  'wales': { lat: 52.13, lon: -3.78 },
  'northern ireland': { lat: 54.79, lon: -6.49 },
  'isle of man': { lat: 54.24, lon: -4.55 },
  'jersey': { lat: 49.21, lon: -2.13 },
  'guernsey': { lat: 49.45, lon: -2.54 },

  // Nordic/Atlantic islands
  'aland islands': { lat: 60.18, lon: 19.91 },
  'faroe islands': { lat: 61.89, lon: -6.91 },
  'svalbard': { lat: 78.22, lon: 15.64 },
  'azores': { lat: 37.74, lon: -25.67 },
  'madeira': { lat: 32.65, lon: -16.91 },
  'canary islands': { lat: 28.29, lon: -16.63 },

  // Mediterranean islands
  'balearic islands': { lat: 39.57, lon: 2.65 },
  'sardinia': { lat: 40.12, lon: 9.01 },
  'crete': { lat: 35.24, lon: 24.90 },
  'dodecanese': { lat: 36.43, lon: 28.22 },
  'mount athos': { lat: 40.16, lon: 24.33 },

  // Caribbean
  'anguilla': { lat: 18.22, lon: -63.07 },
  'antigua & barbuda': { lat: 17.06, lon: -61.80 },
  'aruba': { lat: 12.52, lon: -69.97 },
  'barbados': { lat: 13.19, lon: -59.54 },
  'bonaire': { lat: 12.20, lon: -68.26 },
  'british virgin islands': { lat: 18.42, lon: -64.62 },
  'cayman islands': { lat: 19.31, lon: -81.25 },
  'curacao': { lat: 12.17, lon: -68.99 },
  'dominica': { lat: 15.41, lon: -61.34 },
  'grenada': { lat: 12.12, lon: -61.68 },
  'guadeloupe': { lat: 16.27, lon: -61.55 },
  'martinique': { lat: 14.64, lon: -61.02 },
  'montserrat': { lat: 16.74, lon: -62.19 },
  'saba & st. eustatius': { lat: 17.49, lon: -63.24 },
  'sint maarten': { lat: 18.04, lon: -63.07 },
  'st. kitts & nevis': { lat: 17.36, lon: -62.78 },
  'st. lucia': { lat: 13.91, lon: -60.98 },
  'st. vincent': { lat: 13.25, lon: -61.20 },
  'us virgin islands': { lat: 18.34, lon: -64.93 },

  // Central/South America
  'french guiana': { lat: 3.93, lon: -53.13 },
  'galapagos islands': { lat: -0.95, lon: -90.97 },
  'easter island': { lat: -27.11, lon: -109.35 },
  'falkland islands': { lat: -51.80, lon: -59.17 },

  // US territories
  'alaska': { lat: 64.20, lon: -152.49 },
  'hawaii': { lat: 19.90, lon: -155.58 },
  'guam': { lat: 13.44, lon: 144.79 },
  'northern mariana islands': { lat: 15.18, lon: 145.75 },
  'american samoa': { lat: -14.27, lon: -170.70 },
  'guantanamo bay': { lat: 19.90, lon: -75.10 },
  'midway island': { lat: 28.21, lon: -177.38 },
  'wake island': { lat: 19.28, lon: 166.65 },
  'johnston island': { lat: 16.73, lon: -169.53 },
  'baker & howland islands': { lat: 0.19, lon: -176.48 },
  'palmyra & jarvis islands': { lat: 5.88, lon: -162.08 },

  // Pacific islands
  'samoa': { lat: -13.76, lon: -172.10 },
  'tonga': { lat: -21.18, lon: -175.20 },
  'fiji': { lat: -17.71, lon: 178.07 },
  'vanuatu': { lat: -17.73, lon: 168.32 },
  'kiribati': { lat: 1.87, lon: -157.36 },
  'nauru': { lat: -0.52, lon: 166.93 },
  'tuvalu': { lat: -7.11, lon: 177.65 },
  'palau': { lat: 7.51, lon: 134.58 },
  'marshall islands': { lat: 7.13, lon: 171.18 },
  'micronesia': { lat: 7.43, lon: 150.55 },
  'solomon islands': { lat: -9.43, lon: 160.02 },
  'niue': { lat: -19.05, lon: -169.87 },
  'cook islands': { lat: -21.24, lon: -159.78 },
  'tokelau': { lat: -9.20, lon: -171.85 },
  'wallis & futuna islands': { lat: -13.77, lon: -177.16 },
  'french polynesia': { lat: -17.68, lon: -149.41 },
  'new caledonia': { lat: -20.90, lon: 165.62 },

  // Australian territories
  'norfolk island': { lat: -29.04, lon: 167.95 },
  'lord howe island': { lat: -31.56, lon: 159.08 },
  'christmas island': { lat: -10.45, lon: 105.69 },
  'cocos (keeling) islands': { lat: -12.19, lon: 96.83 },
  'macquarie island': { lat: -54.62, lon: 158.86 },
  'heard island': { lat: -53.10, lon: 73.52 },

  // Asian territories
  'hong kong': { lat: 22.32, lon: 114.17 },
  'macao': { lat: 22.20, lon: 113.55 },
  'singapore': { lat: 1.35, lon: 103.82 },
  'east timor': { lat: -8.87, lon: 125.73 },

  // Indian Ocean
  'bahrain': { lat: 26.07, lon: 50.55 },
  'maldives': { lat: 3.20, lon: 73.22 },
  'mauritius': { lat: -20.35, lon: 57.55 },
  'rodrigues island': { lat: -19.72, lon: 63.43 },
  'reunion': { lat: -21.12, lon: 55.54 },
  'seychelles': { lat: -4.68, lon: 55.49 },
  'comoros': { lat: -11.88, lon: 43.87 },
  'mayotte': { lat: -12.84, lon: 45.14 },
  'chagos islands': { lat: -6.34, lon: 71.88 },
  'andaman & nicobar islands': { lat: 11.74, lon: 92.66 },
  'lakshadweep islands': { lat: 10.57, lon: 72.64 },

  // African islands
  'cape verde': { lat: 16.00, lon: -24.01 },
  'sao tome & principe': { lat: 0.19, lon: 6.61 },
  'ascension island': { lat: -7.94, lon: -14.36 },
  'st. helena': { lat: -15.97, lon: -5.70 },
  'tristan da cunha': { lat: -37.07, lon: -12.32 },

  // Antarctic/Sub-Antarctic
  'bouvet island': { lat: -54.43, lon: 3.38 },
  'south georgia island': { lat: -54.28, lon: -36.51 },
  'south orkney islands': { lat: -60.58, lon: -45.50 },
  'south shetland islands': { lat: -62.00, lon: -58.00 },
  'peter i island': { lat: -68.77, lon: -90.58 },
  'kerguelen islands': { lat: -49.28, lon: 69.35 },
  'crozet islands': { lat: -46.43, lon: 51.75 },
  'amsterdam & st. paul islands': { lat: -37.83, lon: 77.52 }
};

// Austrian Bundesländer data - maps OE prefix to state info
const AUSTRIA_STATES = {
  'OE1': { name: 'Wien', lat: 48.21, lon: 16.37 },
  'OE2': { name: 'Salzburg', lat: 47.80, lon: 13.04 },
  'OE3': { name: 'Niederösterreich', lat: 48.20, lon: 15.63 },
  'OE4': { name: 'Burgenland', lat: 47.85, lon: 16.53 },
  'OE5': { name: 'Oberösterreich', lat: 48.31, lon: 14.29 },
  'OE6': { name: 'Steiermark', lat: 47.07, lon: 15.44 },
  'OE7': { name: 'Tirol', lat: 47.26, lon: 11.39 },
  'OE8': { name: 'Kärnten', lat: 46.62, lon: 14.31 },
  'OE9': { name: 'Vorarlberg', lat: 47.25, lon: 9.90 }
};

// Maps state names to OE prefixes (for GeoJSON matching)
const STATE_NAME_TO_PREFIX = {
  'wien': 'OE1',
  'salzburg': 'OE2',
  'niederösterreich': 'OE3',
  'burgenland': 'OE4',
  'oberösterreich': 'OE5',
  'steiermark': 'OE6',
  'tirol': 'OE7',
  'kärnten': 'OE8',
  'vorarlberg': 'OE9'
};

// Bright colors for the 4 answer options
const QUIZ_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#f97316'];

/**
 * WorldMap class
 */
export class WorldMap {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.width = 800;
    this.height = 450;
    this.countries = null;
    this.decodedArcs = null;
    this.austriaStates = null;
    this.loaded = false;
  }

  async init() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d');
    await Promise.all([
      this.loadCountries(),
      this.loadAustriaStates()
    ]);
    this.loaded = true;
  }

  async loadAustriaStates() {
    try {
      const response = await fetch('austria-states.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      this.austriaStates = await response.json();
      console.log('Austria states loaded:', this.austriaStates.features.length, 'states');
    } catch (error) {
      console.error('Failed to load Austria states:', error);
    }
  }

  async loadCountries() {
    try {
      const response = await fetch('countries.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const topo = await response.json();

      const transform = topo.transform;
      this.decodedArcs = topo.arcs.map(arc => {
        const coords = [];
        let x = 0, y = 0;
        for (const point of arc) {
          x += point[0];
          y += point[1];
          coords.push([
            x * transform.scale[0] + transform.translate[0],
            y * transform.scale[1] + transform.translate[1]
          ]);
        }
        return coords;
      });

      this.countries = topo.objects.countries.geometries.map(geom => ({
        name: geom.properties?.name || '',
        rings: this.extractRings(geom)
      }));

      console.log('Map loaded:', this.countries.length, 'countries');
    } catch (error) {
      console.error('Failed to load countries:', error);
    }
  }

  extractRings(geom) {
    const rings = [];
    if (geom.type === 'Polygon') {
      for (const ring of geom.arcs) rings.push(this.decodeRing(ring));
    } else if (geom.type === 'MultiPolygon') {
      for (const polygon of geom.arcs) {
        for (const ring of polygon) rings.push(this.decodeRing(ring));
      }
    }
    return rings;
  }

  decodeRing(arcRefs) {
    const coords = [];
    for (const arcRef of arcRefs) {
      const arcIndex = arcRef < 0 ? ~arcRef : arcRef;
      const arc = this.decodedArcs[arcIndex];
      if (!arc) continue;
      const arcCoords = arcRef < 0 ? [...arc].reverse() : arc;
      for (let i = (coords.length === 0 ? 0 : 1); i < arcCoords.length; i++) {
        coords.push(arcCoords[i]);
      }
    }
    return coords;
  }

  latLonToPixel(lat, lon, bounds = null) {
    if (bounds) {
      const { minLat, maxLat, minLon, maxLon } = bounds;
      return {
        x: ((lon - minLon) / (maxLon - minLon)) * this.width,
        y: ((maxLat - lat) / (maxLat - minLat)) * this.height
      };
    }
    return {
      x: ((lon + 180) / 360) * this.width,
      y: ((90 - lat) / 180) * this.height
    };
  }

  /**
   * Convert option value to country name in countries.json
   */
  getCountryName(value) {
    if (!value) return null;
    const v = String(value);
    const upper = v.toUpperCase();
    const lower = v.toLowerCase();

    // Try as prefix first
    if (PREFIX_TO_COUNTRY[upper]) return PREFIX_TO_COUNTRY[upper];
    if (PREFIX_TO_COUNTRY[v]) return PREFIX_TO_COUNTRY[v];

    // Try as country name
    if (NAME_TO_COUNTRY[lower]) return NAME_TO_COUNTRY[lower];

    // Try direct match (already English)
    return v;
  }

  /**
   * Render Austria map with colored Bundesländer
   */
  renderAustriaQuiz(options) {
    const ctx = this.ctx;
    const bounds = { minLat: 46.3, maxLat: 49.1, minLon: 9.4, maxLon: 17.2 };

    // Build color map: OE prefix or state name -> color
    const colorMap = new Map();
    // Also track prefix -> color for marker drawing
    const prefixColorMap = new Map();

    if (options) {
      options.forEach((opt, i) => {
        const value = opt.value;
        const color = QUIZ_COLORS[i % QUIZ_COLORS.length];

        // If it's an OE prefix, get the state name
        if (AUSTRIA_STATES[value]) {
          colorMap.set(AUSTRIA_STATES[value].name.toLowerCase(), { color, prefix: value });
          prefixColorMap.set(value, color);
        } else {
          // It's a state name directly
          colorMap.set(value.toLowerCase(), { color, prefix: null });
          // Also map by prefix if we can find it
          const prefix = STATE_NAME_TO_PREFIX[value.toLowerCase()];
          if (prefix) {
            prefixColorMap.set(prefix, color);
          }
        }
      });
    }

    // Draw background
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(0, 0, this.width, this.height);

    // Debug: log the color assignments
    console.log('Austria quiz color map:', Object.fromEntries(colorMap));
    console.log('Austria quiz prefix map:', Object.fromEntries(prefixColorMap));

    // Sort features so Wien is drawn LAST (on top, since it's inside Niederösterreich)
    const sortedFeatures = [...this.austriaStates.features].sort((a, b) => {
      if (a.properties.name.toLowerCase() === 'wien') return 1;  // Wien last
      if (b.properties.name.toLowerCase() === 'wien') return -1;
      return 0;
    });

    // Draw each Austrian state
    for (const feature of sortedFeatures) {
      const stateName = feature.properties.name.toLowerCase();
      const highlighted = colorMap.get(stateName);

      if (highlighted) {
        ctx.fillStyle = highlighted.color;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
      } else {
        ctx.fillStyle = '#334155';
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1;
      }

      // Handle MultiPolygon and Polygon
      const polygons = feature.geometry.type === 'MultiPolygon'
        ? feature.geometry.coordinates
        : [feature.geometry.coordinates];

      for (const polygon of polygons) {
        for (const ring of polygon) {
          ctx.beginPath();
          let first = true;

          for (const coord of ring) {
            const [lon, lat] = coord;
            const pixel = this.latLonToPixel(lat, lon, bounds);

            if (first) {
              ctx.moveTo(pixel.x, pixel.y);
              first = false;
            } else {
              ctx.lineTo(pixel.x, pixel.y);
            }
          }
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      }
    }

    // Draw markers using predefined AUSTRIA_STATES coordinates (ensures consistent visibility)
    // This is especially important for small states like Vienna
    for (const [prefix, color] of prefixColorMap) {
      const stateInfo = AUSTRIA_STATES[prefix];
      if (!stateInfo) continue;

      const pixel = this.latLonToPixel(stateInfo.lat, stateInfo.lon, bounds);

      // Use larger marker for Vienna (OE1) since its polygon is tiny
      const radius = prefix === 'OE1' ? 14 : 10;

      ctx.beginPath();
      ctx.arc(pixel.x, pixel.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    return this.canvas;
  }

  renderQuiz(question, options) {
    if (!this.ctx || !this.countries) return this.canvas;
    const ctx = this.ctx;

    const mode = question?.mode;
    const isAustriaMode = mode?.category === 'austria';
    const isNeighborMode = mode?.category === 'neighbors';

    // For Austria mode, render Austrian states map
    if (isAustriaMode && this.austriaStates) {
      return this.renderAustriaQuiz(options);
    }

    let bounds = null;
    if (isNeighborMode) {
      bounds = { minLat: 42.0, maxLat: 56.0, minLon: 4.0, maxLon: 26.0 };
    }

    // Build color map: normalized country name -> color
    const colorMap = new Map();
    if (options) {
      options.forEach((opt, i) => {
        const countryName = this.getCountryName(opt.value);
        if (countryName) {
          colorMap.set(countryName.toLowerCase(), QUIZ_COLORS[i % QUIZ_COLORS.length]);
        }
      });
    }

    // Draw ocean
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(0, 0, this.width, this.height);

    // Track centroids for highlighted countries to draw markers
    const countryCentroids = new Map();
    const countryNamesInMap = new Set();

    // Draw all countries
    for (const country of this.countries) {
      const nameLower = country.name.toLowerCase();
      countryNamesInMap.add(nameLower);
      const isHighlighted = colorMap.has(nameLower);

      if (isHighlighted) {
        ctx.fillStyle = colorMap.get(nameLower);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
      } else {
        ctx.fillStyle = '#334155';
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 0.5;
      }

      // Track points for centroid calculation
      let sumX = 0, sumY = 0, pointCount = 0;

      for (const ring of country.rings) {
        if (ring.length < 3) continue;
        ctx.beginPath();
        let first = true;
        let prevX = null;

        for (const [lon, lat] of ring) {
          if (bounds && (lat < bounds.minLat - 10 || lat > bounds.maxLat + 10 ||
              lon < bounds.minLon - 20 || lon > bounds.maxLon + 20)) continue;

          const pixel = this.latLonToPixel(lat, lon, bounds);

          if (prevX !== null && Math.abs(pixel.x - prevX) > this.width / 2) {
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            first = true;
          }

          if (first) {
            ctx.moveTo(pixel.x, pixel.y);
            first = false;
          } else {
            ctx.lineTo(pixel.x, pixel.y);
          }
          prevX = pixel.x;

          // Accumulate for centroid
          if (isHighlighted && pixel.x >= 0 && pixel.x <= this.width && pixel.y >= 0 && pixel.y <= this.height) {
            sumX += pixel.x;
            sumY += pixel.y;
            pointCount++;
          }
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      // Store centroid for highlighted countries
      if (isHighlighted && pointCount > 0) {
        countryCentroids.set(nameLower, { x: sumX / pointCount, y: sumY / pointCount });
      }
    }

    // For neighbor mode, draw Austria border outline
    if (isNeighborMode && this.austriaStates) {
      ctx.strokeStyle = '#fbbf24';  // Amber/gold color for Austria
      ctx.lineWidth = 4;
      ctx.fillStyle = 'rgba(251, 191, 36, 0.3)';  // Semi-transparent amber fill

      for (const feature of this.austriaStates.features) {
        const polygons = feature.geometry.type === 'MultiPolygon'
          ? feature.geometry.coordinates
          : [feature.geometry.coordinates];

        for (const polygon of polygons) {
          for (const ring of polygon) {
            ctx.beginPath();
            let first = true;

            for (const coord of ring) {
              const [lon, lat] = coord;
              const pixel = this.latLonToPixel(lat, lon, bounds);

              if (first) {
                ctx.moveTo(pixel.x, pixel.y);
                first = false;
              } else {
                ctx.lineTo(pixel.x, pixel.y);
              }
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
        }
      }

      // Draw "OE" label in center of Austria with background
      const austriaCenter = this.latLonToPixel(47.5, 14.5, bounds);

      // Draw background circle
      ctx.beginPath();
      ctx.arc(austriaCenter.x, austriaCenter.y, 18, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw text
      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('OE', austriaCenter.x, austriaCenter.y);
    }

    // Draw circular markers for all answer options
    if (options) {
      options.forEach((opt, i) => {
        const countryName = this.getCountryName(opt.value);
        if (!countryName) return;

        const nameLower = countryName.toLowerCase();
        const color = QUIZ_COLORS[i % QUIZ_COLORS.length];
        let pixel = null;

        // Try to get centroid from drawn country
        if (countryCentroids.has(nameLower)) {
          pixel = countryCentroids.get(nameLower);
        }
        // Try small country coordinates
        else {
          const coords = SMALL_COUNTRY_COORDS[opt.value.toLowerCase()] ||
                         SMALL_COUNTRY_COORDS[nameLower];
          if (coords) {
            pixel = this.latLonToPixel(coords.lat, coords.lon, bounds);
          }
        }

        if (!pixel) {
          console.log('No position for:', opt.value, nameLower);
          return;
        }

        // Draw marker circle matching the button indicator
        ctx.beginPath();
        ctx.arc(pixel.x, pixel.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    return this.canvas;
  }

  render(entityId, mode) {
    return this.renderQuiz({ mode }, []);
  }

  renderTo(container, entityId, mode) {
    this.render(entityId, mode);
    container.innerHTML = '';
    container.appendChild(this.canvas);
  }

  renderQuizTo(container, question, options) {
    this.renderQuiz(question, options);
    container.innerHTML = '';
    container.appendChild(this.canvas);
  }
}

let mapInstance = null;
let mapLoadPromise = null;

export async function getMap() {
  // If already loaded successfully, return it
  if (mapInstance && mapInstance.loaded) {
    return mapInstance;
  }

  // If currently loading, wait for it
  if (mapLoadPromise) {
    return mapLoadPromise;
  }

  // Start loading
  mapLoadPromise = (async () => {
    try {
      mapInstance = new WorldMap();
      await mapInstance.init();

      if (!mapInstance.loaded) {
        throw new Error('Map failed to load');
      }

      return mapInstance;
    } catch (error) {
      console.error('Map loading failed:', error);
      // Reset so next call tries again
      mapInstance = null;
      mapLoadPromise = null;
      throw error;
    }
  })();

  return mapLoadPromise;
}
