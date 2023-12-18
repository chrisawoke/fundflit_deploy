import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import mailIcon from "@/public/assets/mail.svg";

const Footer = () => {
  return (
    <footer className="flexCenter mt-24 mb-10">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              className="hover:scale-110"
              src="/assets/Fundflit.png"
              alt="logo"
              width={135}
              height={50}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link
                      href={link.path}
                      key={link.title}
                      className="hover:text-green-50 hover:font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row hover:text-green-50 hover:font-medium"
                  >
                    <p className="whitespace-nowrap regular-14 text-gray-30">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-green-600">
                      {link.value}
                    </p>
                  </Link>
                ))}
                {/* Newsletter */}
                <h4 className="font-bold whitespace-nowrap mb-1">
                  Subscribe to our newsletter
                </h4>
                <div className="flex md:flex-row gap-5 w-full justify-center">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="w-full rounded-md  sm:text-lg text-base py-[.9rem] sm:px-[1.5rem] px-[1rem] sm:py-[1rem] active:outline-none"
                  />

                  <button className="bg-green-50 px-4 rounded-lg hover:bg-black-100">
                    <Image
                      src={mailIcon}
                      alt="suubscribe"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link
                      className="hover:scale-90 transition-transform"
                      href="/"
                      key={link}
                    >
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-10" />
        <p className="regular-14 w-full text-center text-gray-30">
          <span>2023 </span>
          <Link
            href="#"
            className="text-green-50 hover:text-gray-50 hover:font-medium"
          >
            Fundflit
          </Link>
          | All rights Reserved.
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
