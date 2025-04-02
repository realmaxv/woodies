import logo from "/src/assets/Logo.png";
// import home from "/src/assets/Home.png";
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
          <img src={logo} alt="logo" />
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
