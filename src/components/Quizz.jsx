import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import Question from "./Question";
import { useProgress } from "../context/progressContext";
import questionsData from "../data/questions.json";
import IntelligenceWinner from "./IntelligenceWinner";
import { useIntelligence } from "../context/intelligenceSelect";

function Quizz() {
  const { incrementProgress, resetProgress, visible, setVisible } =
    useProgress();
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

  const handleNext = () => {
    incrementProgress();
    addQuestions();
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = answerIndex;
      return updatedAnswers;
    });
  };

  return (
    <>
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
              className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            >
              Seguir
            </button>
          </div>
        </section>
      </div>
      {<IntelligenceWinner visible={visible} setVisible={setVisible} />}
    </>
  );
}

export default Quizz;
