type HeadlineProps = {
  title: string;
};
const Headline = ({ title }: HeadlineProps) => {
  return (
    <div>
      {" "}
      <div className="flex mb-[-10vw] items-center justify-center gap-4">
        <h3 className="text-3xl font-bold text-[#313235]">{title}</h3>
        <hr className="w-80" />
        <h2 className="products">PRODUCTS</h2>
      </div>
    </div>
  );
};

export default Headline;
