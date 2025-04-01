import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import en from "./US-EN/common.json";
import zh from "./ZH-TW/common.json";

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
