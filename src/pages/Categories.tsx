import stuhl from "/src/assets/Stuhl.png";
import schuesseln from "/src/assets/Schuesseln.png";
import tisch from "/src/assets/Tisch.png";

import Footer from "../components/Footer";
import Header from "../components/Header";

import Product from "../components/Product";
import Headline from "../components/Headline";

const Categories = () => {
  return (
    <div className="flex flex-col justify-between  h-screen">
      <Header />
      <Headline title="What we have" />
      <div className="flex items-center justify-evenly">
        <div className="motion-preset-slide-left">
          <Product name="Jenson" imagesrc={tisch} linkto="/jenson" />
        </div>
        <div className="motion-preset-slide-left motion-delay-100">
          {" "}
          <Product name="Deon" imagesrc={stuhl} linkto="/deon" />
        </div>
        <div className="motion-preset-slide-left motion-delay-150">
          {" "}
          <Product name="Krisha" imagesrc={schuesseln} linkto="/krisha" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
