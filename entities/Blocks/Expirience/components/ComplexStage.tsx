import React, { Fragment, useState } from "react";
import { MotionStage, Stage } from "./Stage";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
import { AnimateSpringAppearance } from "@/shared/AnimateSpringAppearance";

import { expiriensStages } from "../data/stages";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      display: "none",
    };
  },
};

export const ComplexStage = () => {
  const [page, setPage] = useState<number>(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setPage((prev) => prev + newDirection);
    setDirection(newDirection);
  };

  return (
    <div className="flex w-full h-3/5">
      <div className="flex justify-end items-center w-1/4">
        <AnimateSpringAppearance delay={0.1}>
          <>
            {page !== 0 && (
              <FaCircleArrowLeft
                size="64px"
                className="text-white cursor-pointer"
                onClick={() => paginate(-1)}
              />
            )}
          </>
        </AnimateSpringAppearance>
      </div>
      <AnimateSpringAppearance className="items-center justify-center w-2/4">
        <AnimatePresence initial={false} custom={direction}>
          {expiriensStages.map((element, i) => (
            <Fragment key={i}>
              {page === i ? (
                <MotionStage
                  key={element.title}
                  element={element}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                />
              ) : null}
            </Fragment>
          ))}
        </AnimatePresence>
      </AnimateSpringAppearance>
      <div className="flex justify-start items-center w-1/4">
        <AnimateSpringAppearance delay={0.1}>
          <>
            {page !== 2 && (
              <FaCircleArrowRight
                size="64px"
                className="text-white cursor-pointer"
                onClick={() => paginate(1)}
              />
            )}
          </>
        </AnimateSpringAppearance>
      </div>
    </div>
  );
};
