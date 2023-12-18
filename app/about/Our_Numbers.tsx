import { numbers } from "@/constants";

const Our_Numbers = () => {
  return (
    <section className="bg-[#0A2640] text-gray-100 h-fit flex flex-col justify-center items-center lg:px-20 md:px-10 px-5 p-20 ">
      <span className="md:text-base text-xs">Our projections</span>
      <h2 className="lg:w-[60%] md:w-[80%] w-full md:text-[3rem] sm:text-[2.5rem] text-[1.7rem] my-5 text-center">
        We're Working to Lead the Market.
      </h2>
      <div className=" flex flex-wrap md:gap-20 xs:gap-22 gap-10 items-center justify-center sm:mt-0 mt-8 xs:text-start text-center">
        {numbers.map((number) => (
          <div key={number.title} className="">
            <span className=" md:text-[6rem] sm:text-[4.5rem] text-[2.5rem] block text-green-50">
              {number.value}
            </span>
            <p className="md:text-base text-sm">{number.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Our_Numbers;
