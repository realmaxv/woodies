import { Link } from "react-router-dom";
import Header from "../components/Header";
// import home from "/src/assets/Home.png";
import westie from "/src/assets/head_whs.png";
const Home = () => {
  return (
    <div className="">
      <div className="fixed  top-0 right-0 left-0">
        <Header />
      </div>
      <div className="bg-[#F9BDBD] flex items-center justify-center h-screen ">
        <div className="flex justify-center items-center bg-[#FFF] w-full ">
          {" "}
          <section className="flex h-screen flex-col gap-8 justify-center  items-start ">
            <p className="text-4xl  ">
              Are you looking for{" "}
              <b>
                fluffy
                <br /> happiness
              </b>{" "}
              for your place?
            </p>
            <h2 className="text-[#313235] font-bold text-7xl text-left w-100 text-wrap">
              This is the Right Place
            </h2>
            <Link className="button" to={"/categories"}>
              Our dogs
            </Link>
          </section>
        </div>
        <div className="w-160 absolute"></div>
        <img
          src={westie}
          className="relative right-50 max-h-100 max-w-full mix-blend-luminosity rounded-full shadow-2xl  ring-3 ring-amber-500 "
          alt="home"
        />
      </div>
    </div>
  );
};

export default Home;
