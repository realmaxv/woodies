import { Link } from "react-router-dom";
import Header from "../components/Header";
import home from "/src/assets/Home.png";

const Home = () => {
  return (
    <div className=" animate-in fade-in">
      <div className="fixed  top-0 right-0 left-0">
        <Header />
      </div>

      <div className="bg-[#F9BDBD] flex items-center justify-center h-screen animate-in fade-in zoom-in ">
        <div className="flex justify-center items-center bg-[#FFF] w-full ">
          {" "}
          <section className="flex h-screen flex-col gap-8 justify-center  items-start ">
            <p className="text-4xl motion-preset-slide-left-lg motion-duration-200 motion-delay-500 motion-ease-bounce ">
              Are you looking for{" "}
              <b>
                woodden <br /> furniture
              </b>{" "}
              for your place?
            </p>
            <h2 className="text-[#313235]  motion-translate-y-in-100 motion-duration-1000 motion-rotate-in-45 motion-blur-in-sm font-bold text-7xl text-left w-100 text-wrap">
              This is the Right Place
            </h2>
            <Link
              className="button motion-translate-x-in-25 motion-duration "
              to={"/categories"}
            >
              Explore Categories
            </Link>
          </section>
        </div>
        <div className="w-160 absolute"></div>
        <img
          src={home}
          className=" motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth relative right-50"
          alt="home"
        />
      </div>
    </div>
  );
};

export default Home;
