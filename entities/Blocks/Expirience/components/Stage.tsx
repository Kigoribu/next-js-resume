import React, { FC, forwardRef } from "react";
import { motion } from "framer-motion";
import { IExpiriensStages } from "../data/stages";
import { StageTitle } from "./StageTitle";

interface IStageProps {
  element: IExpiriensStages;
}

export const Stage: FC<IStageProps> = forwardRef(function Stage(
  { element }: IStageProps,
  ref: any
) {
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center h-full text-center pointer-events-none"
    >
      <div className="w-[200px] h-[200px] flex justify-center items-center text-white">
        {element.icon}
      </div>
      <p className="text-2xl font-bold text-violet-50 w-3/5">{element.date}</p>
      <p className="text-xl font-bold text-violet-100 w-4/5">{element.title}</p>
    </motion.div>
  );
});

export const MotionStage = motion(Stage);
