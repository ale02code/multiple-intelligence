import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import Question from "./Question";
import { useProgress } from "../context/progressContext";
import questionsData from "../data/questions.json";

function Quizz() {
  const { incrementProgress, resetProgress } = useProgress();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));

  useEffect(() => {
    setQuestions(questionsData.questions.slice(0, 10)); // Cargar las primeras 10 preguntas al inicio
  }, []);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    // Verificar si todas las preguntas tienen una respuesta seleccionada
    if (selectedAnswers.every((answer) => answer !== null)) {
      incrementProgress();
      setQuestions(
        questionsData.questions.slice(
          selectedAnswers.length,
          selectedAnswers.length + 10
        )
      ); // Cargar las siguientes 10 preguntas
      setSelectedAnswers(Array(10).fill(null)); // Reiniciar respuestas seleccionadas para las nuevas preguntas
    } else {
      alert(
        "Debes seleccionar una respuesta para cada pregunta antes de continuar."
      );
    }
  };

  return (
    <div className="h-auto w-screen flex flex-col justify-start items-center">
      <section className="mt-28 mb-10 overflow-x-hidden flex justify-start items-center gap-5 flex-col">
        <Progress />
        {questions.map((q, index) => (
          <Question
            key={q.id}
            question={q.question}
            onAnswerSelect={(answerIndex) =>
              handleAnswerSelect(index, answerIndex)
            }
            selectedAnswer={selectedAnswers[index]}
          />
        ))}
        <div className="flex justify-between items-center w-full">
          <button
            onClick={resetProgress}
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
  );
}

export default Quizz;
