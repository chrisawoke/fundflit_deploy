const About_Hero = () => {
  const style =
    "flex flex-col justify-between xl:w-[18.75rem] lg:w-[16.75rem] sm:w-[14rem] w-[45%] h-full";
  const imgStyle =
    "lg:h-[18rem] sm:h-[14rem] h-[11rem] rounded-3xl object-cover";

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex h-[500px] w-full flex-col items-center justify-center bg-[#0A2640] px-5 py-20 text-center md:px-14 md:h-[600px] lg:px-24 lg:pb-20">
        <h2 className="text-[1.7rem] font-bold text-gray-100 md:text-[45px]">
          Fundflit is where Innovation Meets Community in the Web5 Crowdfunding
          Frontier.
        </h2>
        <p className="my-5 w-[90%] pb-5 text-[12px] leading-5 text-gray-200 sm:w-[80%] sm:text-sm md:text-base md:leading-8 lg:pb-20">
          Join us on a journey where dreams take flight, innovation knows no
          bounds, and a global community comes together to shape the future.
        </p>
      </div>
      <div className="lg:px-18 relative -top-[5rem] flex h-[23.5rem] items-center justify-center gap-6 px-5 sm:h-[30.5rem] md:-top-[9rem] md:px-14 lg:h-[39.5rem] xl:px-24">
        <div className={style}>
          <img src="/assets/about-img1.jpeg" alt="" className={imgStyle} />
          <img src="/assets/about-img4.png" alt="" className={imgStyle} />
        </div>
        <div className="hidden h-full md:block md:w-[20rem] lg:w-[22rem] xl:w-[25rem]">
          <img
            src="/assets/about-img2.jpeg"
            alt=""
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className={style}>
          <img src="/assets/about-img3.png" alt="" className={imgStyle} />
          <img src="/assets/about-img5.jpeg" alt="" className={imgStyle} />
        </div>
      </div>
    </section>
  );
};

export default About_Hero;
