import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import moonIcon from "../assets/icons/moon.svg";
import sunIcon from "../assets/icons/sun.svg";

export const ThemeSetter = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="themeSetter">
      {theme === "light" ? (
        <button
          className="buttonSetter"
          onClick={() => {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
          }}
        >
          <img src={moonIcon} alt="" />
        </button>
      ) : (
        <button
          className="buttonSetter"
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }}
        >
          <img src={sunIcon} alt="" />
        </button>
      )}
    </div>
  );
};
