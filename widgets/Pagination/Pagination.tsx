"use client";
import { PageContext } from "@/features/FullPageScroll/context/PageContext";
import { motion } from "framer-motion";
import React, { FC, Fragment, useContext } from "react";

export const Pagination: FC<any> = () => {
  const { pageNum } = useContext(PageContext);

  return pageNum !== 0 ? (
    <div
      className={`opacity-1 fixed h-screen top-0 right-6 md:right-10 text-sm md:text-xl flex items-center pointer-events-[unset] ease-out duration-500`}
    >
      <div className="flex flex-col">
        {Object.keys([0, 1, 2, 3]).map((_, i) => (
          <Fragment key={i}>
            <div className={`flex justify-center items-center text-center align-middle`}>
              <div
                className={`w-1 h-1 my-8 rounded-full ${
                  pageNum === i ? "bg-cyan-200" : "bg-white"
                }`}
              ></div>
              {pageNum === i ? (
                <motion.div
                  layoutId="currentNav"
                  className="absolute border-2 border-cyan-200 h-[2rem] w-[2rem] rounded-full"
                />
              ) : null}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  ) : null;
};
