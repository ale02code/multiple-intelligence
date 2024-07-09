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
    setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 12.5 : prevProgress));
  };

  const resetProgress = () => {
    setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 12.5 : 0));
  };

  return (
    <ProgressContext.Provider value={{ progress, incrementProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}
