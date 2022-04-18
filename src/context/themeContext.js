import React from "react";
import { useState, createContext } from "react";

export const themeContext = createContext();

export const ThemeModeProvider = (props) => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <themeContext.Provider value={{ themeMode, toggleTheme }}>
      {props.children}
    </themeContext.Provider>
  );
};
