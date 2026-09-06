// themeStore.ts

import { create } from "zustand";

type ZThemeName = "light" | "dark";

type ZThemeStore = {
  themeName: ZThemeName;
  toggleTheme: () => void;
};

export const useThemeStore = create<ZThemeStore>((set) => ({
  themeName: "light",

  toggleTheme: () => {
    set((state) => ({
      themeName: state.themeName === "light" ? "dark" : "light",
    }));
  },
}));

{
  /** This file is our Global state container
   *  And now we used it into our screen directly
   */
}
