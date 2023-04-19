import React, { useContext } from "react";
import { MODE_LIGHT, ThemeContext } from "./ThemeContext";
import SwitchButton from "./presentational/SwitchButton";

function ThemeToggle() {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const boolValue = mode === MODE_LIGHT;
  const themeLabel = mode === MODE_LIGHT ? "Theme: Light" : "Theme: Dark";

  return (
    <SwitchButton
      className="theme-toggle"
      value={boolValue}
      handleClick={toggleTheme}
      label={themeLabel}
    />
  );
}

export default ThemeToggle;
