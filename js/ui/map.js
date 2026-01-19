/**
 * Map Component
 * Simple world map with country highlighting
 * Based on firstcontact approach
 */

/**
 * Country center coordinates (lat, lon)
 */
const COUNTRY_COORDS = {
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
  // Neighbor IDs (lowercase)
  'de': { lat: 51.2, lon: 10.5 },
  'ok': { lat: 49.8, lon: 15.5 },
  'om': { lat: 48.7, lon: 19.7 },
  'ha': { lat: 47.2, lon: 19.5 },
  's5': { lat: 46.1, lon: 14.9 },
  'i': { lat: 42.5, lon: 12.6 },
  'hb': { lat: 46.8, lon: 8.2 },
  'hb0': { lat: 47.1, lon: 9.5 },
  // Austrian states
  'OE1': { lat: 48.21, lon: 16.37 },
  'OE2': { lat: 47.80, lon: 13.04 },
  'OE3': { lat: 48.20, lon: 15.63 },
  'OE4': { lat: 47.85, lon: 16.53 },
  'OE5': { lat: 48.31, lon: 14.29 },
  'OE6': { lat: 47.07, lon: 15.44 },
  'OE7': { lat: 47.26, lon: 11.39 },
  'OE8': { lat: 46.62, lon: 14.31 },
  'OE9': { lat: 47.25, lon: 9.90 }
};

/**
 * WorldMap class
 */
export class WorldMap {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.width = 600;
    this.height = 300;
    this.landPolygons = null;
    this.loaded = false;
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
      console.log('Map loaded:', this.landPolygons.length, 'polygons');
    } catch (error) {
      console.error('Failed to load world.json:', error);
    }
  }

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

    // Extract land geometries
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

      // Skip first point of subsequent arcs to avoid duplicates
      for (let i = (coords.length === 0 ? 0 : 1); i < arcCoords.length; i++) {
        coords.push(arcCoords[i]);
      }
    }
    return coords;
  }

  latLonToPixel(lat, lon) {
    const x = ((lon + 180) / 360) * this.width;
    const y = ((90 - lat) / 180) * this.height;
    return { x, y };
  }

  render(entityId, mode) {
    if (!this.ctx) return this.canvas;

    const ctx = this.ctx;

    // Draw ocean
    ctx.fillStyle = '#1a365d';
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
      }
    }

    // Draw Austria marker (green)
    if (mode?.category !== 'austria') {
      const austria = COUNTRY_COORDS['austria'];
      if (austria) {
        this.drawMarker(austria.lat, austria.lon, '#22c55e', 'rgba(34, 197, 94, 0.4)', 6);
      }
    }

    // Draw target marker (blue)
    const coords = this.getCoordinates(entityId);
    if (coords) {
      this.drawMarker(coords.lat, coords.lon, '#3b82f6', 'rgba(59, 130, 246, 0.4)', 10);
    }

    return this.canvas;
  }

  getCoordinates(entityId) {
    if (!entityId) return null;

    // Convert to string if needed
    const id = String(entityId);

    // Direct lookup
    if (COUNTRY_COORDS[id]) return COUNTRY_COORDS[id];

    // Try lowercase
    const lower = id.toLowerCase();
    if (COUNTRY_COORDS[lower]) return COUNTRY_COORDS[lower];

    return null;
  }

  drawMarker(lat, lon, color, glowColor, size) {
    const { x, y } = this.latLonToPixel(lat, lon);
    const ctx = this.ctx;

    // Glow
    ctx.beginPath();
    ctx.arc(x, y, size + 8, 0, Math.PI * 2);
    ctx.fillStyle = glowColor;
    ctx.fill();

    // Circle
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

  renderTo(container, entityId, mode) {
    this.render(entityId, mode);
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
