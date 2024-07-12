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
  const [visible, setVisible] = useState(false);

  const incrementProgress = () => {
    setProgress((prevProgress) =>
      prevProgress == 87.5 ? setVisible(true) : prevProgress + 12.5
    );
    scrollToTop();
  };

  const decrementProgress = () => {
    setProgress((prevProgress) =>
      prevProgress == 0 ? prevProgress : prevProgress - 12.5
    );
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
      value={{
        progress,
        incrementProgress,
        scrollToTop,
        setVisible,
        visible,
        decrementProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
