import { Link } from "react-router-dom";
import Header from "../components/Header";
import home from "/src/assets/Home.png";

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
                woodden <br /> furniture
              </b>{" "}
              for your place?
            </p>
            <h2 className="text-[#313235] font-bold text-7xl text-left w-100 text-wrap">
              This is the Right Place
            </h2>
            <Link className="button" to={"/categories"}>
              Explore Categories
            </Link>
          </section>
        </div>
        <div className="w-160 absolute"></div>
        <img src={home} className="relative right-50" alt="home" />
      </div>
    </div>
  );
};

export default Home;
