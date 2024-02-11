import React, { Fragment, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
import { AnimateSpringAppearance } from "@/shared/Animations/AnimateSpringAppearance";
import { motion } from "framer-motion";
import { expiriensStages } from "../data/stages";
import { MotionMyButton } from "@/shared/MotionCustomComponents/MyButton";
import {
  StageTitle,
  MotionStageControl,
  StageDate,
  StageDescription,
  StageFooter,
} from "@/shared/Stage";
import { Chip } from "@/shared/Chip/Chip";
import { AnimateAppearanceTextByWord } from "@/shared/Animations/AnimateAppearanceTextByWord";

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
      <div className="flex justify-center items-center w-1/4">
        <AnimateSpringAppearance delay={0.1}>
          <>
            {page !== 0 && (
              <MotionMyButton
                whileTap={{ scale: 1.4 }}
                className="text-white cursor-pointer relative"
                onClick={() => paginate(-1)}
              >
                <FaCircleArrowLeft size="64px" />
              </MotionMyButton>
            )}
          </>
        </AnimateSpringAppearance>
      </div>
      <div className="items-center justify-center w-2/4">
        {expiriensStages.map((element, i) => (
          <Fragment key={i}>
            {page === i ? (
              <MotionStageControl
                custom={direction}
                className="h-full"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <StageDate>
                  <AnimateAppearanceTextByWord speedOffset={0.1} text={element.date} />
                </StageDate>
                <StageTitle>
                  <AnimateAppearanceTextByWord speedOffset={0.2} text={element.title} />
                </StageTitle>
                <StageDescription>
                  <AnimateAppearanceTextByWord speedOffset={0.01} text={element.description} />
                </StageDescription>

                {i !== 2 ? (
                  <StageFooter>
                    <motion.div initial="hidden" whileInView="show" className="flex flex-col mt-4">
                      <p className="text-white text-lg">Позиция:</p>
                      <div className="flex gap-x-2">
                        {element?.roles?.map((role, i) => (
                          <AnimateSpringAppearance key={i} delay={i * 0.1}>
                            <Chip key={i}>{role}</Chip>
                          </AnimateSpringAppearance>
                        ))}
                      </div>
                      <p className="text-white text-lg mt-2">Технологии:</p>
                      <div className="flex gap-x-2">
                        {element?.technologies?.map((technology, i) => (
                          <AnimateSpringAppearance key={i} delay={i * 0.1}>
                            <Chip key={i}>{technology}</Chip>
                          </AnimateSpringAppearance>
                        ))}
                      </div>
                    </motion.div>
                  </StageFooter>
                ) : null}
              </MotionStageControl>
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center items-center w-1/4">
        <AnimateSpringAppearance delay={0.1}>
          <>
            {page !== 2 && (
              <MotionMyButton whileTap={{ scale: 1.4 }}>
                <FaCircleArrowRight
                  size="64px"
                  className="text-white cursor-pointer"
                  onClick={() => paginate(1)}
                />
              </MotionMyButton>
            )}
          </>
        </AnimateSpringAppearance>
      </div>
    </div>
  );
};
