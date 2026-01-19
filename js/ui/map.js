/**
 * PrefixPlay Map Component
 * Interactive world map with country coloring
 */

// Mapping from amateur radio prefixes to country names (as in countries.json)
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
  'HB0': 'Liechtenstein',
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

  // North America
  'K': 'United States of America',
  'W': 'United States of America',
  'N': 'United States of America',
  'VE': 'Canada',
  'XE': 'Mexico',

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

  // Asia
  'JA': 'Japan',
  'BY': 'China',
  'VU': 'India',
  'HL': 'South Korea',
  'BV': 'Taiwan',
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

  // Middle East
  'HZ': 'Saudi Arabia',
  'A4': 'Oman',
  'A6': 'United Arab Emirates',
  'A7': 'Qatar',
  'A9': 'Bahrain',
  '9K': 'Kuwait',
  'YI': 'Iraq',
  'EP': 'Iran',
  'OD': 'Lebanon',
  'JY': 'Jordan',
  '4X': 'Israel',
  'YK': 'Syria',

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
  'C9': 'Mozambique',
  '5R': 'Madagascar',

  // Oceania
  'VK': 'Australia',
  'ZL': 'New Zealand',
  'P2': 'Papua New Guinea',
  '3D2': 'Fiji',

  // Austrian states (special handling)
  'OE1': 'Austria', 'OE2': 'Austria', 'OE3': 'Austria',
  'OE4': 'Austria', 'OE5': 'Austria', 'OE6': 'Austria',
  'OE7': 'Austria', 'OE8': 'Austria', 'OE9': 'Austria'
};

// Austrian Bundesländer data
export const AUSTRIA_STATES = {
  'OE1': { name: 'Wien', nameEn: 'Vienna', lat: 48.21, lon: 16.37 },
  'OE2': { name: 'Salzburg', nameEn: 'Salzburg', lat: 47.80, lon: 13.04 },
  'OE3': { name: 'Niederösterreich', nameEn: 'Lower Austria', lat: 48.20, lon: 15.63 },
  'OE4': { name: 'Burgenland', nameEn: 'Burgenland', lat: 47.85, lon: 16.53 },
  'OE5': { name: 'Oberösterreich', nameEn: 'Upper Austria', lat: 48.31, lon: 14.29 },
  'OE6': { name: 'Steiermark', nameEn: 'Styria', lat: 47.07, lon: 15.44 },
  'OE7': { name: 'Tirol', nameEn: 'Tyrol', lat: 47.26, lon: 11.39 },
  'OE8': { name: 'Kärnten', nameEn: 'Carinthia', lat: 46.62, lon: 14.31 },
  'OE9': { name: 'Vorarlberg', nameEn: 'Vorarlberg', lat: 47.25, lon: 9.90 }
};

