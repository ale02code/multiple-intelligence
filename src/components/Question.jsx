import React, { useEffect } from "react";
import questionsData from "../data/questions.json";

function Question({ question }) {
  return (
    <div className="max-w-lg bg-white rounded-xl shadow-md overflow-hidden w-full md:max-w-2xl text-[#685449] min-h-[185px]">
      <div className="md:flex">
        <div className="p-4 md:p-6 flex flex-col justify-center items-center w-full">
          <h2 className="text-xl font-semibold mb-4">{question}</h2>
          <div className="flex justify-center items-center gap-2">
            <button
              className={
                "rounded-full w-20 h-20 border-2 border-green-500 hover:bg-green-600 transition-all duration-200"
              }
            />
            <button
              className={
                "rounded-full w-16 h-16 border-2 border-green-500 hover:bg-green-600 transition-all duration-200"
              }
            />
            <button
              className={
                "rounded-full w-12 h-12 border-2 border-green-500 hover:bg-green-600 transition-all duration-200"
              }
            />
            <button
              className={
                "rounded-full w-9 h-9 border-2 border-neutral-500 hover:bg-neutral-600 transition-all duration-200"
              }
            />
            <button
              className={
                "rounded-full w-12 h-12 border-2 border-red-500 hover:bg-red-600 transition-all duration-200"
              }
            />
            <button
              className={
                "rounded-full w-16 h-16 border-2 border-red-500 hover:bg-red-600 transition-all duration-200"
              }
            />
            <button
              className={
                "rounded-full w-20 h-20 border-2 border-red-500 hover:bg-red-600 transition-all duration-200"
              }
            />
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
