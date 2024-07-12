import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import Question from "./Question";
import { useProgress } from "../context/progressContext";
import { useIntelligence } from "../context/intelligenceSelect";
import questionsData from "../data/questions.json";

import imgTest from "../assets/imgs/gatos-main.jpeg";

function Quizz() {
  const { incrementProgress, resetProgress, visible } = useProgress();
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

  useEffect(() => {
    console.log(countInt);
  }, [countInt]);

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
      {!visible && (
        <div className="h-auto w-screen flex flex-col justify-start items-center">
          <section className="mt-28 mb-10 overflow-x-hidden flex justify-start items-center gap-5 flex-col">
            <Progress />
            {questions.map((q) => (
              <Question
                key={q.id}
                question={q.question}
                typeIntelligence={q.intelligence}
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
      )}
      {visible && (
        <section className="mt-20 mb-10 h-screen w-screen flex justify-center items-center">
          <div className="max-w-2xl w-[90%] h-auto flex flex-col justify-center items-center bg-[#F7E7CD] rounded-lg p-5 gap-5 relative">
            <h3 className="text-4xl">Inteligencia</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              officia inventore animi nobis molestiae tempore unde quam sapiente
              quasi cumque eveniet optio labore autem illo, quod suscipit eum,
              tempora ratione ullam! Nesciunt illo sapiente, eius minus labore
              harum dolorum quo ea similique rem, neque unde quaerat eos? Sunt,
              placeat odio?
            </p>
            <img className="h-80" src={imgTest} alt="test" />
          </div>
        </section>
      )}
    </>
  );
}

export default Quizz;
