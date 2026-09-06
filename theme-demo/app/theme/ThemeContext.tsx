import { createContext, useContext, useState } from "react";
type ThemeName = "light" | "dark";
type ThemeContextType = {
  themeName: ThemeName;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const toggleTheme = () => {
    setThemeName((currentTheme) =>
      currentTheme === "light" ? "dark" : "light",
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
