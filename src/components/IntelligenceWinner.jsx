import React from "react";
import imgTest from "../assets/imgs/HOWARD GARDNER.jpeg";
import closeModule from "../assets/icons/x.png";

function IntelligenceWinner({ visible, setVisible }) {
  if (!visible) {
    return null; // If not visible, return null or some fallback content
  }

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center fixed z-40 top-0 bg-black bg-opacity-50">
      <div className="max-w-2xl w-[90%] h-auto flex flex-col justify-center items-center bg-[#F7E7CD] rounded-lg p-5 gap-5 relative">
        <h3 className="text-3xl">Inteligencia</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia
          inventore animi nobis molestiae tempore unde quam sapiente quasi
          cumque eveniet optio labore autem illo, quod suscipit eum, tempora
          ratione ullam! Nesciunt illo sapiente, eius minus labore harum dolorum
          quo ea similique rem, neque unde quaerat eos? Sunt, placeat odio?
        </p>
        <img className="h-80" src={imgTest} alt="" />
        <img
          onClick={handleClose}
          className="h-6 absolute z-50 top-5 right-5 hover:cursor-pointer"
          src={closeModule}
          alt="close module"
        />
      </div>
    </section>
  );
}

export default IntelligenceWinner;
