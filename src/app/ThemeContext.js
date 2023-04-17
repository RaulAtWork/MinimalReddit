import React, { useEffect, useState } from "react";

const ROUTE_LIGHT = "./mode_light.css"
const ROUTE_DARK =  "./mode_dark.css"

export const MODE_LIGHT = "light";
export const MODE_DARK = "dark";


export const ThemeContext = React.createContext({
  mode: MODE_LIGHT,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(MODE_LIGHT);

    useEffect(() => {
       const route = mode === MODE_LIGHT ? ROUTE_LIGHT : ROUTE_DARK
       
        const themeElement = document.getElementById("themeLink")
        themeElement.href = route

    }, [mode])

  const toggleTheme = () => {
    setMode(mode === MODE_LIGHT ? MODE_DARK : MODE_LIGHT);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
