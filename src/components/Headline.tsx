type HeadlineProps = {
  title: string;
  ueberschrift: string;
};
const Headline = ({ title, ueberschrift }: HeadlineProps) => {
  return (
    <div>
      {" "}
      <div className="flex  items-center justify-center gap-4">
        <h3 className="text-3xl font-bold text-[#313235]">{title}</h3>
        <hr className="w-80" />
        <h2 className="products">{ueberschrift}</h2>
      </div>
    </div>
  );
};

export default Headline;