// Color palette for quiz options
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

      // Decode arcs
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

      // Parse countries
      this.countries = topo.objects.countries.geometries.map(geom => ({
        name: geom.properties?.name || '',
        id: geom.id,
        type: geom.type,
        arcs: geom.arcs,
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

  /**
   * Get country name from prefix
   */
  getCountryName(prefix) {
    if (!prefix) return null;
    const p = String(prefix).toUpperCase();
    return PREFIX_TO_COUNTRY_NAME[p] || null;
  }

  /**
   * Render quiz map with colored countries
   */
  renderQuiz(question, options) {
    if (!this.ctx || !this.countries) return this.canvas;
    const ctx = this.ctx;

    // Determine view bounds
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

    // Draw countries
    for (const country of this.countries) {
      const countryNameLower = country.name.toLowerCase();
      const isHighlighted = colorMap.has(countryNameLower);

      // Set color
      if (isHighlighted) {
        ctx.fillStyle = colorMap.get(countryNameLower);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
      } else {
        ctx.fillStyle = '#334155';
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 0.5;
      }

      // Draw country polygons
      for (const ring of country.rings) {
        if (ring.length < 3) continue;

        ctx.beginPath();
        let first = true;
        let prevX = null;

        for (const [lon, lat] of ring) {
          // Skip points outside bounds for regional views
          if (bounds) {
            if (lat < bounds.minLat - 10 || lat > bounds.maxLat + 10 ||
                lon < bounds.minLon - 20 || lon > bounds.maxLon + 20) continue;
          }

          const pixel = this.latLonToPixel(lat, lon, bounds);

          // Handle date line crossing
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

      // Draw label for highlighted countries
      if (isHighlighted && options) {
        const opt = options.find(o => this.getCountryName(o.value)?.toLowerCase() === countryNameLower);
        if (opt) {
          const center = this.getCountryCenter(country, bounds);
          if (center) {
            this.drawLabel(ctx, center.x, center.y, opt.value, colorMap.get(countryNameLower));
          }
        }
      }
    }

    // For Austria mode, draw state labels
    if (isAustriaMode && options) {
      this.drawAustriaStateLabels(ctx, bounds, options);
    }

    // Draw legend
    this.drawLegend(ctx, options);

    return this.canvas;
  }

  getCountryCenter(country, bounds) {
    if (!country.rings || country.rings.length === 0) return null;

    // Use first ring's centroid
    const ring = country.rings[0];
    if (ring.length === 0) return null;

    let sumLat = 0, sumLon = 0;
    for (const [lon, lat] of ring) {
      sumLat += lat;
      sumLon += lon;
    }
    const avgLat = sumLat / ring.length;
    const avgLon = sumLon / ring.length;

    return this.latLonToPixel(avgLat, avgLon, bounds);
  }

  drawAustriaStateLabels(ctx, bounds, options) {
    options.forEach((opt, i) => {
      const state = AUSTRIA_STATES[opt.value];
      if (!state) return;

      const pixel = this.latLonToPixel(state.lat, state.lon, bounds);
      const color = QUIZ_COLORS[i % QUIZ_COLORS.length];

      // Draw marker
      ctx.beginPath();
      ctx.arc(pixel.x, pixel.y, 12, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw label
      this.drawLabel(ctx, pixel.x, pixel.y - 20, opt.value, color);

      // Draw state name
      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(state.name, pixel.x, pixel.y + 25);
    });
  }

  drawLabel(ctx, x, y, text, bgColor) {
    ctx.font = 'bold 12px monospace';
    const metrics = ctx.measureText(text);
    const padding = 4;
    const width = metrics.width + padding * 2;
    const height = 18;

    // Background
    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.roundRect(x - width / 2, y - height / 2, width, height, 4);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
  }

  drawLegend(ctx, options) {
    if (!options || options.length === 0) return;

    const legendX = 10;
    const legendY = 10;
    const itemHeight = 24;
    const padding = 10;

    // Background
    const height = options.length * itemHeight + padding * 2;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.beginPath();
    ctx.roundRect(legendX, legendY, 180, height, 6);
    ctx.fill();

    // Items
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    options.forEach((opt, i) => {
      const y = legendY + padding + i * itemHeight + itemHeight / 2;
      const color = QUIZ_COLORS[i % QUIZ_COLORS.length];

      // Color box
      ctx.fillStyle = color;
      ctx.fillRect(legendX + padding, y - 8, 16, 16);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.strokeRect(legendX + padding, y - 8, 16, 16);

      // Text
      ctx.fillStyle = '#ffffff';
      const label = opt.label.length > 18 ? opt.label.substring(0, 16) + '...' : opt.label;
      ctx.fillText(`${opt.value}: ${label}`, legendX + padding + 22, y);
    });
  }

  // Backward compatibility
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

// Singleton
let mapInstance = null;

export async function getMap() {
  if (!mapInstance) {
    mapInstance = new WorldMap();
    await mapInstance.init();
  }
  return mapInstance;
}
