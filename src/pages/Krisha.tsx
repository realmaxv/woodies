import Header from "../components/Header";
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import schuesseln from "/src/assets/Schuesseln.png";
const Krisha = () => {
  return (
    <div className="flex flex-col justify-between  h-screen ">
      <Header />
      <Headline title="Krisha" />
      <section className="flex items-center gap-20 justify-center ">
        <img src={schuesseln} alt="tisch" />
        <article className="max-w-xl text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odit
          quos voluptatem natus ipsum molestiae incidunt nemo aut quod atque
          nisi voluptas, tempore recusandae magnam? Similique nobis sequi
          perspiciatis dolorum expedita, sed cumque atque debitis nostrum dicta
          veritatis modi quos. Sapiente, deleniti quae laboriosam a voluptate
          harum minus culpa libero.
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Krisha;
