"use client";
import React, { FC, useContext } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { kaushan_script } from "@/app/utils/fonts";
import "./header.scss";
import { PageContext } from "@/features/FullPageScroll/context/PageContext";

export const Header: FC = () => {
  const { pageNum } = useContext(PageContext);

  return (
    <>
      {pageNum !== 0 ? (
        <header className="w-full fixed top-10 place-items-center z-10 flex px-12">
          <div
            className={`flex justify-self-start text-2xl font-bold grow ${kaushan_script.className}`}
          >
            <motion.span
              layoutId="ki"
              animate={{ color: "#fff" }}
              transition={{ type: "spring", bounce: 0, duration: 1.2 }}
            >
              Ki
            </motion.span>
            <motion.span
              animate={{ color: "#fff" }}
              layoutId="go"
              transition={{ type: "spring", bounce: 0, duration: 1.2 }}
            >
              go
            </motion.span>
            <motion.span
              animate={{ color: "#fff" }}
              layoutId="ri"
              transition={{ type: "spring", bounce: 0, duration: 1.2 }}
            >
              ri
            </motion.span>
            <motion.span
              animate={{ color: "#fff" }}
              layoutId="bu"
              transition={{ type: "spring", bounce: 0, duration: 1.2 }}
            >
              bu
            </motion.span>
          </div>
          <ul className="gap-8 text-white text-lg hidden md:flex">
            <li className="cursor-pointer hover:text-cyan-200 flex float-left items-center gap-x-1">
              <a
                href="mailto:kigoribu@gmail.com"
                className="cursor-pointer hover:text-cyan-200 flex float-left items-center gap-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                kigoribu@gmail.com
              </a>
            </li>
          </ul>
        </header>
      ) : null}
    </>
  );
};
