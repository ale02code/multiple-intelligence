import React, { useState, useEffect } from "react";

function Question({ question }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index === selectedButton ? null : index);
  };

  const buttonConfigs = [
    {
      size: "w-20 h-20",
      border: "border-green-500",
      baseBg: "bg-white",
      activeBg: "bg-green-600",
      points: 3,
    },
    {
      size: "w-16 h-16",
      border: "border-green-500",
      baseBg: "bg-white",
      activeBg: "bg-green-600",
      points: 2,
    },
    {
      size: "w-12 h-12",
      border: "border-green-500",
      baseBg: "bg-white",
      activeBg: "bg-green-600",
      points: 1,
    },
    {
      size: "w-9 h-9",
      border: "border-neutral-500",
      baseBg: "bg-white",
      activeBg: "bg-neutral-600",
      points: 0,
    },
    {
      size: "w-12 h-12",
      border: "border-red-500",
      baseBg: "bg-white",
      activeBg: "bg-red-600",
      points: -1,
    },
    {
      size: "w-16 h-16",
      border: "border-red-500",
      baseBg: "bg-white",
      activeBg: "bg-red-600",
      points: -2,
    },
    {
      size: "w-20 h-20",
      border: "border-red-500",
      baseBg: "bg-white",
      activeBg: "bg-red-600",
      points: -3,
    },
  ];

  return (
    <div className="max-w-lg bg-white rounded-xl shadow-md overflow-hidden w-full md:max-w-2xl text-[#685449] min-h-[185px]">
      <div className="md:flex">
        <div className="p-4 md:p-6 flex flex-col justify-center items-center w-full">
          <h2 className="text-xl font-semibold mb-4">{question}</h2>
          <div className="flex justify-center items-center gap-2">
            {buttonConfigs.map((config, index) => (
              <button
                key={index}
                className={`rounded-full border-2 transition-all duration-200 focus:outline-none ${
                  selectedButton === index ? config.activeBg : config.baseBg
                } ${config.size} ${config.border}`}
                onClick={() => handleButtonClick(index, buttonConfigs.points)}
              />
            ))}
          </div>
          <div className="flex justify-between w-full mt-1">
            <p>Estoy de acuerdo</p>
            <p>No estoy de acuerdo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
