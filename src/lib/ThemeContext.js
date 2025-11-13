import React, { createContext, useContext, useEffect } from 'react';
import { themes } from './theme';
import useLocalStorage from '@hooks/useLocalStorage';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    themeClasses: themes[theme],
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`${themes[theme].background} ${themes[theme].text} min-h-screen transition-colors duration-200`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 