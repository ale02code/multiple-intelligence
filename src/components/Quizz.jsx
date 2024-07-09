import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import Question from "./Question";
import Controls from "./Controls";
import { ProgressProvider } from "../context/progressContext";
import questionsData from "../data/questions.json";

function Quizz() {
  const { questions } = questionsData;
  const initialQuestions = questions.slice(0, 8);

  return (
    <div className="h-auto w-screen flex flex-col justify-start items-center">
      <section className="mt-28 mb-10 overflow-x-hidden flex justify-start items-center gap-5 flex-col">
        <ProgressProvider>
          <Progress />
          {initialQuestions.map((q) => (
            <Question key={q.id} question={q.question} />
          ))}
          <Controls />
        </ProgressProvider>
      </section>
    </div>
  );
}

export default Quizz;
