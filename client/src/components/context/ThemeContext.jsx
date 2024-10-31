/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode enabled by default

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, [isDarkMode]); // Only run once on mount to apply initial theme

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
