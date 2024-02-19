import React, { FC, useContext, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FullPageBlock } from "@/features/FullPageScroll/FullPageBlock";
import { PageContext } from "@/features/FullPageScroll/context/PageContext";

export const NameBlock: FC = () => {
  const refNameSection = useRef(null);
  const { pageNum } = useContext(PageContext);

  const variants = {
    initial: {
      bottom: 32,
      opacity: 0,
    },
    show: {
      opacity: 100,
      bottom: 32,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    exit: {
      bottom: 100,
      opacity: 0,
    },
  };

  return (
    <FullPageBlock ref={refNameSection}>
      <div className="grid h-full relative place-items-center">
        {pageNum === 0 ? (
          <motion.h1 className="name">
            <div className={`flex text-lg md:text-2xl ease-out duration-300`}>
              <motion.span layoutId="ki">ki</motion.span>
              <motion.span layoutId="ri">ri</motion.span>
              {"ll"}
              <motion.span layoutId="go">go</motion.span>r
              <motion.span layoutId="bu">bu</motion.span>
              nov
            </div>
          </motion.h1>
        ) : null}
      </div>
      <AnimatePresence>
        {pageNum === 0 ? (
          <motion.div
            className="absolute flex justify-center w-full font-thin text-xl"
            initial={variants.initial}
            animate={variants.show}
            exit={variants.exit}
          >
            scroll
          </motion.div>
        ) : null}
      </AnimatePresence>
    </FullPageBlock>
  );
};
