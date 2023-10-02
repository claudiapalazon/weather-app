import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

export const ThemeSetter = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark");
  };

  return (
    <select className="themeSetter" value={theme} onChange={handleThemeChange}>
      {themeOptions.map((option, idx) => (
        <option value={option.value} key={idx}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

const themeOptions = [{ value: "light" }, { value: "dark" }];
