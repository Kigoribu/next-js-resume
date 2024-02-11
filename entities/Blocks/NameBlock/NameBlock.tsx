import React, { FC, useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FullPageBlock } from "@/features/FullPageScroll/FullPageBlock";
import { PageContext } from "@/features/FullPageScroll/context/PageContext";

export const NameBlock: FC = () => {
  const refNameSection = useRef(null);
  const { pageNum } = useContext(PageContext);

  return (
    <FullPageBlock ref={refNameSection}>
      <div className="grid h-full relative place-items-center">
        {pageNum === 0 ? (
          <motion.h1 className="name">
            <div className={`flex text-2xl ease-out duration-300`}>
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
      <motion.div className="absolute flex bottom-8 justify-center w-full font-thin text-xl">
        scroll
      </motion.div>
    </FullPageBlock>
  );
};
