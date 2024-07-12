import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Quizz from "./components/Quizz";
import { ProgressProvider } from "./context/progressContext"; // Importa el proveedor de contexto de progreso
import { IntelligenceProvider } from "./context/intelligenceSelect"; // Importa el proveedor de contexto de inteligencia
import IntelligencesView from "./components/IntelligencesView";

function App() {
  return (
    <ProgressProvider>
      <IntelligenceProvider>
        <Router>
          <div className="font-lato w-screen overflow-hidden h-auto bg-[#F7E7CD]">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quizz" element={<Quizz />} />
              <Route
                path="/intelligences"
                element={<IntelligencesView />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </IntelligenceProvider>
    </ProgressProvider>
  );
}

export default App;
