import footer from "/src/assets/Footer.png";
import logo from "/src/assets/Logo.png";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className=" bg-[#F1F1F1] abstand  pt-18">
        <div className="flex items-start justify-center ">
          <div className="w-[90%] border-t-1 pt-8 text-[#8D8D8D] flex flex-col gap-4">
            <div>
              <img className="object-contain" src={logo} alt="logo" />
            </div>
            <p>(012) 8967453</p>
            <p>woodies@gmail.com</p>
            <p>Jakarta, Indonesia</p>
          </div>

          <div>
            <img src={footer} alt="footer" />
          </div>
        </div>
        <div className="text-center text-[#8D8D8D]">
          <p>© 2020 WOODIES</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
