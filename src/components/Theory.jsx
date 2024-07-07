import howardGardnerImage from "../assets/imgs/HOWARD GARDNER.jpeg";
import starIcon from "../assets/icons/start.png";

function Theory() {
  return (
    <>
      <section className="h-screen w-screen bg-[#F7E7CD] max-sm:h-auto">
        <div className="h-full w-full flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
          <article className="w-1/2 flex flex-col justify-evenly items-center text-[#685449] max-sm:w-full">
            <h3 className="font-spectral text-2xl text-center max-sm:my-5">
              LAS INTELIGENCIAS MÚLTIPLES
            </h3>
            <div className="h-[80%] min-w-[385px] w-[70%] border border-[#685449] py-2 px-8 flex flex-col justify-evenly items-center max-sm:px-2 max-sm:py-5  max-sm:min-w-[90%] max-sm:mb-5">
              <hgroup className="font-spectral text-center max-sm:mb-5">
                <h4 className="text-7xl text-balance font-bold max-sm:text-5xl">
                  HOWARD GARDNER
                </h4>
                <h5 className="text-3xl text-balance">
                  Psicólogo y pedagogo estadounidense.
                </h5>
              </hgroup>
              <div className="text-pretty text-xl max-sm:text-center">
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
            className="w-1/2 object-cover max-sm:w-[90%]"
            src={howardGardnerImage}
            alt="Howard Gardner Photo"
          />
        </div>
      </section>
      <section className="h-[70vh] w-screen bg-[#F7E7CD] flex justify-center items-center text-[#685449] max-sm:h-auto">
        <div className="h-[80%] w-[85%] border border-[#685449] flex justify-evenly items-center text-center gap-5 max-sm:flex-col max-sm:my-5 overflow-hidden max-sm:p-4 max-sm:py-6">
          <div className="w-[45%] max-sm:w-full">
            <strong className="font-spectral text-4xl max-sm:text-3xl">
              LA TEORÍA DE LAS INTELIGENCIAS MÚLTIPLES
            </strong>
          </div>
          <div className="w-[4%] flex flex-col justify-center items-center gap-5 max-sm:flex-row max-sm:gap-14  max-sm:h-12 max-sm:w-1/2">
            <hr className="border border-[#685449] h-28 max-sm:rotate-90" />
            <img src={starIcon} alt="star icon" />
            <hr className="border border-[#685449] h-28 max-sm:rotate-90" />
          </div>
          <article className="w-[45%] flex flex-col justify-center items-center max-sm:w-full">
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
