import { features } from "@/constants";
import Image from "next/image";
import FeaturesCards from "./FeaturesCards";

const Features = () => {
  return (
    <section className="max-container">
      <h2 className="max-container lg:text-[37px] font-[700] text-[33px] px-[7rem] text-center lg:text-left">
        Our Amazing Features 😍
      </h2>
      <p className="text-[16px] px-6 lg:pl-[7rem] mb-6 py-3 text-gray-50 xl:max-w-[520px] text-center lg:text-left">
        Our features align with the needs of both startup founders and investors
        while incorporating innovative elements.
      </p>
      <div className="flexBetween padding-container max-container flex flex-col pb-10">
        <div className="flexBetween flex flex-col md:grid md:grid-cols-4 md:h-[22rem] gap-3 w-full">
          {features.map((feature) => (
            <FeaturesCards key={feature.label} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
