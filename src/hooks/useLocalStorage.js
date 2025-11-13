import { useState, useEffect, useCallback } from 'react';
import { ERRORS } from '@lib/constants';

/**
 * Custom hook for managing localStorage with React state
 * @param {string} key - The localStorage key
 * @param {*} initialValue - The initial value if key doesn't exist
 * @returns {[*, function]} - [storedValue, setValue]
 */
function useLocalStorage(key, initialValue) {
  // Create a stable readValue function using useCallback
  const readValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`${ERRORS.STORAGE_READ} "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState(readValue);

  // Wrap setValue to avoid dependency issues
  const setValue = useCallback((value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`${ERRORS.STORAGE_WRITE} "${key}":`, error);
    }
  }, [key, storedValue]);

  // Listen for storage changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.warn(`${ERRORS.STORAGE_READ} "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage; 