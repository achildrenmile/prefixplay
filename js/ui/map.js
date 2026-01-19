/**
 * PrefixPlay Map Component
 * Interactive world map with country coloring and prefix labels
 */

// Austrian Bundesländer data with correct prefix assignments
export const AUSTRIA_STATES = {
  'OE1': { name: 'Wien', nameEn: 'Vienna', lat: 48.21, lon: 16.37, color: '#ef4444' },
  'OE2': { name: 'Salzburg', nameEn: 'Salzburg', lat: 47.80, lon: 13.04, color: '#f97316' },
  'OE3': { name: 'Niederösterreich', nameEn: 'Lower Austria', lat: 48.20, lon: 15.63, color: '#eab308' },
  'OE4': { name: 'Burgenland', nameEn: 'Burgenland', lat: 47.85, lon: 16.53, color: '#22c55e' },
  'OE5': { name: 'Oberösterreich', nameEn: 'Upper Austria', lat: 48.31, lon: 14.29, color: '#14b8a6' },
  'OE6': { name: 'Steiermark', nameEn: 'Styria', lat: 47.07, lon: 15.44, color: '#3b82f6' },
  'OE7': { name: 'Tirol', nameEn: 'Tyrol', lat: 47.26, lon: 11.39, color: '#8b5cf6' },
  'OE8': { name: 'Kärnten', nameEn: 'Carinthia', lat: 46.62, lon: 14.31, color: '#ec4899' },
  'OE9': { name: 'Vorarlberg', nameEn: 'Vorarlberg', lat: 47.25, lon: 9.90, color: '#06b6d4' }
};

// Austria's neighboring countries with prefixes
export const AUSTRIA_NEIGHBORS = {
  'DL': { name: 'Deutschland', nameEn: 'Germany', lat: 51.2, lon: 10.5, color: '#ef4444', flag: '🇩🇪' },
  'OK': { name: 'Tschechien', nameEn: 'Czech Republic', lat: 49.8, lon: 15.5, color: '#f97316', flag: '🇨🇿' },
  'OM': { name: 'Slowakei', nameEn: 'Slovakia', lat: 48.7, lon: 19.7, color: '#eab308', flag: '🇸🇰' },
  'HA': { name: 'Ungarn', nameEn: 'Hungary', lat: 47.2, lon: 19.5, color: '#22c55e', flag: '🇭🇺' },
  'S5': { name: 'Slowenien', nameEn: 'Slovenia', lat: 46.1, lon: 14.9, color: '#14b8a6', flag: '🇸🇮' },
  'I': { name: 'Italien', nameEn: 'Italy', lat: 42.5, lon: 12.6, color: '#3b82f6', flag: '🇮🇹' },
  'HB': { name: 'Schweiz', nameEn: 'Switzerland', lat: 46.8, lon: 8.2, color: '#8b5cf6', flag: '🇨🇭' },
  'HB0': { name: 'Liechtenstein', nameEn: 'Liechtenstein', lat: 47.1, lon: 9.5, color: '#ec4899', flag: '🇱🇮' }
};

