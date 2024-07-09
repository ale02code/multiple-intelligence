import React from "react";
import { useProgress } from "../context/progressContext";

function Controls() {
  const { incrementProgress, resetProgress } = useProgress();

  return (
    <div className="flex justify-between items-center w-full">
      <button
        onClick={resetProgress}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md border-2 border-blue-700 bg-opacity-50 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Volver
      </button>
      <button
        onClick={incrementProgress}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md border-2 border-blue-700 bg-opacity-50 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Seguir
      </button>
    </div>
  );
}

export default Controls;
