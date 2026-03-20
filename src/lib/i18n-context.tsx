"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translation } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  // Opcional: Cargar preferencia del localStorage al montar
  useEffect(() => {
    const saved = localStorage.getItem("preferred-language") as Language;
    if (saved && (saved === "es" || saved === "en")) {
      setLanguage(saved);
    } else if (typeof navigator !== "undefined") {
      // Intenta detectar el idioma del navegador
      const navLang = navigator.language.split("-")[0];
      if (navLang === "en") setLanguage("en");
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred-language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
