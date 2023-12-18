import { BiSolidBadgeCheck } from "react-icons/bi";

const Vision = () => {
  const items = [
    {
      product: "Connect with a Global Community",
    },
    {
      product: "Transparency at Every Step",
    },
    {
      product: "Innovate with Confidence",
    },
    {
      product: "Future-Proof Your Dreams",
    },
  ];

  return (
    <section className="mb:pt-10 flex flex-col items-center justify-center gap-14 px-7 pb-28 pt-0 md:flex-row md:px-10 lg:gap-20 lg:px-20">
      <div className="h-[28rem] md:w-[42%] xl:w-[35%]">
        <img
          src="/assets/about-img4.png"
          alt=""
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <div className="md:w-[50%] lg:w-[47%]">
        <h2 className="mb-5 w-full text-[1.8rem] sm:text-[2.5rem] md:text-[3rem]">
          Fundflit <br /> value proposition
        </h2>
        <p className="text-base leading-8">
          At Fundflit, we transcend traditional crowdfunding; we usher in a new
          era of possibilities with the power of Web5 technology. Our platform
          stands as a beacon for startup founders and investors seeking more
          than just a funding platform—it's a dynamic ecosystem where dreams
          take flight and communities flourish.
        </p>
        <div className="mt-8 flex w-full flex-wrap justify-start gap-5">
          {items.map((item) => (
            <div key={item.product} className="flex w-[45%]">
              <BiSolidBadgeCheck size={18} className="mr-3 text-coral-green" />
              <p className="text-sm md:text-base">{item.product}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