// World countries with coordinates and prefixes (30+ examples)
export const WORLD_COUNTRIES = {
  // Europe
  'OE': { name: 'Österreich', nameEn: 'Austria', lat: 47.5, lon: 14.5, color: '#22c55e', flag: '🇦🇹', continent: 'EU' },
  'DL': { name: 'Deutschland', nameEn: 'Germany', lat: 51.2, lon: 10.5, color: '#ef4444', flag: '🇩🇪', continent: 'EU' },
  'F': { name: 'Frankreich', nameEn: 'France', lat: 46.2, lon: 2.2, color: '#3b82f6', flag: '🇫🇷', continent: 'EU' },
  'G': { name: 'England', nameEn: 'England', lat: 52.5, lon: -1.5, color: '#f97316', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', continent: 'EU' },
  'I': { name: 'Italien', nameEn: 'Italy', lat: 42.5, lon: 12.6, color: '#8b5cf6', flag: '🇮🇹', continent: 'EU' },
  'EA': { name: 'Spanien', nameEn: 'Spain', lat: 40.5, lon: -3.7, color: '#eab308', flag: '🇪🇸', continent: 'EU' },
  'CT': { name: 'Portugal', nameEn: 'Portugal', lat: 39.4, lon: -8.2, color: '#14b8a6', flag: '🇵🇹', continent: 'EU' },
  'PA': { name: 'Niederlande', nameEn: 'Netherlands', lat: 52.1, lon: 5.3, color: '#ec4899', flag: '🇳🇱', continent: 'EU' },
  'ON': { name: 'Belgien', nameEn: 'Belgium', lat: 50.5, lon: 4.5, color: '#06b6d4', flag: '🇧🇪', continent: 'EU' },
  'HB': { name: 'Schweiz', nameEn: 'Switzerland', lat: 46.8, lon: 8.2, color: '#a855f7', flag: '🇨🇭', continent: 'EU' },
  'SP': { name: 'Polen', nameEn: 'Poland', lat: 52.0, lon: 19.1, color: '#f43f5e', flag: '🇵🇱', continent: 'EU' },
  'OK': { name: 'Tschechien', nameEn: 'Czech Republic', lat: 49.8, lon: 15.5, color: '#84cc16', flag: '🇨🇿', continent: 'EU' },
  'HA': { name: 'Ungarn', nameEn: 'Hungary', lat: 47.2, lon: 19.5, color: '#0ea5e9', flag: '🇭🇺', continent: 'EU' },
  'YO': { name: 'Rumänien', nameEn: 'Romania', lat: 46.0, lon: 25.0, color: '#f59e0b', flag: '🇷🇴', continent: 'EU' },
  'LZ': { name: 'Bulgarien', nameEn: 'Bulgaria', lat: 42.7, lon: 25.5, color: '#10b981', flag: '🇧🇬', continent: 'EU' },
  'SV': { name: 'Griechenland', nameEn: 'Greece', lat: 39.1, lon: 21.8, color: '#6366f1', flag: '🇬🇷', continent: 'EU' },
  'UA': { name: 'Russland', nameEn: 'Russia', lat: 55.8, lon: 37.6, color: '#dc2626', flag: '🇷🇺', continent: 'EU' },
  'SM': { name: 'Schweden', nameEn: 'Sweden', lat: 62.2, lon: 17.6, color: '#2563eb', flag: '🇸🇪', continent: 'EU' },
  'LA': { name: 'Norwegen', nameEn: 'Norway', lat: 60.5, lon: 8.5, color: '#7c3aed', flag: '🇳🇴', continent: 'EU' },
  'OH': { name: 'Finnland', nameEn: 'Finland', lat: 64.0, lon: 26.0, color: '#db2777', flag: '🇫🇮', continent: 'EU' },

  // North America
  'K': { name: 'USA', nameEn: 'United States', lat: 39.8, lon: -98.6, color: '#3b82f6', flag: '🇺🇸', continent: 'NA' },
  'VE': { name: 'Kanada', nameEn: 'Canada', lat: 56.1, lon: -106.3, color: '#ef4444', flag: '🇨🇦', continent: 'NA' },
  'XE': { name: 'Mexiko', nameEn: 'Mexico', lat: 23.6, lon: -102.6, color: '#22c55e', flag: '🇲🇽', continent: 'NA' },

  // South America
  'PY': { name: 'Brasilien', nameEn: 'Brazil', lat: -14.2, lon: -51.9, color: '#22c55e', flag: '🇧🇷', continent: 'SA' },
  'LU': { name: 'Argentinien', nameEn: 'Argentina', lat: -38.4, lon: -63.6, color: '#3b82f6', flag: '🇦🇷', continent: 'SA' },
  'CE': { name: 'Chile', nameEn: 'Chile', lat: -35.7, lon: -71.5, color: '#ef4444', flag: '🇨🇱', continent: 'SA' },

  // Asia
  'JA': { name: 'Japan', nameEn: 'Japan', lat: 36.2, lon: 138.3, color: '#ef4444', flag: '🇯🇵', continent: 'AS' },
  'BY': { name: 'China', nameEn: 'China', lat: 35.9, lon: 104.2, color: '#eab308', flag: '🇨🇳', continent: 'AS' },
  'VU': { name: 'Indien', nameEn: 'India', lat: 20.6, lon: 79.0, color: '#f97316', flag: '🇮🇳', continent: 'AS' },
  'HL': { name: 'Südkorea', nameEn: 'South Korea', lat: 35.9, lon: 127.8, color: '#3b82f6', flag: '🇰🇷', continent: 'AS' },

  // Africa
  'ZS': { name: 'Südafrika', nameEn: 'South Africa', lat: -30.6, lon: 22.9, color: '#22c55e', flag: '🇿🇦', continent: 'AF' },
  'SU': { name: 'Ägypten', nameEn: 'Egypt', lat: 26.8, lon: 30.8, color: '#eab308', flag: '🇪🇬', continent: 'AF' },
  'CN': { name: 'Marokko', nameEn: 'Morocco', lat: 31.8, lon: -7.1, color: '#ef4444', flag: '🇲🇦', continent: 'AF' },
  '5N': { name: 'Nigeria', nameEn: 'Nigeria', lat: 9.1, lon: 8.7, color: '#22c55e', flag: '🇳🇬', continent: 'AF' },

  // Oceania
  'VK': { name: 'Australien', nameEn: 'Australia', lat: -25.3, lon: 133.8, color: '#3b82f6', flag: '🇦🇺', continent: 'OC' },
  'ZL': { name: 'Neuseeland', nameEn: 'New Zealand', lat: -40.9, lon: 174.9, color: '#22c55e', flag: '🇳🇿', continent: 'OC' }
};

// Color palette for quiz options
const QUIZ_COLORS = [
  '#ef4444', // red
  '#3b82f6', // blue
  '#22c55e', // green
  '#f97316', // orange
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#14b8a6', // teal
  '#eab308'  // yellow
];

/**
 * WorldMap class - renders interactive maps
 */
export class WorldMap {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.width = 700;
    this.height = 400;
    this.landPolygons = null;
    this.loaded = false;
    this.viewMode = 'world'; // world, austria, regional
  }

  async init() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d');
    await this.loadTopoJSON();
    this.loaded = true;
  }

  async loadTopoJSON() {
    try {
      const response = await fetch('world.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const topoData = await response.json();
      this.landPolygons = this.parseTopoJSON(topoData);
    } catch (error) {
      console.error('Failed to load world.json:', error);
    }
  }

  parseTopoJSON(topo) {
    const transform = topo.transform;
    const arcs = topo.arcs;
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
    const landGeometries = topo.objects.land.geometries;
    const polygons = [];
    for (const geom of landGeometries) {
      if (geom.type === 'Polygon') {
        const rings = geom.arcs.map(ring => this.decodeRing(ring, decodedArcs));
        polygons.push({ rings });
      } else if (geom.type === 'MultiPolygon') {
        for (const polygon of geom.arcs) {
          const rings = polygon.map(ring => this.decodeRing(ring, decodedArcs));
          polygons.push({ rings });
        }
      }
    }
    return polygons;
  }

  decodeRing(arcRefs, decodedArcs) {
    const coords = [];
    for (const arcRef of arcRefs) {
      const arcIndex = arcRef < 0 ? ~arcRef : arcRef;
      const arc = decodedArcs[arcIndex];
      if (!arc) continue;
      const arcCoords = arcRef < 0 ? [...arc].reverse() : arc;
      for (let i = (coords.length === 0 ? 0 : 1); i < arcCoords.length; i++) {
        coords.push(arcCoords[i]);
      }
    }
    return coords;
  }

  // Coordinate conversions for different view modes
  latLonToPixel(lat, lon, bounds = null) {
    if (bounds) {
      // Regional view with custom bounds
      const { minLat, maxLat, minLon, maxLon } = bounds;
      const x = ((lon - minLon) / (maxLon - minLon)) * this.width;
      const y = ((maxLat - lat) / (maxLat - minLat)) * this.height;
      return { x, y };
    }
    // World view
    const x = ((lon + 180) / 360) * this.width;
    const y = ((90 - lat) / 180) * this.height;
    return { x, y };
  }

  /**
   * Render for quiz - colors options and shows labels
   */
  renderQuiz(question, options) {
    if (!this.ctx) return this.canvas;
    const ctx = this.ctx;

    // Determine view mode based on question type
    const mode = question?.mode;
    const isAustriaMode = mode?.category === 'austria';
    const isNeighborMode = mode?.category === 'neighbors';

    let bounds = null;
    if (isAustriaMode) {
      // Austria-focused view
      bounds = { minLat: 46.0, maxLat: 49.5, minLon: 9.0, maxLon: 17.5 };
    } else if (isNeighborMode) {
      // Central Europe view
      bounds = { minLat: 42.0, maxLat: 55.0, minLon: 5.0, maxLon: 25.0 };
    }

    // Draw base map
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(0, 0, this.width, this.height);

    // Draw land
    if (this.landPolygons) {
      ctx.fillStyle = '#334155';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 0.5;

      for (const polygon of this.landPolygons) {
        for (const ring of polygon.rings) {
          if (ring.length < 3) continue;
          ctx.beginPath();
          let first = true;
          let prevX = null;

          for (const [lon, lat] of ring) {
            // Skip points outside bounds for regional views
            if (bounds) {
              if (lat < bounds.minLat - 5 || lat > bounds.maxLat + 5 ||
                  lon < bounds.minLon - 10 || lon > bounds.maxLon + 10) continue;
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
    }

    // Draw Austria states for Austria mode
    if (isAustriaMode) {
      this.drawAustriaStates(ctx, bounds, options);
    }
    // Draw neighbor countries for neighbor mode
    else if (isNeighborMode) {
      this.drawNeighborCountries(ctx, bounds, options);
    }
    // Draw world countries for world mode
    else {
      this.drawWorldCountries(ctx, bounds, options);
    }

    // Draw legend
    this.drawLegend(ctx, options);

    return this.canvas;
  }

  drawAustriaStates(ctx, bounds, options) {
    if (!options || options.length === 0) return;

    // Draw markers for each option
    options.forEach((opt, i) => {
      const prefix = opt.value;
      const state = AUSTRIA_STATES[prefix];
      if (!state) return;

      const color = QUIZ_COLORS[i % QUIZ_COLORS.length];
      const pixel = this.latLonToPixel(state.lat, state.lon, bounds);

      // Draw colored region marker
      this.drawColoredMarker(ctx, pixel.x, pixel.y, color, 25);

      // Draw prefix label
      this.drawLabel(ctx, pixel.x, pixel.y - 35, prefix, color);

      // Draw state name
      ctx.font = 'bold 10px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(state.name, pixel.x, pixel.y + 40);
    });

    // Draw Austria border highlight
    const austria = { lat: 47.5, lon: 14.5 };
    const austriaPixel = this.latLonToPixel(austria.lat, austria.lon, bounds);
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.ellipse(austriaPixel.x, austriaPixel.y, 120, 60, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  drawNeighborCountries(ctx, bounds, options) {
    if (!options || options.length === 0) return;

    // Draw Austria marker (home)
    const austria = WORLD_COUNTRIES['OE'];
    if (austria) {
      const pixel = this.latLonToPixel(austria.lat, austria.lon, bounds);
      this.drawColoredMarker(ctx, pixel.x, pixel.y, '#22c55e', 20);
      this.drawLabel(ctx, pixel.x, pixel.y - 30, 'OE', '#22c55e');
      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#22c55e';
      ctx.textAlign = 'center';
      ctx.fillText('🏠 Austria', pixel.x, pixel.y + 30);
    }

    // Draw each option
    options.forEach((opt, i) => {
      const prefix = opt.value.toUpperCase();
      const neighbor = AUSTRIA_NEIGHBORS[prefix] || WORLD_COUNTRIES[prefix];
      if (!neighbor) return;

      const color = QUIZ_COLORS[i % QUIZ_COLORS.length];
      const pixel = this.latLonToPixel(neighbor.lat, neighbor.lon, bounds);

      this.drawColoredMarker(ctx, pixel.x, pixel.y, color, 18);
      this.drawLabel(ctx, pixel.x, pixel.y - 28, prefix, color);

      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(neighbor.flag + ' ' + neighbor.nameEn, pixel.x, pixel.y + 28);
    });
  }

  drawWorldCountries(ctx, bounds, options) {
    if (!options || options.length === 0) return;

    // Draw Austria marker (home)
    const austria = WORLD_COUNTRIES['OE'];
    if (austria) {
      const pixel = this.latLonToPixel(austria.lat, austria.lon, bounds);
      this.drawColoredMarker(ctx, pixel.x, pixel.y, '#22c55e', 8);
    }

    // Draw each option
    options.forEach((opt, i) => {
      const prefix = opt.value.toUpperCase();
      const country = WORLD_COUNTRIES[prefix];
      if (!country) return;

      const color = QUIZ_COLORS[i % QUIZ_COLORS.length];
      const pixel = this.latLonToPixel(country.lat, country.lon, bounds);

      this.drawColoredMarker(ctx, pixel.x, pixel.y, color, 12);
      this.drawLabel(ctx, pixel.x, pixel.y - 20, prefix, color);
    });
  }

  drawColoredMarker(ctx, x, y, color, size) {
    // Glow
    ctx.beginPath();
    ctx.arc(x, y, size + 5, 0, Math.PI * 2);
    ctx.fillStyle = color + '40';
    ctx.fill();

    // Main circle
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Inner dot
    ctx.beginPath();
    ctx.arc(x, y, size / 3, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }

  drawLabel(ctx, x, y, text, bgColor) {
    ctx.font = 'bold 12px monospace';
    const metrics = ctx.measureText(text);
    const padding = 4;
    const width = metrics.width + padding * 2;
    const height = 16;

    // Background
    ctx.fillStyle = bgColor;
    ctx.beginPath();
    ctx.roundRect(x - width / 2, y - height / 2, width, height, 4);
    ctx.fill();

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
    const itemHeight = 22;
    const padding = 8;

    // Background
    const height = options.length * itemHeight + padding * 2;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.roundRect(legendX, legendY, 150, height, 6);
    ctx.fill();

    // Items
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    options.forEach((opt, i) => {
      const y = legendY + padding + i * itemHeight + itemHeight / 2;
      const color = QUIZ_COLORS[i % QUIZ_COLORS.length];

      // Color dot
      ctx.beginPath();
      ctx.arc(legendX + padding + 6, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Text
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`${opt.value}: ${opt.label}`, legendX + padding + 18, y);
    });
  }

  /**
   * Simple render for entity ID (backward compatibility)
   */
  render(entityId, mode) {
    if (!this.ctx) return this.canvas;
    const ctx = this.ctx;

    // Draw ocean
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(0, 0, this.width, this.height);

    // Draw land
    if (this.landPolygons) {
      ctx.fillStyle = '#334155';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 0.5;

      for (const polygon of this.landPolygons) {
        for (const ring of polygon.rings) {
          if (ring.length < 3) continue;
          ctx.beginPath();
          let first = true;
          let prevX = null;

          for (const [lon, lat] of ring) {
            const pixel = this.latLonToPixel(lat, lon);
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
    }

    // Draw Austria marker
    const austria = WORLD_COUNTRIES['OE'];
    if (austria && mode?.category !== 'austria') {
      const pixel = this.latLonToPixel(austria.lat, austria.lon);
      this.drawColoredMarker(ctx, pixel.x, pixel.y, '#22c55e', 6);
    }

    // Draw target marker if entityId provided
    const coords = this.getCoordinates(String(entityId || ''));
    if (coords) {
      const pixel = this.latLonToPixel(coords.lat, coords.lon);
      this.drawColoredMarker(ctx, pixel.x, pixel.y, '#3b82f6', 10);
    }

    return this.canvas;
  }

  getCoordinates(entityId) {
    if (!entityId) return null;
    const id = String(entityId).toUpperCase();

    // Check Austria states
    if (AUSTRIA_STATES[id]) return AUSTRIA_STATES[id];

    // Check neighbors
    if (AUSTRIA_NEIGHBORS[id]) return AUSTRIA_NEIGHBORS[id];

    // Check world countries
    if (WORLD_COUNTRIES[id]) return WORLD_COUNTRIES[id];

    // Try lowercase
    const lower = entityId.toLowerCase();
    for (const [key, val] of Object.entries(AUSTRIA_NEIGHBORS)) {
      if (key.toLowerCase() === lower) return val;
    }

    return null;
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

/**
 * Lookup Tables Component
 */
export function createLookupTables(container) {
  const html = `
    <div class="lookup-tables">
      <div class="lookup-section">
        <h3>Prefix → Country</h3>
        <input type="text" id="prefix-search" placeholder="Enter prefix (e.g., DL, OE, K)..." class="lookup-input">
        <div id="prefix-result" class="lookup-result"></div>
      </div>
      <div class="lookup-section">
        <h3>Country → Prefix</h3>
        <input type="text" id="country-search" placeholder="Enter country name..." class="lookup-input">
        <div id="country-result" class="lookup-result"></div>
      </div>
      <div class="lookup-examples">
        <h4>Examples (30+ countries)</h4>
        <div class="examples-grid">
          ${Object.entries(WORLD_COUNTRIES).map(([prefix, country]) => `
            <div class="example-item">
              <span class="example-flag">${country.flag}</span>
              <span class="example-prefix">${prefix}</span>
              <span class="example-country">${country.nameEn}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Setup search handlers
  const prefixInput = container.querySelector('#prefix-search');
  const countryInput = container.querySelector('#country-search');
  const prefixResult = container.querySelector('#prefix-result');
  const countryResult = container.querySelector('#country-result');

  prefixInput.addEventListener('input', (e) => {
    const prefix = e.target.value.toUpperCase().trim();
    if (!prefix) {
      prefixResult.innerHTML = '';
      return;
    }

    const country = WORLD_COUNTRIES[prefix] || AUSTRIA_NEIGHBORS[prefix] || AUSTRIA_STATES[prefix];
    if (country) {
      prefixResult.innerHTML = `
        <div class="result-found">
          <span class="result-flag">${country.flag || '🏳️'}</span>
          <span class="result-name">${country.nameEn || country.name}</span>
          ${country.continent ? `<span class="result-continent">(${country.continent})</span>` : ''}
        </div>
      `;
    } else {
      prefixResult.innerHTML = '<div class="result-not-found">Prefix not found</div>';
    }
  });

  countryInput.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase().trim();
    if (!search) {
      countryResult.innerHTML = '';
      return;
    }

    const matches = Object.entries(WORLD_COUNTRIES)
      .filter(([_, c]) => c.nameEn.toLowerCase().includes(search) || c.name.toLowerCase().includes(search))
      .slice(0, 5);

    if (matches.length > 0) {
      countryResult.innerHTML = matches.map(([prefix, country]) => `
        <div class="result-found">
          <span class="result-flag">${country.flag}</span>
          <span class="result-prefix">${prefix}</span>
          <span class="result-name">${country.nameEn}</span>
        </div>
      `).join('');
    } else {
      countryResult.innerHTML = '<div class="result-not-found">Country not found</div>';
    }
  });
}
