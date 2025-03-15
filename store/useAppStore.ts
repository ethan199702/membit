import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Theme = "light" | "dark";
type Language = "en" | "zh";

interface IAppState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useAppStore = create<IAppState>()(
  devtools(
    persist(
      (set) => ({
        theme: "dark",
        language: "en",
        setTheme: (theme: Theme) => {
          set({ theme });
        },
        setLanguage: (language: Language) => {
          set({ language });
        },
      }),
      {
        name: "app-storage",
      }
    )
  )
);
