"use client";

import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogIn from "./LogIn";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 pt-10 pb-5">
      <Link href="/">
        <Image
          src="/assets/Fundflit.png"
          alt="logo"
          width={130}
          height={40}
          className="hover:scale-110"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <LogIn />
      </div>
      {/* Mobile Navigation */}
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block text-green-50 cursor-pointer lg:hidden"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-md flex flex-col pt-10`}
      >
        <ul
          className="h-full gap-12 lg:flex"
          onClick={() => {
            setToggle(false);
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white cursor-pointer pb-1.5 transition-all flex justify-start items-start hover:text-lg py-3"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:hidden flex justify-start items-start pt-10">
          <LogIn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
