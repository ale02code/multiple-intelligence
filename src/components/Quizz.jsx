import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import Question from "./Question";
import Controls from "./Controls";
import { ProgressProvider } from "../context/progressContext";
import questionsData from "../data/questions.json";

function Quizz() {
  // Estado para almacenar las preguntas
  const [questions, setQuestions] = useState([]);

  // Efecto para cargar las preguntas desde el archivo JSON
  useEffect(() => {
    // Simulación de carga de datos (puedes ajustar esto según cómo cargues realmente el archivo JSON)
    const fetchData = async () => {
      try {
        // Aquí cargarías realmente el archivo JSON o utilizarías fetch si está en un servidor remoto
        // Por simplicidad, asumimos que questionsData es un objeto con una propiedad 'questions'
        setQuestions(questionsData.questions);
      } catch (error) {
        console.error("Error al cargar preguntas:", error);
        // Manejo de errores si es necesario
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto w-screen flex flex-col justify-start items-center">
        <section className="mt-28 mb-10 overflow-x-hidden flex justify-start items-center gap-5 flex-col">
        <ProgressProvider>
          <Progress />  
           {questions.map((q) => (
            <Question key={q.id} question={q.question} />
          ))}
          <Controls />
        </ProgressProvider>
      </section>
    </div>
  );
}

export default Quizz;
