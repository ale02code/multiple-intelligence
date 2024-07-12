import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import Question from "./Question";
import { useProgress } from "../context/progressContext";
import { useIntelligence } from "../context/intelligenceSelect";
import questionsData from "../data/questions.json";
import intelligencesData from "../data/intelligences.json";

import linguisticaIMG from "../assets/intelligences/linguistica.jpg";
import logicaIMG from "../assets/intelligences/logico.jpg";
import naturalistaIMG from "../assets/intelligences/naturalista.jpeg";
import visualIMG from "../assets/intelligences/visual.jpg";
import musicalIMG from "../assets/intelligences/musical.jpg";
import intrapersonalIMG from "../assets/intelligences/intrapersonal.jpeg";
import interpersonalIMG from "../assets/intelligences/interpersonal.jpeg";
import corporalIMG from "../assets/intelligences/corporal.jpg";

import imgTest from "../assets/imgs/gatos-main.jpeg";

function Quizz() {
  const { incrementProgress, decrementProgress, visible } = useProgress();
  const { countInt, setCountInt } = useIntelligence();

  const [questions, setQuestions] = useState([]);
  const [questionRange, setQuestionRange] = useState({ first: 0, last: 10 });
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));

  useEffect(() => {
    setQuestions(
      questionsData.questions.slice(questionRange.first, questionRange.last)
    );
  }, [questionRange]);

  const addQuestions = () => {
    setQuestionRange((prevRange) => ({
      first: prevRange.last,
      last: prevRange.last + 10,
    }));
    setSelectedAnswers(Array(10).fill(null));
  };

  const lessQuestions = () => {
    setQuestionRange((prevRange) => {
      if (prevRange.first >= 10) {
        return {
          first: prevRange.first - 10,
          last: prevRange.last - 10,
        };
      } else {
        return prevRange;
      }
    });
    setSelectedAnswers(Array(10).fill(null));
  };

  useEffect(() => {
    console.log(countInt);
  }, [countInt]);

  const handleNext = () => {
    incrementProgress();
    addQuestions();
  };

  const handlePrevious = () => {
    decrementProgress();
    lessQuestions();
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = answerIndex;
      return updatedAnswers;
    });
  };

  const getMaxIntelligence = () => {
    const entries = Object.entries(countInt);
    let maxIntelligence = entries[0][0];
    let maxValue = entries[0][1];

    entries.forEach(([key, value]) => {
      if (value > maxValue) {
        maxIntelligence = key;
        maxValue = value;
      }
    });

    return intelligencesData.intelligences.find(
      (intelligence) => intelligence.name === maxIntelligence
    );
  };

  const maxIntelligence = getMaxIntelligence();

  const getImageForIntelligence = (intelligenceName) => {
    const imageMap = {
      linguistica: linguisticaIMG,
      logica: logicaIMG,
      visual: visualIMG,
      musical: musicalIMG,
      corporal: corporalIMG,
      interpersonal: interpersonalIMG,
      intrapersonal: intrapersonalIMG,
      naturalista: naturalistaIMG,
    };

    // Obtener la imagen correspondiente o usar la imagen por defecto
    const selectedImage = imageMap[intelligenceName] || imgTest;

    // Si la imagen seleccionada es una cadena vacía o nula, devolver la imagen por defecto
    return selectedImage || imgTest;
  };

  return (
    <>
      {!visible && (
        <div className="h-auto w-screen flex flex-col justify-start items-center">
          <section className="mt-32 mb-10 overflow-x-hidden flex justify-start items-center gap-5 flex-col">
            <Progress />
            {questions.map((q) => (
              <Question
                key={q.id}
                question={q.question}
                typeIntelligence={q.intelligence}
                onSelectAnswer={handleAnswerSelect}
              />
            ))}
            <div className="flex justify-between items-center w-full max-sm:max-w-[95%]">
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Volver
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Seguir
              </button>
            </div>
          </section>
        </div>
      )}
      {visible && (
        <section className="mt-28 mb-10 h-screen w-screen flex justify-center items-center">
          <div className="max-w-2xl w-[90%] h-auto flex flex-col justify-center items-center bg-[#F7E7CD] rounded-lg p-5 gap-5 relative">
            <h3 className="text-4xl font-bold uppercase">
              {maxIntelligence.name}
            </h3>
            <p className="text-lg text-justify">{maxIntelligence.definicion}</p>
            <p className="text-lg text-justify">{maxIntelligence.high_level}</p>
            <img
              className="h-80 max-sm:h-auto object-cover"
              src={getImageForIntelligence(maxIntelligence.name)}
              alt="test-img"
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Quizz;
