import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Quizz from "./components/Quizz";
import { ProgressProvider } from "./context/progressContext"; // Importa el proveedor de contexto de progreso
import { IntelligenceProvider } from "./context/intelligenceSelect"; // Importa el proveedor de contexto de inteligencia

function App() {
  return (
    <ProgressProvider>
      {" "}
      {/* Proveedor de contexto de progreso */}
      <IntelligenceProvider>
        {" "}
        {/* Proveedor de contexto de inteligencia */}
        <Router>
          {" "}
          {/* Envolvemos la aplicación con BrowserRouter */}
          <div className="font-lato w-screen overflow-hidden h-auto bg-[#F7E7CD]">
            <Header />{" "}
            {/* Componente de encabezado, visible en todas las rutas */}
            <Routes>
              {" "}
              {/* Definición de rutas */}
              <Route path="/" element={<Home />} />{" "}
              {/* Ruta para la página de inicio */}
              <Route path="/quizz" element={<Quizz />} />{" "}
              {/* Ruta para la página de quizz */}
            </Routes>
          </div>
        </Router>
      </IntelligenceProvider>
    </ProgressProvider>
  );
}

export default App;
