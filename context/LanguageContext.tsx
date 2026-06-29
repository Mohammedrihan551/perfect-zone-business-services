"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const languages = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    flag: "🇦🇪",
    dir: "rtl",
  },
];

type LanguageContextType = {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  currentLanguage: (typeof languages)[0];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const currentLanguage =
    languages.find((lang) => lang.code === selectedLanguage) || languages[0];

  useEffect(() => {
    document.documentElement.dir = currentLanguage.dir;
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        currentLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
