import React, { createContext, useContext, useState } from "react";

const IntelligenceContext = createContext();

export function useIntelligence() {
  return useContext(IntelligenceContext);
}

export function ProgressProvider({ children }) {
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
