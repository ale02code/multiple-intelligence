import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Quizz from "./components/Quizz";

function App() {
  return (
    <Router>
      <div className="font-lato w-screen overflow-hidden h-auto bg-[#F7E7CD]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizz" element={<Quizz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
