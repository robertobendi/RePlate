/**
 * Application-wide constants
 * Centralized location for magic numbers, URLs, and configuration values
 */

// UI Constants
export const UI = {
  SCROLL_THRESHOLD: 20,
  NAVBAR_HEIGHT: 64,
  ANIMATION_DELAY_MS: 80,
  LOADING_SPINNER_SIZE: 48,
  MAX_FUNCTION_LINES: 50,
  MAX_FILE_LINES: 300,
};

// Animation Durations (in ms)
export const ANIMATION = {
  FAST: 150,
  DEFAULT: 300,
  SLOW: 500,
};

// Breakpoints (matches Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};

// Error Messages
export const ERRORS = {
  PAGE_LOAD: 'The page couldn\'t be loaded properly.',
  STORAGE_READ: 'Error reading from local storage',
  STORAGE_WRITE: 'Error writing to local storage',
};

// External Links
export const LINKS = {
  GITHUB_REPO: 'https://github.com/robertobendi/RePlate',
};

