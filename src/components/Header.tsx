// import logo from "/src/assets/Logo.png";
import dog from "/src/assets/dog-solid.svg";
// import about from "/src/assets/About.png";
// import stuhl from "/src/assets/Stuhl.png";
// import schuesseln from "/src/assets/Schuesseln.png";
// import tisch from "/src/assets/Tisch.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <header className=" ">
        <div className="h-20 flex items-center abstand justify-between ">
          <div className="flex items-center justify-center gap-4">
            <img src={dog} alt="logo" className="w-10" />
            <h2 className="text-3xl font-bold text-[#313235]">
              White Harmony´s
            </h2>
          </div>
          <nav className="flex gap-12 text-[#8D8D8D] ">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/categories"}>Categories</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
