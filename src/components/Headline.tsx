type HeadlineProps = {
  title: string;
};
const Headline = ({ title }: HeadlineProps) => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center gap-4">
        <h3 className="text-3xl font-bold motion-preset-fade motion-delay-300 text-[#313235]">
          {title}
        </h3>
        <hr className="w-80 motion-preset-slide-right  motion-duration-700" />
        <h2 className="products motion-preset-slide-right ">PRODUCTS</h2>
      </div>
    </div>
  );
};

export default Headline;
