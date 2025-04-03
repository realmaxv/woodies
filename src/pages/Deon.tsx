import Header from "../components/Header";
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import stuhl from "/src/assets/Stuhl.png";
const Deon = () => {
  return (
    <div className="flex flex-col justify-between  h-screen ">
      {" "}
      <Header />
      <Headline title="Deon" />
      <section className="flex items-center gap-20 justify-center ">
        <img
          src={stuhl}
          alt="tisch"
          className="motion-preset-fade motion-duration-2000 motion-translate-x-in-75"
        />
        <article className="max-w-xl text-left motion-preset-fade motion-duration-2000 ">
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

export default Deon;
