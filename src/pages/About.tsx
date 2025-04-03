import about from "/src/assets/About.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Headline from "../components/Headline";

const About = () => {
  return (
    <div className="flex flex-col justify-between  h-screen ">
      <Header />
      <Headline title="Who we are" />
      <div className="flex items-center justify-evenly mt-16 ">
        <img className="motion-translate-y-in-100 " src={about} alt="about" />
        <section className="flex  flex-col gap-8 justify-center  items-start ">
          <p className="text-4xl motion-translate-y-in-150">
            Are you looking for{" "}
            <b>
              woodden <br /> furniture
            </b>{" "}
            for your place?
          </p>
          <h2 className="text-[#313235] motion-translate-x-in-150  font-bold text-7xl text-left w-100 text-wrap">
            This is the Right Place
          </h2>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
