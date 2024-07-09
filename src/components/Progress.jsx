import React from "react";
import { useProgress } from "../context/progressContext";

function Progress() {
  const { progress } = useProgress(); // Destructure progress from useProgress context

  return (
    <div className="overflow-hidden w-full">
      <div className="bg-gray-200 h-4 rounded-full">
        <div
          className="bg-green-500 h-full rounded-full transition-all"
          style={{ width: `${progress}%` }} // Set dynamic width based on progress
        ></div>
      </div>
      {/* <div className="text-xs text-center mt-1">
        Progreso: {Math.round(progress)}% 
      </div> */}
    </div>
  );
}

export default Progress;
