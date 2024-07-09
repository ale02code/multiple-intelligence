import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const ProgressContext = createContext();

// Hook personalizado para usar el contexto
export function useProgress() {
  return useContext(ProgressContext);
}

// Proveedor del contexto que contendrá el estado y las funciones relacionadas
export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(0);

  const incrementProgress = () => {
    setProgress((prevProgress) =>
      prevProgress < 100 ? prevProgress + 12.5 : prevProgress
    );
    scrollToTop();
  };

  const resetProgress = () => {
    setProgress(0);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ProgressContext.Provider
      value={{ progress, incrementProgress, resetProgress, scrollToTop }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
