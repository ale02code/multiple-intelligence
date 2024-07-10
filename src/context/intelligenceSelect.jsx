import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const IntelligenceContext = createContext();

// Hook personalizado para consumir el contexto
export function useIntelligence() {
  return useContext(IntelligenceContext);
}

// Proveedor de contexto
export function IntelligenceProvider({ children }) {
  // Estado inicial de los puntos por tipo de inteligencia
  const [countInt, setCountInt] = useState({
    linguistica: 0,
    logica: 0,
    visual: 0,
    musical: 0,
    corporal: 0,
    interpersonal: 0,
    intrapersonal: 0,
    naturalista: 0,
  });

  return (
    <IntelligenceContext.Provider value={{ countInt, setCountInt }}>
      {children}
    </IntelligenceContext.Provider>
  );
}
