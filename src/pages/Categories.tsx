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
        <Product name="Jenson" imagesrc={tisch} linkto="/jenson" />
        <Product name="Deon" imagesrc={stuhl} linkto="/deon" />
        <Product name="Krisha" imagesrc={schuesseln} linkto="/krisha" />
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
