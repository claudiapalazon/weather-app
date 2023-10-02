import React, { useState } from "react";
import { ThemeContext } from "../contexts/theme-context";

interface IThemeProvider {
  children: JSX.Element | JSX.Element[];
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  // Get browser’s default theme - localStorage Theme
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
