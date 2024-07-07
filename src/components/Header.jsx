import multipleIntelligenceIcon from "../assets/icons/multiple-intelligence.png";

function Header() {
  return (
    <header className="z-10 h-24 w-full absolute top-0 left-0 bg-green-moss py-1">
      <nav className="flex h-full w-full justify-between items-center">
        <img
          className="h-full"
          src={multipleIntelligenceIcon}
          alt="multiple intelligence"
        />

        <ul className="h-full flex justify-center items-center text-white mr-16 gap-5">
          <li className="text-xl text-center capitalize hover:underline hover:cursor-pointer hover:text-neutral-200">
            Teoría de las inteligencias múltiples
          </li>
          <li className="text-xl text-center capitalize hover:underline hover:cursor-pointer hover:text-neutral-200">
            Test de las inteligencias múltiples
          </li>
          <li className="text-xl text-center capitalize hover:underline hover:cursor-pointer hover:text-neutral-200">
            Tipos de inteligencias
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
