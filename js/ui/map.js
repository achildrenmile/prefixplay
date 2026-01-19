/**
 * Map Component
 * Canvas-based world map with country highlighting
 * Based on firstcontact approach
 */

/**
 * Country center coordinates (lat, lon)
 * For showing markers on the map
 */
export const COUNTRY_COORDS = {
  // Europe
  'germany': { lat: 51.2, lon: 10.5 },
  'austria': { lat: 47.5, lon: 14.5 },
  'switzerland': { lat: 46.8, lon: 8.2 },
  'liechtenstein': { lat: 47.1, lon: 9.5 },
  'czech-republic': { lat: 49.8, lon: 15.5 },
  'slovakia': { lat: 48.7, lon: 19.7 },
  'hungary': { lat: 47.2, lon: 19.5 },
  'slovenia': { lat: 46.1, lon: 14.9 },
  'italy': { lat: 42.5, lon: 12.6 },
  'france': { lat: 46.2, lon: 2.2 },
  'spain': { lat: 40.5, lon: -3.7 },
  'portugal': { lat: 39.4, lon: -8.2 },
  'united-kingdom': { lat: 54.0, lon: -2.0 },
  'ireland': { lat: 53.4, lon: -8.2 },
  'netherlands': { lat: 52.1, lon: 5.3 },
  'belgium': { lat: 50.5, lon: 4.5 },
  'luxembourg': { lat: 49.8, lon: 6.1 },
  'poland': { lat: 52.0, lon: 19.1 },
  'sweden': { lat: 62.2, lon: 17.6 },
  'norway': { lat: 60.5, lon: 8.5 },
  'finland': { lat: 64.0, lon: 26.0 },
  'denmark': { lat: 56.3, lon: 9.5 },
  'russia': { lat: 61.5, lon: 105.3 },
  'ukraine': { lat: 48.4, lon: 31.2 },
  'belarus': { lat: 53.7, lon: 27.9 },
  'romania': { lat: 46.0, lon: 25.0 },
  'bulgaria': { lat: 42.7, lon: 25.5 },
  'greece': { lat: 39.1, lon: 21.8 },
  'turkey': { lat: 39.0, lon: 35.2 },
  'serbia': { lat: 44.0, lon: 21.0 },
  'croatia': { lat: 45.1, lon: 15.2 },
  'bosnia': { lat: 43.9, lon: 17.7 },
  'montenegro': { lat: 42.7, lon: 19.4 },
  'north-macedonia': { lat: 41.5, lon: 21.7 },
  'albania': { lat: 41.2, lon: 20.2 },
  'estonia': { lat: 58.6, lon: 25.0 },
  'latvia': { lat: 56.9, lon: 24.6 },
  'lithuania': { lat: 55.2, lon: 23.9 },
  'moldova': { lat: 47.4, lon: 28.4 },
  'iceland': { lat: 65.0, lon: -19.0 },
  'malta': { lat: 35.9, lon: 14.4 },
  'cyprus': { lat: 35.1, lon: 33.4 },
  'andorra': { lat: 42.5, lon: 1.5 },
  'monaco': { lat: 43.7, lon: 7.4 },
  'san-marino': { lat: 43.9, lon: 12.5 },
  'vatican': { lat: 41.9, lon: 12.5 },
  // Americas
  'united-states': { lat: 39.8, lon: -98.6 },
  'canada': { lat: 56.1, lon: -106.3 },
  'mexico': { lat: 23.6, lon: -102.6 },
  'brazil': { lat: -14.2, lon: -51.9 },
  'argentina': { lat: -38.4, lon: -63.6 },
  'chile': { lat: -35.7, lon: -71.5 },
  'colombia': { lat: 4.6, lon: -74.3 },
  'venezuela': { lat: 6.4, lon: -66.6 },
  'peru': { lat: -9.2, lon: -75.0 },
  'ecuador': { lat: -1.8, lon: -78.2 },
  'bolivia': { lat: -16.3, lon: -63.6 },
  'paraguay': { lat: -23.4, lon: -58.4 },
  'uruguay': { lat: -32.5, lon: -55.8 },
  'cuba': { lat: 21.5, lon: -77.8 },
  'puerto-rico': { lat: 18.2, lon: -66.6 },
  'jamaica': { lat: 18.1, lon: -77.3 },
  'haiti': { lat: 19.0, lon: -72.3 },
  'dominican-republic': { lat: 18.7, lon: -70.2 },
  'guatemala': { lat: 15.8, lon: -90.2 },
  'honduras': { lat: 15.2, lon: -86.2 },
  'el-salvador': { lat: 13.8, lon: -88.9 },
  'nicaragua': { lat: 12.9, lon: -85.2 },
  'costa-rica': { lat: 9.7, lon: -83.8 },
  'panama': { lat: 9.0, lon: -79.5 },
  // Africa
  'south-africa': { lat: -30.6, lon: 22.9 },
  'egypt': { lat: 26.8, lon: 30.8 },
  'nigeria': { lat: 9.1, lon: 8.7 },
  'kenya': { lat: -0.0, lon: 37.9 },
  'morocco': { lat: 31.8, lon: -7.1 },
  'algeria': { lat: 28.0, lon: 1.7 },
  'tunisia': { lat: 34.0, lon: 9.5 },
  'libya': { lat: 26.3, lon: 17.2 },
  'ethiopia': { lat: 9.1, lon: 40.5 },
  'tanzania': { lat: -6.4, lon: 34.9 },
  'ghana': { lat: 7.9, lon: -1.0 },
  'senegal': { lat: 14.5, lon: -14.5 },
  'ivory-coast': { lat: 7.5, lon: -5.5 },
  'cameroon': { lat: 7.4, lon: 12.4 },
  'zimbabwe': { lat: -19.0, lon: 29.2 },
  'zambia': { lat: -13.1, lon: 27.8 },
  'mozambique': { lat: -18.7, lon: 35.5 },
  'angola': { lat: -11.2, lon: 17.9 },
  'congo': { lat: -4.0, lon: 21.8 },
  'uganda': { lat: 1.4, lon: 32.3 },
  'sudan': { lat: 12.9, lon: 30.2 },
  // Asia
  'china': { lat: 35.9, lon: 104.2 },
  'japan': { lat: 36.2, lon: 138.3 },
  'south-korea': { lat: 35.9, lon: 127.8 },
  'north-korea': { lat: 40.3, lon: 127.5 },
  'india': { lat: 20.6, lon: 79.0 },
  'pakistan': { lat: 30.4, lon: 69.3 },
  'bangladesh': { lat: 23.7, lon: 90.4 },
  'thailand': { lat: 15.9, lon: 101.0 },
  'vietnam': { lat: 14.1, lon: 108.3 },
  'indonesia': { lat: -0.8, lon: 113.9 },
  'philippines': { lat: 12.9, lon: 121.8 },
  'malaysia': { lat: 4.2, lon: 101.9 },
  'singapore': { lat: 1.4, lon: 103.8 },
  'taiwan': { lat: 23.7, lon: 121.0 },
  'hong-kong': { lat: 22.4, lon: 114.1 },
  'saudi-arabia': { lat: 23.9, lon: 45.1 },
  'iran': { lat: 32.4, lon: 53.7 },
  'iraq': { lat: 33.2, lon: 43.7 },
  'israel': { lat: 31.0, lon: 34.9 },
  'jordan': { lat: 30.6, lon: 36.2 },
  'lebanon': { lat: 33.9, lon: 35.9 },
  'syria': { lat: 34.8, lon: 39.0 },
  'uae': { lat: 23.4, lon: 53.8 },
  'qatar': { lat: 25.4, lon: 51.2 },
  'kuwait': { lat: 29.3, lon: 47.5 },
  'oman': { lat: 21.5, lon: 55.9 },
  'yemen': { lat: 15.6, lon: 48.5 },
  'afghanistan': { lat: 33.9, lon: 67.7 },
  'kazakhstan': { lat: 48.0, lon: 67.0 },
  'uzbekistan': { lat: 41.4, lon: 64.6 },
  'mongolia': { lat: 46.9, lon: 103.8 },
  'myanmar': { lat: 21.9, lon: 96.0 },
  'cambodia': { lat: 12.6, lon: 105.0 },
  'laos': { lat: 19.9, lon: 102.5 },
  'nepal': { lat: 28.4, lon: 84.1 },
  'sri-lanka': { lat: 7.9, lon: 80.8 },
  // Oceania
  'australia': { lat: -25.3, lon: 133.8 },
  'new-zealand': { lat: -40.9, lon: 174.9 },
  'papua-new-guinea': { lat: -6.3, lon: 143.9 },
  'fiji': { lat: -18.0, lon: 179.0 },
  'hawaii': { lat: 19.9, lon: -155.6 },
  'guam': { lat: 13.4, lon: 144.8 },
  // Austrian states (approximate centers)
  'OE1': { lat: 48.21, lon: 16.37 },  // Wien
  'OE2': { lat: 47.80, lon: 13.04 },  // Salzburg
  'OE3': { lat: 48.20, lon: 15.63 },  // Niederösterreich
  'OE4': { lat: 47.85, lon: 16.53 },  // Burgenland
  'OE5': { lat: 48.31, lon: 14.29 },  // Oberösterreich
  'OE6': { lat: 47.07, lon: 15.44 },  // Steiermark
  'OE7': { lat: 47.26, lon: 11.39 },  // Tirol
  'OE8': { lat: 46.62, lon: 14.31 },  // Kärnten
  'OE9': { lat: 47.25, lon: 9.90 },   // Vorarlberg
  // Neighbor IDs
  'de': { lat: 51.2, lon: 10.5 },
  'ok': { lat: 49.8, lon: 15.5 },
  'om': { lat: 48.7, lon: 19.7 },
  'ha': { lat: 47.2, lon: 19.5 },
  's5': { lat: 46.1, lon: 14.9 },
  'i': { lat: 42.5, lon: 12.6 },
  'hb': { lat: 46.8, lon: 8.2 },
  'hb0': { lat: 47.1, lon: 9.5 }
};

