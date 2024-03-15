"use client";
import React, { Fragment, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
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
    <div className="relative w-full">
      <div className="absolute xl:left-56 sm:left-6 left-0 top-1/2 -translate-y-1/2">
        <AnimateSpringAppearance delay={0.1}>
          <>
            {page !== 0 && (
              <MotionMyButton
                whileTap={{ scale: 1.2 }}
                className="text-white cursor-pointer relative"
                onClick={() => paginate(-1)}
                aria-label="Назад"
              >
                <MdKeyboardArrowLeft size="48px" color="#F0CE40" />
              </MotionMyButton>
            )}
          </>
        </AnimateSpringAppearance>
      </div>
      <div className="absolute xl:right-56 sm:right-6 right-0 top-1/2 -translate-y-1/2">
        <AnimateSpringAppearance delay={0.1}>
          <>
            {page !== 2 && (
              <MotionMyButton
                whileTap={{ scale: 1.2 }}
                className="text-white cursor-pointer"
                onClick={() => paginate(1)}
                aria-label="Вперед"
              >
                <MdKeyboardArrowRight size="48px" color="#F0CE40" />
              </MotionMyButton>
            )}
          </>
        </AnimateSpringAppearance>
      </div>
      <div className="items-center justify-center container mx-auto xl:px-72 px-12">
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
                <StageDate className="max-md:text-lg text-[#F0CE40]">
                  <AnimateAppearanceTextByWord speedOffset={0.1}>
                    {element.date}
                  </AnimateAppearanceTextByWord>
                </StageDate>
                <StageTitle className="max-md:text-lg">
                  <AnimateAppearanceTextByWord speedOffset={0.2}>
                    {element.title}
                  </AnimateAppearanceTextByWord>
                </StageTitle>
                <StageDescription className="max-md:text-md">
                  <AnimateAppearanceTextByWord speedOffset={0.01}>
                    {element.description}
                  </AnimateAppearanceTextByWord>
                </StageDescription>

                {i !== 2 ? (
                  <StageFooter>
                    <motion.div initial="hidden" whileInView="show" className="flex flex-col mt-4">
                      <p className="text-white md:text-lg text-md">Позиция:</p>
                      <div className="flex gap-x-2">
                        {element?.roles?.map((role, i) => (
                          <AnimateSpringAppearance key={i} delay={i * 0.1}>
                            <Chip className="text-sm md:text-md" key={i}>
                              {role}
                            </Chip>
                          </AnimateSpringAppearance>
                        ))}
                      </div>
                      <p className="text-white md:text-lg text-md mt-2">Технологии:</p>
                      <div className="flex flex-wrap gap-2">
                        {element?.technologies?.map((technology, i) => (
                          <AnimateSpringAppearance key={i} delay={i * 0.1}>
                            <Chip key={i} className="text-sm md:text-md">
                              {technology}
                            </Chip>
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
    </div>
  );
};
