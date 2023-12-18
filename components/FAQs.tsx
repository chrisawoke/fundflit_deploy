"use client";

import { faqItems } from "@/constants";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const FAQs = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  //Put id type to any to avoid ts error
  const toggleAnswer = (id:any) => {
    setVisibleAnswer((prev) => {
      // If clicking on the same question, close it
      if (prev === id) {
        return null;
      }
      // If clicking on a different question, open it and close the previous one
      return id;
    });
  };

  return (
    <main className="mb-[3rem] mt-[5rem]">
      <h3 className="mb-5 text-center text-[20px] font-bold text-gray-90 lg:text-left">
        Frequently Asked Questions (FAQs)
      </h3>

      <div>
        {faqItems.map((item) => (
          <div key={item.id} className="flex flex-col justify-start items-start">
            <div
              className="mb-[2px] flex w-full cursor-pointer items-center justify-between rounded-md bg-white px-3 py-6 font-semibold"
              onClick={() => toggleAnswer(item.id)}
            >
              <span className="mb-4 text-[1rem]">{item.question}</span>
              <IoIosArrowDropdown
                style={{
                  rotate: visibleAnswer === item.id ? "180deg" : "0deg",
                  transition: "rotate 0.3s ease-in-out",
                }}
              />
            </div>

            <div
              className="pointer-events-none flex w-full items-center bg-transparent px-6 py-[3px] text-[.85rem]"
              style={{
                opacity: visibleAnswer === item.id ? 1 : 0,
                height: visibleAnswer === item.id ? "12rem" : "0",
                transition: "opacity 0.2s ease-in-out, height 0.3s ease-in-out",
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQs;
