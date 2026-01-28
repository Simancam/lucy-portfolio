"use client";

import { createContext, useContext, useState } from "react";

interface LoaderContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | null>(null);

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider");
  }
  return context;
};

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
