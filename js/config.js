/**
 * Runtime Configuration Loader
 * Loads config.json at runtime for parent site branding
 */

let config = null;
let configPromise = null;

/**
 * Load configuration from config.json
 * @returns {Promise<Object>} Configuration object
 */
export async function loadConfig() {
  if (config) return config;

  if (configPromise) return configPromise;

  configPromise = (async () => {
    try {
      const response = await fetch('config.json');
      if (!response.ok) {
        console.warn('Config file not found, using defaults');
        return getDefaultConfig();
      }
      config = await response.json();
      return config;
    } catch (error) {
      console.warn('Failed to load config:', error);
      return getDefaultConfig();
    }
  })();

  return configPromise;
}

/**
 * Get default configuration
 */
function getDefaultConfig() {
  return {
    parentSiteUrl: '',
    parentSiteLogo: '',
    parentSiteName: ''
  };
}

/**
 * Get configuration synchronously (must call loadConfig first)
 */
export function getConfig() {
  return config || getDefaultConfig();
}
