import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Name = ({ refNameSection }: any) => {
  const isNameSectionInView = useInView(refNameSection, { amount: 1 });

  return (
    <>
      <div className="grid h-full relative place-items-center">
        <motion.h1 className="name">
          <div
            className={`flex text-2xl ease-out duration-300 ${
              isNameSectionInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <motion.span layoutId="ki">ki</motion.span>
            <motion.span layoutId="ri">ri</motion.span>
            {"ll"}
            <motion.span layoutId="go">go</motion.span>r<motion.span layoutId="bu">bu</motion.span>
            nov
          </div>
        </motion.h1>
      </div>
      <motion.div className="absolute flex bottom-8 justify-center w-full font-thin text-xl">
        scroll
      </motion.div>
    </>
  );
};
