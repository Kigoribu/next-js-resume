import React, { FC, ReactHTMLElement, useEffect } from "react";
import { inView, motion, useAnimation, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { kaushan_script } from "@/app/utils/fonts";
import "./header.scss";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

export const Header = ({ refNameSection }: any) => {
  const isNameSectionInView = useInView(refNameSection, { amount: 1 });

  console.log(refNameSection);

  return (
    <>
      {!isNameSectionInView && refNameSection.current !== null ? (
        <header className="w-full h-[50px] fixed top-10 grid place-items-center z-10">
          <div className="py-4 px-6 rounded-full header__effect gap-x-5 flex items-center justify-center w-[900px]">
            <div
              className={`flex text-lg font-bold text-cyan-900 grow ${kaushan_script.className}`}
            >
              <motion.span layoutId="ki" transition={{ type: "spring", bounce: 0, duration: 1.2 }}>
                Ki
              </motion.span>
              <motion.span layoutId="go" transition={{ type: "spring", bounce: 0, duration: 1.2 }}>
                go
              </motion.span>
              <motion.span layoutId="ri" transition={{ type: "spring", bounce: 0, duration: 1.2 }}>
                ri
              </motion.span>
              <motion.span layoutId="bu" transition={{ type: "spring", bounce: 0, duration: 1.2 }}>
                bu
              </motion.span>
            </div>
            <ul className="flex gap-8">
              <li className="text-md text-cyan-800 cursor-pointer hover:text-white flex float-left items-center gap-x-1">
                GitHub
                <FaGithub size={22} />
              </li>
              <li className="text-md text-cyan-800 cursor-pointer hover:text-white flex float-left items-center gap-x-1">
                LinkedIn
                <FaLinkedin size={22} />
              </li>
              <li className="text-md text-cyan-800 cursor-pointer hover:text-white float-left  items-center gap-x-1">
                Contact
              </li>
            </ul>
          </div>
        </header>
      ) : null}
    </>
  );
};
