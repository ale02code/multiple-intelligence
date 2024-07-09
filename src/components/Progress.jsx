import React from "react";
import { useProgress } from "../context/progressContext";

function Progress() {
  const { progress } = useProgress();

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className="bg-blue-500 h-4 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default Progress;
