import React, { createContext, useContext, useState } from "react";

const IntelligenceContext = createContext();

export function useIntelligence() {
  return useContext(IntelligenceContext);
}

export function ProgressProvider({ children }) {
  const [winner, setWinner] = useState("");

  return (
    <IntelligenceContext.Provider value={{ winner, setWinner }}>
      {children}
    </IntelligenceContext.Provider>
  );
}
