import Header from "./Header";
import mainCatsBackground from "../assets/imgs/gatos-main.jpeg";

function Home() {
  return (
    <main className="h-screen w-screen relative">
      <Header />
      <div className="h-screen w-screen flex justify-center items-center relative">
        <hgroup className="relative text-center text-orange-red font-extrabold">
          <h1 className="border-stoke uppercase text-5xl font-spectral">
            gatitos pensantes
          </h1>
          <h2 className="border-stoke text-3xl font-spectral">Pensemos como los gatos</h2>
        </hgroup>
        <img
          className="h-screen w-screen object-cover absolute top-0 -z-10"
          src={mainCatsBackground}
          alt="cats background"
        />
      </div>
    </main>
  );
}

export default Home;
