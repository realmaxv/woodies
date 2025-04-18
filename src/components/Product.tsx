import { Link } from "react-router-dom";
type ProductProps = {
  name: string;
  imagesrc: string;
  linkto: string;
};
const Product = ({ name, imagesrc, linkto }: ProductProps) => {
  return (
    <div className="">
      {" "}
      <div className=" max-w-60 flex flex-col items-center ">
        <div className=" relative top-12 right-15">
          <p className=" font-bold text-3xl">{name}</p>
        </div>
        <img src={imagesrc} alt="tisch" className="" />
        <Link className="button relative bottom-15 left-10 " to={linkto}>
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Product;
