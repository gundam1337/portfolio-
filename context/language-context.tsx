"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
};
