import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Quizz from "./components/Quizz";
import { ProgressProvider } from "./context/progressContext";

function App() {
  return (
    <ProgressProvider>
      <Router>
        <div className="font-lato w-screen overflow-hidden h-auto bg-[#F7E7CD]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizz" element={<Quizz />} />
          </Routes>
        </div>
      </Router>
    </ProgressProvider>
  );
}

export default App;
