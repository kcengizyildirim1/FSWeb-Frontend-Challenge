/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const themeItem = "theme";
  const storedTheme = localStorage.getItem(themeItem);
  const [theme, setTheme] = useState(storedTheme === "dark");

  const toggleDarkMode = () => {
    const newTheme = !theme;
    localStorage.setItem(themeItem, newTheme ? "dark" : "light");
    setTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(themeItem);
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);

  useEffect(() => {
    const htmlTheme = document.querySelector("html");
    if (theme) {
      htmlTheme.classList.add("dark");
    } else {
      htmlTheme.classList.remove("dark");
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={{ theme, setTheme, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
