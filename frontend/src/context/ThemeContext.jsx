import React, { createContext, useContext, useEffect, useState } from "react";

export const THEMES = [
  {
    id: "maroon",
    label: "Maroon",
    hex: "#7a1d2c",
    description: "Default · NLS classic",
  },
  {
    id: "navy",
    label: "Navy Blue",
    hex: "#1e3a8a",
    description: "Cool, formal academic tone",
  },
  {
    id: "green",
    label: "Forest Green",
    hex: "#065f46",
    description: "Calm, sustainability-forward",
  },
  {
    id: "purple",
    label: "Royal Purple",
    hex: "#4c1d95",
    description: "Regal, scholarly heritage feel",
  },
  {
    id: "slate",
    label: "Slate Gray",
    hex: "#334155",
    description: "Minimal, modern professional",
  },
];

const STORAGE_KEY = "vdit_theme";
const DEFAULT_THEME = "maroon";

const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && THEMES.some((t) => t.id === saved)) return saved;
    } catch {
      /* ignore */
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === DEFAULT_THEME) {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", theme);
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const setTheme = (id) => {
    if (THEMES.some((t) => t.id === id)) setThemeState(id);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
