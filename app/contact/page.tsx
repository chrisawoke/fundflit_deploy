import { contactItems } from "@/constants";
import Form from "./Form";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="max-container">
      <div className="flexCenter h-[350px] p-6 md:px-14 text-center text-[1.7rem] font-bold md:p-20 md:text-[45px]">
        Get In Touch with Us. We'll be glad to hear from you.
      </div>
      <div className="flexCenter flex-col gap-10 bg-[#0A2640] px-7 py-20 md:flex-row md:gap-10 md:p-20">
        <div className="w-full text-white md:w-[50%]">
          <h2 className="text-[2rem] font-bold md:text-[3rem]">Make your Inquiry</h2>
          <p className="w-[80%] text-gray-20">Send us a message and we'll response to you as shortly as we can.</p>
          <div className="mb-5 mt-10 md:my-28">
            {contactItems.direct.map((item, index) => (
              <div
                key={index}
                className="flexStart cursor pointer w-fit rounded-md border-2 border-transparent p-3 transition-all hover:border-green-50 hover:bg-[#0d3052]"
              >
                <item.imgUrl className="mr-3 text-green-50" />
                <span>{item.info}</span>
              </div>
            ))}
          </div>
          <div className="flexStart">
            {contactItems.socilaMedia.map((item, index) => (
              <div
                key={index}
                className="flexCenter mr-5 h-10 w-10 cursor-pointer rounded-full transition-all hover:bg-green-50"
              >
                <Link href={item.link}>
                  <item.imgUrl size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
