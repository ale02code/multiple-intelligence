import howardGardnerImage from "../assets/imgs/HOWARD GARDNER.jpeg";
import starIcon from "../assets/icons/start.png";

function Theory() {
  return (
    <>
      <section className="h-screen w-screen bg-[#F7E7CD]">
        <div className="h-full w-full flex">
          <article className="w-1/2 flex flex-col justify-evenly items-center text-[#685449]">
            <h3 className="font-spectral text-2xl text-center">
              LAS INTELIGENCIAS MÚLTIPLES
            </h3>
            <div className="h-[80%] min-w-[385px] w-[70%] border border-[#685449] py-2 px-8 flex flex-col justify-evenly items-center">
              <hgroup className="font-spectral text-center">
                <h4 className="text-7xl text-balance font-bold">
                  HOWARD GARDNER
                </h4>
                <h5 className="text-3xl text-balance">
                  Psicólogo y pedagogo estadounidense.
                </h5>
              </hgroup>
              <div className="text-pretty text-xl">
                <p>Nació en Scraton, Pensilvania, en 1943.</p>
                <br />
                <p>
                  Estudió en la Universidad de Harvard, por la que se doctoró en
                  psicología social en 1971
                </p>
              </div>
            </div>
          </article>
          <img
            className="w-1/2 object-cover grow-0"
            src={howardGardnerImage}
            alt="Howard Gardner Photo"
          />
        </div>
      </section>
      <section className="h-[70vh] w-screen bg-[#F7E7CD] flex justify-center items-center text-[#685449]">
        <div className="h-[80%] w-[85%] border border-[#685449] flex justify-evenly items-center text-center gap-5">
          <div className="w-[45%]">
            <strong className="font-spectral text-4xl">
              LA TEORÍA DE LAS INTELIGENCIAS MÚLTIPLES
            </strong>
          </div>
          <div className="w-[4%] flex flex-col justify-center items-center gap-5">
            <hr className="border border-[#685449] h-28" />
            <img src={starIcon} alt="star icon" />
            <hr className="border border-[#685449] h-28" />
          </div>
          <article className="w-[45%] flex flex-col justify-center items-center">
            <h6 className="font-spectral text-3xl">¿SOLO SOMOS LISTOS?</h6>
            <p className="text-pretty text-xl w-[90%]">
              La teoría de Gardner propuso que la mente humana tiene la
              capacidad de desarrollar diferentes inteligencias, cada una con
              diferentes habilidades, no solo basadas en ser ágiles mentalmente,
              sino para ayudarnos a afrontar los desafíos que nos muestra la
              vida.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Theory;
