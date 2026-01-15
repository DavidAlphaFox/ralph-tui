/**
 * ABOUTME: Factory functions for creating TrackerPluginConfig test objects.
 * Provides type-safe builders with sensible defaults.
 */

import type { TrackerPluginConfig } from '../../src/plugins/trackers/types.js';

/**
 * Default values for TrackerPluginConfig
 */
export const DEFAULT_TRACKER_CONFIG: TrackerPluginConfig = {
  name: 'test-tracker',
  plugin: 'json',
  default: true,
  options: {},
};

/**
 * Create a TrackerPluginConfig with optional overrides
 */
export function createTrackerConfig(
  overrides: Partial<TrackerPluginConfig> = {}
): TrackerPluginConfig {
  return {
    ...DEFAULT_TRACKER_CONFIG,
    ...overrides,
    options: {
      ...DEFAULT_TRACKER_CONFIG.options,
      ...overrides.options,
    },
  };
}

/**
 * Create a JSON tracker config
 */
export function createJsonTrackerConfig(
  prdPath = './prd.json',
  overrides: Partial<Omit<TrackerPluginConfig, 'plugin'>> = {}
): TrackerPluginConfig {
  return createTrackerConfig({
    name: 'json',
    plugin: 'json',
    options: {
      prdPath,
      ...overrides.options,
    },
    ...overrides,
  });
}

/**
 * Create a Beads tracker config
 */
export function createBeadsTrackerConfig(
  epicId = 'test-epic',
  overrides: Partial<Omit<TrackerPluginConfig, 'plugin'>> = {}
): TrackerPluginConfig {
  return createTrackerConfig({
    name: 'beads',
    plugin: 'beads',
    options: {
      epicId,
      ...overrides.options,
    },
    ...overrides,
  });
}

/**
 * Create a Beads-BV tracker config
 */
export function createBeadsBvTrackerConfig(
  epicId = 'test-epic',
  overrides: Partial<Omit<TrackerPluginConfig, 'plugin'>> = {}
): TrackerPluginConfig {
  return createTrackerConfig({
    name: 'beads-bv',
    plugin: 'beads-bv',
    options: {
      epicId,
      ...overrides.options,
    },
    ...overrides,
  });
}
