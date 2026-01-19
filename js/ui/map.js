/**
 * PrefixPlay Map Component
 * Interactive world map with country coloring
 */

// Mapping from amateur radio prefixes to country names (as in countries.json)
const PREFIX_TO_COUNTRY = {
  // Europe
  'OE': 'Austria', 'DL': 'Germany', 'F': 'France', 'G': 'United Kingdom',
  'I': 'Italy', 'EA': 'Spain', 'CT': 'Portugal', 'PA': 'Netherlands',
  'ON': 'Belgium', 'HB': 'Switzerland', 'HB9': 'Switzerland', 'HB0': 'Liechtenstein',
  'SP': 'Poland', 'OK': 'Czechia', 'OM': 'Slovakia', 'HA': 'Hungary',
  'S5': 'Slovenia', 'YO': 'Romania', 'LZ': 'Bulgaria', 'SV': 'Greece',
  'UA': 'Russia', 'UR': 'Ukraine', 'SM': 'Sweden', 'LA': 'Norway',
  'OH': 'Finland', 'OZ': 'Denmark', 'EI': 'Ireland', '9A': 'Croatia',
  'YU': 'Serbia', 'Z3': 'Macedonia', 'E7': 'Bosnia and Herz.', '4O': 'Montenegro',
  'ZA': 'Albania', 'LX': 'Luxembourg', 'ES': 'Estonia', 'YL': 'Latvia',
  'LY': 'Lithuania', 'ER': 'Moldova', 'TA': 'Turkey', 'TF': 'Iceland',
  '5B': 'Cyprus', 'EU': 'Belarus',

  // North America
  'K': 'United States of America', 'W': 'United States of America',
  'N': 'United States of America', 'VE': 'Canada', 'XE': 'Mexico',

  // South America
  'PY': 'Brazil', 'LU': 'Argentina', 'CE': 'Chile', 'HK': 'Colombia',
  'OA': 'Peru', 'YV': 'Venezuela', 'HC': 'Ecuador', 'CP': 'Bolivia',
  'ZP': 'Paraguay', 'CX': 'Uruguay',

  // Asia
  'JA': 'Japan', 'BY': 'China', 'BV': 'Taiwan', 'VU': 'India',
  'HL': 'South Korea', 'HS': 'Thailand', 'YB': 'Indonesia', '9M': 'Malaysia',
  'DU': 'Philippines', 'XV': 'Vietnam', 'AP': 'Pakistan',

  // Middle East
  'HZ': 'Saudi Arabia', 'A6': 'United Arab Emirates', 'EP': 'Iran',
  '4X': 'Israel', 'JY': 'Jordan', 'OD': 'Lebanon',

  // Africa
  'ZS': 'South Africa', 'SU': 'Egypt', 'CN': 'Morocco', '5N': 'Nigeria',
  '5Z': 'Kenya', '5H': 'Tanzania', 'ET': 'Ethiopia', '7X': 'Algeria',

  // Oceania
  'VK': 'Australia', 'ZL': 'New Zealand', 'P2': 'Papua New Guinea',

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

// Small countries/territories that don't appear in 110m map (need markers)
const SMALL_COUNTRY_COORDS = {
  'liechtenstein': { lat: 47.16, lon: 9.55 },
  'monaco': { lat: 43.73, lon: 7.42 },
  'san marino': { lat: 43.94, lon: 12.46 },
  'vatican': { lat: 41.90, lon: 12.45 },
  'andorra': { lat: 42.51, lon: 1.52 },
  'malta': { lat: 35.94, lon: 14.38 },
  'luxembourg': { lat: 49.61, lon: 6.13 },
  'singapore': { lat: 1.35, lon: 103.82 },
  'bahrain': { lat: 26.07, lon: 50.55 },
  'hong kong': { lat: 22.32, lon: 114.17 },
  'macao': { lat: 22.20, lon: 113.55 },
  'brunei': { lat: 4.54, lon: 114.73 },
  'barbados': { lat: 13.19, lon: -59.54 },
  'grenada': { lat: 12.12, lon: -61.68 },
  'dominica': { lat: 15.41, lon: -61.34 },
  'st. lucia': { lat: 13.91, lon: -60.98 },
  'st. vincent': { lat: 13.25, lon: -61.20 },
  'st. kitts & nevis': { lat: 17.36, lon: -62.78 },
  'antigua & barbuda': { lat: 17.06, lon: -61.80 },
  'mauritius': { lat: -20.35, lon: 57.55 },
  'seychelles': { lat: -4.68, lon: 55.49 },
  'maldives': { lat: 3.20, lon: 73.22 },
  'comoros': { lat: -11.88, lon: 43.87 },
  'cape verde': { lat: 16.00, lon: -24.01 },
  'sao tome & principe': { lat: 0.19, lon: 6.61 },
  'samoa': { lat: -13.76, lon: -172.10 },
  'tonga': { lat: -21.18, lon: -175.20 },
  'vanuatu': { lat: -17.73, lon: 168.32 },
  'kiribati': { lat: 1.87, lon: -157.36 },
  'nauru': { lat: -0.52, lon: 166.93 },
  'tuvalu': { lat: -7.11, lon: 177.65 },
  'palau': { lat: 7.51, lon: 134.58 },
  'marshall islands': { lat: 7.13, lon: 171.18 },
  'micronesia': { lat: 7.43, lon: 150.55 }
};

// Austrian Bundesländer data
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
    this.loaded = false;
  }

  async init() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d');
    await this.loadCountries();
    this.loaded = true;
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

  renderQuiz(question, options) {
    if (!this.ctx || !this.countries) return this.canvas;
    const ctx = this.ctx;

    const mode = question?.mode;
    const isAustriaMode = mode?.category === 'austria';
    const isNeighborMode = mode?.category === 'neighbors';

    let bounds = null;
    if (isAustriaMode) {
      bounds = { minLat: 45.5, maxLat: 50.0, minLon: 8.5, maxLon: 18.0 };
    } else if (isNeighborMode) {
      bounds = { minLat: 42.0, maxLat: 56.0, minLon: 4.0, maxLon: 26.0 };
    }

    // Build color map: normalized country name -> color
    const colorMap = new Map();
    if (options) {
      options.forEach((opt, i) => {
        const countryName = this.getCountryName(opt.value);
        if (countryName) {
          colorMap.set(countryName.toLowerCase(), QUIZ_COLORS[i % QUIZ_COLORS.length]);
          console.log('Mapping:', opt.value, '->', countryName, '->', QUIZ_COLORS[i % QUIZ_COLORS.length]);
        }
      });
    }

    // Draw ocean
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(0, 0, this.width, this.height);

    // Draw all countries
    for (const country of this.countries) {
      const nameLower = country.name.toLowerCase();
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
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }

    // Draw markers for small countries not in 110m map
    if (options) {
      const countryNamesInMap = new Set(this.countries.map(c => c.name.toLowerCase()));

      options.forEach((opt, i) => {
        const countryName = this.getCountryName(opt.value);
        if (!countryName) return;

        const nameLower = countryName.toLowerCase();

        // If country was colored on map, skip marker
        if (countryNamesInMap.has(nameLower)) return;

        // Check if we have coordinates for this small country
        const coords = SMALL_COUNTRY_COORDS[opt.value.toLowerCase()] ||
                       SMALL_COUNTRY_COORDS[nameLower];
        if (!coords) {
          console.log('No coords for small country:', opt.value, nameLower);
          return;
        }

        const pixel = this.latLonToPixel(coords.lat, coords.lon, bounds);
        const color = QUIZ_COLORS[i % QUIZ_COLORS.length];

        // Draw marker circle
        ctx.beginPath();
        ctx.arc(pixel.x, pixel.y, 12, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        console.log('Drew marker for:', opt.value, 'at', pixel.x, pixel.y);
      });
    }

    // For Austria mode, draw state markers
    if (isAustriaMode && options) {
      options.forEach((opt, i) => {
        const state = AUSTRIA_STATES[opt.value];
        if (!state) return;

        const pixel = this.latLonToPixel(state.lat, state.lon, bounds);
        const color = QUIZ_COLORS[i % QUIZ_COLORS.length];

        ctx.beginPath();
        ctx.arc(pixel.x, pixel.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(opt.value, pixel.x, pixel.y);
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

export async function getMap() {
  if (!mapInstance) {
    mapInstance = new WorldMap();
    await mapInstance.init();
  }
  return mapInstance;
}
