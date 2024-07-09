import React, { useState } from "react";

function Question() {
  const [score, setScore] = useState(0);

  const handleScoreChange = (newScore) => {
    setScore(newScore);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4">
            ¿Te gusta leer libros, revistas o artículos?
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleScoreChange(1)}
              className={`rounded-full w-16 h-16 bg-green-500 ${
                score === 1 ? "ring-4 ring-green-500" : ""
              }`}
            />
            <button
              onClick={() => handleScoreChange(2)}
              className={`rounded-full w-12 h-12 bg-yellow-500 ${
                score === 2 ? "ring-4 ring-yellow-500" : ""
              }`}
            />
            <button
              onClick={() => handleScoreChange(3)}
              className={`rounded-full w-8 h-8 bg-gray-500 ${
                score === 3 ? "ring-4 ring-gray-500" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
