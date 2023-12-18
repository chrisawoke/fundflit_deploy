import FAQs from "./FAQs";
import { CgMenuRight } from "react-icons/cg";
import { appImages } from "@/constants";

const FAQs_Section = () => {
  return (
    <main className="relative z-30   padding-container max-container flex flex-col py-[5rem]">
      <h2 className="py-[2.5rem] text-center text-[30px] font-[700] lg:pl-[2rem] lg:text-left lg:text-[40px]">
        We Ensure <span className="text-green-50"> Security</span>,
        <span className="text-green-50">Trust</span>, <br />
        and <span className="text-green-50">Transparency</span>.
      </h2>

      <div className="flex w-full flex-col justify-between  sm:flex-row">
        <div className="relative flex w-full flex-col justify-center">
          <div className="w-full rounded-xl bg-white px-4 py-4 shadow-xl shadow-green-100 hover:shadow-transparent md:left-10 md:w-[19.56rem]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-green-50">
                <span className="text-black">Fund</span>flit.
              </span>
              <CgMenuRight className="text-green-50" size={20} />
            </div>

            <div className="mt-6 flex justify-between">
              {appImages.map((item) => (
                <div key={item.id} className="w-[5.2rem]">
                  <img
                    src={item.image}
                    alt="Black people"
                    className="h-[5rem] w-full rounded object-cover"
                  />
                  <p className="mt-1 text-[.5rem]">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-[2rem] text-[12px] text-gray-50">
              Decentralized Identity
            </p>

            <ul className="mt-[1rem] flex w-[50%] flex-wrap items-center gap-1">
              <li className="h-[.75rem] w-[.699rem] bg-[#F86799]"></li>
              <li className="h-[.625rem] w-[80%] bg-zinc-200"></li>
              <li className="h-[.75rem] w-[.699rem] bg-green-50"></li>
              <li className="h-[.625rem] w-[80%] bg-zinc-200"></li>
              <li className="h-[.75rem] w-[.699rem] bg-[#70AAFB]"></li>
              <li className="h-[.625rem] w-[65%] bg-zinc-200"></li>
            </ul>

            <div className="relative -top-10 object-fill">
              <img className="w-full" src="/assets/chart.svg" alt="chart" />
            </div>

            <p className="relative -top-8 mr-4 flex items-center justify-between text-[12px] font-medium text-gray-50">
              Invest for the Future!
            </p>

            <ul className="flex w-full flex-wrap justify-between">
              <li className="mb-2 h-[1.0625rem] w-[47%] bg-zinc-100"></li>
              <li className="mb-2 h-[1.0625rem] w-[47%] bg-zinc-100"></li>
              <li className="mb-2 h-[1.0625rem] w-[47%] bg-zinc-100"></li>
              <li className="mb-2 h-[1.0625rem] w-[47%] bg-zinc-100"></li>
              <li className="mb-2 h-[1.0625rem] w-[47%] bg-zinc-100"></li>
              <li className="mb-2 h-[1.0625rem] w-[47%] bg-zinc-100"></li>
            </ul>
          </div>
        </div>

        <div className="m-auto flex w-full flex-col justify-between">
          <p className="w-full py-10 pr-5 text-center lg:text-left">
            Got questions? We've got answers. Explore our FAQs to find quick
            solutions and insights about Fundflit. Whether you're a founder or
            investor, we're here to make your experience seamless. Can't find
            what you're looking for? Reach out to our support team—we're always
            ready to help.
          </p>

          <FAQs />
        </div>
      </div>
    </main>
  );
};

export default FAQs_Section;
