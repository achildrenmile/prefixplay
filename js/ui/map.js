/**
 * PrefixPlay Map Component
 * Interactive world map with country coloring
 */

// Mapping from amateur radio prefixes to country names (exact match with countries.json)
const PREFIX_TO_COUNTRY_NAME = {
  // Europe
  'OE': 'Austria',
  'DL': 'Germany',
  'F': 'France',
  'G': 'United Kingdom',
  'I': 'Italy',
  'EA': 'Spain',
  'CT': 'Portugal',
  'PA': 'Netherlands',
  'ON': 'Belgium',
  'HB': 'Switzerland',
  'SP': 'Poland',
  'OK': 'Czechia',
  'OM': 'Slovakia',
  'HA': 'Hungary',
  'S5': 'Slovenia',
  'YO': 'Romania',
  'LZ': 'Bulgaria',
  'SV': 'Greece',
  'UA': 'Russia',
  'UR': 'Ukraine',
  'SM': 'Sweden',
  'LA': 'Norway',
  'OH': 'Finland',
  'OZ': 'Denmark',
  'EI': 'Ireland',
  '9A': 'Croatia',
  'YU': 'Serbia',
  'Z3': 'Macedonia',
  'E7': 'Bosnia and Herz.',
  '4O': 'Montenegro',
  'ZA': 'Albania',
  'LX': 'Luxembourg',
  'ES': 'Estonia',
  'YL': 'Latvia',
  'LY': 'Lithuania',
  'ER': 'Moldova',
  'TA': 'Turkey',
  'TF': 'Iceland',
  '5B': 'Cyprus',
  'EU': 'Belarus',

  // North America
  'K': 'United States of America',
  'W': 'United States of America',
  'N': 'United States of America',
  'VE': 'Canada',
  'XE': 'Mexico',

  // Central America & Caribbean
  'TI': 'Costa Rica',
  'HP': 'Panama',
  'YN': 'Nicaragua',
  'HR': 'Honduras',
  'YS': 'El Salvador',
  'TG': 'Guatemala',
  'V3': 'Belize',
  'CO': 'Cuba',
  '6Y': 'Jamaica',
  'HI': 'Dominican Rep.',
  'HH': 'Haiti',
  '9Y': 'Trinidad and Tobago',

  // South America
  'PY': 'Brazil',
  'LU': 'Argentina',
  'CE': 'Chile',
  'HK': 'Colombia',
  'OA': 'Peru',
  'YV': 'Venezuela',
  'HC': 'Ecuador',
  'CP': 'Bolivia',
  'ZP': 'Paraguay',
  'CX': 'Uruguay',
  '8R': 'Guyana',
  'PZ': 'Suriname',

  // Asia
  'JA': 'Japan',
  'BY': 'China',
  'BV': 'Taiwan',
  'VU': 'India',
  'HL': 'South Korea',
  'P5': 'North Korea',
  'HS': 'Thailand',
  'YB': 'Indonesia',
  '9M': 'Malaysia',
  '9V': 'Singapore',
  'DU': 'Philippines',
  'XV': 'Vietnam',
  'XW': 'Laos',
  'XU': 'Cambodia',
  'XY': 'Myanmar',
  'AP': 'Pakistan',
  'S2': 'Bangladesh',
  '4S': 'Sri Lanka',
  '9N': 'Nepal',
  'A5': 'Bhutan',
  'JT': 'Mongolia',
  'UN': 'Kazakhstan',
  'UK': 'Uzbekistan',
  'EX': 'Kyrgyzstan',
  'EY': 'Tajikistan',
  'EZ': 'Turkmenistan',
  'YA': 'Afghanistan',

  // Middle East
  'HZ': 'Saudi Arabia',
  'A4': 'Oman',
  'A6': 'United Arab Emirates',
  'A7': 'Qatar',
  '9K': 'Kuwait',
  'YI': 'Iraq',
  'EP': 'Iran',
  'OD': 'Lebanon',
  'JY': 'Jordan',
  '4X': 'Israel',
  'YK': 'Syria',
  '7O': 'Yemen',
  '4L': 'Georgia',
  'EK': 'Armenia',
  '4J': 'Azerbaijan',

  // Africa
  'ZS': 'South Africa',
  'SU': 'Egypt',
  'CN': 'Morocco',
  '5N': 'Nigeria',
  '5Z': 'Kenya',
  '5H': 'Tanzania',
  'ET': 'Ethiopia',
  '7X': 'Algeria',
  '3V': 'Tunisia',
  '5A': 'Libya',
  'ST': 'Sudan',
  '9J': 'Zambia',
  'Z2': 'Zimbabwe',
  'A2': 'Botswana',
  'V5': 'Namibia',
  '9Q': 'Dem. Rep. Congo',
  'TN': 'Congo',
  'C9': 'Mozambique',
  '5R': 'Madagascar',
  '9X': 'Rwanda',
  '9U': 'Burundi',
  '5X': 'Uganda',
  'E3': 'Eritrea',
  'J2': 'Djibouti',
  '6O': 'Somalia',
  'TJ': 'Cameroon',
  'TL': 'Central African Rep.',
  'TT': 'Chad',
  '5T': 'Mauritania',
  'TZ': 'Mali',
  '5U': 'Niger',
  'XT': 'Burkina Faso',
  '6W': 'Senegal',
  'C5': 'Gambia',
  '3X': 'Guinea',
  'J5': 'Guinea-Bissau',
  '9L': 'Sierra Leone',
  'EL': 'Liberia',
  'TU': "Côte d'Ivoire",
  '9G': 'Ghana',
  '5V': 'Togo',
  'TY': 'Benin',
  'TR': 'Gabon',
  '3C': 'Eq. Guinea',
  '9L': 'Sierra Leone',
  '7P': 'Lesotho',
  '3DA': 'eSwatini',
  '7Q': 'Malawi',
  'D2': 'Angola',

  // Oceania
  'VK': 'Australia',
  'ZL': 'New Zealand',
  'P2': 'Papua New Guinea',
  '3D2': 'Fiji',
  'YJ': 'Vanuatu',
  'H4': 'Solomon Is.',
  'FK': 'New Caledonia',

  // Austrian states (all map to Austria)
  'OE1': 'Austria', 'OE2': 'Austria', 'OE3': 'Austria',
  'OE4': 'Austria', 'OE5': 'Austria', 'OE6': 'Austria',
  'OE7': 'Austria', 'OE8': 'Austria', 'OE9': 'Austria'
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

// Color palette for quiz options - bright, distinct colors
const QUIZ_COLORS = [
  '#ef4444', // red
  '#3b82f6', // blue
  '#22c55e', // green
  '#f97316'  // orange
];

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
          const lon = x * transform.scale[0] + transform.translate[0];
          const lat = y * transform.scale[1] + transform.translate[1];
          coords.push([lon, lat]);
        }
        return coords;
      });

      this.countries = topo.objects.countries.geometries.map(geom => ({
        name: geom.properties?.name || '',
        id: geom.id,
        type: geom.type,
        rings: this.extractRings(geom)
      }));

      console.log('Loaded', this.countries.length, 'countries');
    } catch (error) {
      console.error('Failed to load countries:', error);
    }
  }

  extractRings(geom) {
    const rings = [];
    if (geom.type === 'Polygon') {
      for (const ring of geom.arcs) {
        rings.push(this.decodeRing(ring));
      }
    } else if (geom.type === 'MultiPolygon') {
      for (const polygon of geom.arcs) {
        for (const ring of polygon) {
          rings.push(this.decodeRing(ring));
        }
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
      const x = ((lon - minLon) / (maxLon - minLon)) * this.width;
      const y = ((maxLat - lat) / (maxLat - minLat)) * this.height;
      return { x, y };
    }
    const x = ((lon + 180) / 360) * this.width;
    const y = ((90 - lat) / 180) * this.height;
    return { x, y };
  }

  getCountryName(prefix) {
    if (!prefix) return null;
    const p = String(prefix).toUpperCase();
    return PREFIX_TO_COUNTRY_NAME[p] || null;
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

    // Build color map: country name -> color
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

    // Draw all countries
    for (const country of this.countries) {
      const countryNameLower = country.name.toLowerCase();
      const isHighlighted = colorMap.has(countryNameLower);

      if (isHighlighted) {
        ctx.fillStyle = colorMap.get(countryNameLower);
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
          if (bounds) {
            if (lat < bounds.minLat - 10 || lat > bounds.maxLat + 10 ||
                lon < bounds.minLon - 20 || lon > bounds.maxLon + 20) continue;
          }

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

    // For Austria mode, draw state markers with labels
    if (isAustriaMode && options) {
      options.forEach((opt, i) => {
        const state = AUSTRIA_STATES[opt.value];
        if (!state) return;

        const pixel = this.latLonToPixel(state.lat, state.lon, bounds);
        const color = QUIZ_COLORS[i % QUIZ_COLORS.length];

        // Draw colored circle marker
        ctx.beginPath();
        ctx.arc(pixel.x, pixel.y, 15, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw prefix text inside circle
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
