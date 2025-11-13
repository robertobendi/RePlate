/**
 * Utility functions for common operations
 */

/**
 * Combines multiple className strings, filtering out falsy values
 * @param {...string} classes - Class names to combine
 * @returns {string} Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Debounces a function call
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttles a function call
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Formats a date to a locale string
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} Formatted date string
 */
export function formatDate(date, locale = 'en-US') {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Checks if code is running in browser environment
 * @returns {boolean} True if in browser
 */
export function isBrowser() {
  return typeof window !== 'undefined';
}

