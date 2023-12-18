import { values } from "@/constants";

const Our_Values = () => {
  return (
    <section>
      <section className="h-fit flex flex-col justify-center items-center py-20 bg-[#0A2640] text-gray-100">
        <div className="md:w-[60%] xs:w-[70%] w-[80%]">
          <span className="md:text-base text-xs">Our values</span>
          <h2 className=" md:text-[3rem] sm:text-[2.5rem] text-[1.7rem] my-4">
            Things we believe in
          </h2>
          <p className="text-base leading-8">
            At the heart of our platform lie a set of core values that steer our
            every decision, shape our culture, and define the way we engage with
            our community. These values are more than principles; they are the
            bedrock of our commitment to creators, backers, and the broader Web5
            ecosystem.
          </p>
        </div>
        <div className=" md:w-[60%] xs:w-[70%] w-[85%] flex flex-col items-center justify-between gap-10 mt-10">
          {values.map((value) => (
            <div key={value.value} className=" w-full flex justify-between">
              <div className="w-[22%] ">
                <img
                  src={value.imgUrl}
                  alt=""
                  className=" object-cover lg:h-[7rem] lg:w-[7rem] sm:h-[5.5rem] sm:w-[5.5rem] h-[4rem] w-[4rem] rounded-md relative top-1"
                />
              </div>
              <div className="w-[72%] ">
                <h3 className=" md:text-[1.75rem] text-[1.35rem] md:mb-5 mb-2">
                  {value.value}
                </h3>
                <p className=" text-base leading-8">{value.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Our_Values;
