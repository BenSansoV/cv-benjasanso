// src/context/LanguageContext.jsx
import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("lang") || "es");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  // Soporta 2 formatos:
  // 1) translations = { es: {...}, en: {...} }
  // 2) translations = { navbar: {...}, hero: {...} }  (plano)
  const dict = useMemo(() => {
    return translations?.[language] ? translations[language] : translations;
  }, [language]);

  // t(section) -> devuelve el bloque (objeto)
  // t(section, key) -> devuelve el valor
  // y permite defaultValue para evitar "" cuando esperas arrays/objetos
  const t = (section, key, defaultValue = "") => {
    if (!dict) return defaultValue;

    if (typeof key === "undefined") {
      return dict?.[section] ?? defaultValue;
    }

    const val = dict?.[section]?.[key];
    return typeof val === "undefined" ? defaultValue : val;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
