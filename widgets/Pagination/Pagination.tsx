import { PageContext } from "@/features/FullPageScroll/context/PageContext";
import { useInView, motion } from "framer-motion";
import React, { FC, Fragment, useContext, useEffect, useState } from "react";

export const Pagination: FC<any> = () => {
  const { pageNum } = useContext(PageContext);

  return pageNum !== 0 ? (
    <div
      className={`opacity-1 fixed h-screen top-0 right-10 text-xl flex items-center pointer-events-[unset] ease-out duration-500`}
    >
      <div className="flex flex-col">
        {Object.keys([0, 1, 2, 3]).map((_, i) => (
          <Fragment key={i}>
            <div className={`flex justify-center items-center text-center align-middle`}>
              <div
                className={`w-2 h-2 m-[1em] rounded-full ${
                  pageNum === i ? "bg-cyan-900" : "bg-white"
                }`}
              ></div>
              {pageNum === i ? (
                <motion.div
                  layoutId="currentNav"
                  className="absolute border-2 border-cyan-900 h-[2rem] w-[2rem] rounded-full"
                />
              ) : null}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  ) : null;
};
