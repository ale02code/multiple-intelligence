import React from "react";
import { useProgress } from "../context/progressContext";

function Progress() {
  const { progress } = useProgress();

  return (
    <div className="overflow-hidden w-full max-sm:w-[95%]">
      <div className="bg-gray-200 h-4 rounded-full">
        <div
          className="bg-green-500 h-full rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* <div className="text-xs text-center mt-1">Progreso: {progress}%</div> */}
    </div>
  );
}

export default Progress;