/**
 * Map Component Class
 */
export class WorldMap {
  constructor(container) {
    this.container = container;
    this.canvas = null;
    this.ctx = null;
    this.width = 600;
    this.height = 300;
    this.landPolygons = [];
    this.loaded = false;

    this.colors = {
      water: '#1a365d',
      land: '#334155',
      landStroke: '#475569',
      highlight: '#3b82f6',
      highlightGlow: 'rgba(59, 130, 246, 0.4)',
      austria: '#22c55e',
      austriaGlow: 'rgba(34, 197, 94, 0.4)'
    };
  }

  /**
   * Initialize the map
   */
  async init() {
    this.createCanvas();
    await this.loadTopoJSON();
    this.loaded = true;
  }

  /**
   * Create canvas element
   */
  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.className = 'world-map-canvas';
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * Load TopoJSON world data
   */
  async loadTopoJSON() {
    try {
      const response = await fetch('world.json');
      const topo = await response.json();
      this.landPolygons = this.parseTopoJSON(topo);
    } catch (error) {
      console.error('Failed to load world map:', error);
    }
  }

  /**
   * Parse TopoJSON to polygon arrays
   */
  parseTopoJSON(topo) {
    const transform = topo.transform;
    const arcs = topo.arcs;

    // Decode delta-encoded arcs
    const decodedArcs = arcs.map(arc => {
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

    // Extract land polygons
    const polygons = [];
    const land = topo.objects.land;

    if (land.type === 'GeometryCollection') {
      for (const geom of land.geometries) {
        if (geom.type === 'Polygon' || geom.type === 'MultiPolygon') {
          const rings = this.extractRings(geom, decodedArcs);
          polygons.push({ rings });
        }
      }
    }

    return polygons;
  }

  /**
   * Extract rings from geometry
   */
  extractRings(geom, decodedArcs) {
    const rings = [];
    const arcArrays = geom.type === 'Polygon' ? [geom.arcs] : geom.arcs;

    for (const polygon of arcArrays) {
      for (const ring of polygon) {
        const coords = [];
        for (const arcIndex of ring) {
          const arc = arcIndex >= 0 ? decodedArcs[arcIndex] : decodedArcs[~arcIndex].slice().reverse();
          coords.push(...arc);
        }
        rings.push(coords);
      }
    }
    return rings;
  }

  /**
   * Convert lat/lon to pixel coordinates
   */
  latLonToPixel(lat, lon) {
    const x = ((lon + 180) / 360) * this.width;
    const y = ((90 - lat) / 180) * this.height;
    return { x, y };
  }

  /**
   * Render map with highlighted location
   */
  render(entityId, mode) {
    if (!this.loaded) return this.canvas;

    const ctx = this.ctx;

    // Clear and draw water
    ctx.fillStyle = this.colors.water;
    ctx.fillRect(0, 0, this.width, this.height);

    // Draw land
    ctx.fillStyle = this.colors.land;
    ctx.strokeStyle = this.colors.landStroke;
    ctx.lineWidth = 0.5;

    for (const polygon of this.landPolygons) {
      for (const ring of polygon.rings) {
        ctx.beginPath();
        let prevX = null;

        for (let i = 0; i < ring.length; i++) {
          const [lon, lat] = ring[i];
          const { x, y } = this.latLonToPixel(lat, lon);

          // Handle date line crossing
          if (prevX !== null && Math.abs(x - prevX) > this.width / 2) {
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
          }

          if (i === 0 || (prevX !== null && Math.abs(x - prevX) > this.width / 2)) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          prevX = x;
        }

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }

    // Draw Austria marker (home)
    if (mode?.category !== 'austria') {
      const austriaCoords = COUNTRY_COORDS['austria'];
      if (austriaCoords) {
        this.drawMarker(austriaCoords.lat, austriaCoords.lon, this.colors.austria, this.colors.austriaGlow, 6);
      }
    }

    // Draw target marker
    const coords = this.getCoordinates(entityId, mode);
    if (coords) {
      this.drawMarker(coords.lat, coords.lon, this.colors.highlight, this.colors.highlightGlow, 10);
    }

    return this.canvas;
  }

  /**
   * Get coordinates for an entity
   */
  getCoordinates(entityId, mode) {
    // Direct lookup
    if (COUNTRY_COORDS[entityId]) {
      return COUNTRY_COORDS[entityId];
    }

    // Try lowercase
    const lowerId = entityId?.toLowerCase();
    if (COUNTRY_COORDS[lowerId]) {
      return COUNTRY_COORDS[lowerId];
    }

    // Try to match partial
    for (const [key, coords] of Object.entries(COUNTRY_COORDS)) {
      if (lowerId?.includes(key) || key.includes(lowerId)) {
        return coords;
      }
    }

    return null;
  }

  /**
   * Draw a pulsing marker
   */
  drawMarker(lat, lon, color, glowColor, size) {
    const { x, y } = this.latLonToPixel(lat, lon);
    const ctx = this.ctx;

    // Glow effect
    ctx.beginPath();
    ctx.arc(x, y, size + 8, 0, Math.PI * 2);
    ctx.fillStyle = glowColor;
    ctx.fill();

    // Outer circle
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // Inner dot
    ctx.beginPath();
    ctx.arc(x, y, size / 3, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }

  /**
   * Get HTML for embedding
   */
  getHTML(entityId, mode) {
    this.render(entityId, mode);
    return `<div class="map-container"><canvas class="world-map-canvas" width="${this.width}" height="${this.height}"></canvas></div>`;
  }

  /**
   * Render to a container element
   */
  renderTo(container, entityId, mode) {
    this.render(entityId, mode);

    const wrapper = document.createElement('div');
    wrapper.className = 'map-container';
    wrapper.appendChild(this.canvas);

    container.innerHTML = '';
    container.appendChild(wrapper);
  }
}

// Singleton instance
let mapInstance = null;

/**
 * Get or create map instance
 */
export async function getMap() {
  if (!mapInstance) {
    mapInstance = new WorldMap();
    await mapInstance.init();
  }
  return mapInstance;
}
