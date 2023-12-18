import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container flex flex-wrap items-center justify-start pb-[5rem] pt-[4rem]">
      <div className="m-auto w-full px-3 lg:w-3/5 lg:px-20">
        <h1 className="text-center text-[33px] font-[700] leading-[125%] lg:text-left lg:text-[45px]">
          We're a Web5-based Crowdfund Platform for Startups.
        </h1>
        <p className="mt-6 px-4 py-5 text-center text-[16px] text-gray-50 lg:px-0 lg:text-left xl:max-w-[520px]">
          Welcome to Fundflit — the future of startup funding. 🚀 Our
          decentralized platform harnesses the power of web5 technologies, to
          create a space where innovation meets opportunity. Join Us as We
          Redefine Community-Driven Fund with Trust and Transparency.
        </p>
        <div className="flex w-full flex-col justify-center gap-3 pt-10 md:flex-row lg:justify-start">
          <Link href="/campaigns">
            <Button
              type="button"
              title="Get Started Here!"
              variant="btn_green"
            />
          </Link>
          <Link href="/fundflit">
            <Button
              type="button"
              title="How we work?"
              icon="/assets/play.svg"
              variant="btn_white_text"
            />
          </Link>
        </div>
      </div>
      <div className="m-auto pt-[4.5rem] hover:scale-100 sm:flex-row lg:w-2/5 px-10 md:px-20">
        <Image
          src="/assets/Group 216.png"
          alt="hero image"
          width={370}
          height={420}
        />
      </div>
    </section>
  );
};

export default Hero;
