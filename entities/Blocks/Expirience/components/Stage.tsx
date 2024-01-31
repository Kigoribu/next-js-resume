import React, { Children, FC, ReactElement, ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import { IExpiriensStages } from "../data/stages";
import { getChildrenByType } from "../utils/getChildrenByType";

interface IStageProps {
  element: IExpiriensStages;
  children: ReactNode;
}

export const Stage: FC<IStageProps> = forwardRef(function Stage({ element, children }, ref: any) {
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center h-full text-center pointer-events-none"
    >
      <div className="w-[200px] h-[200px] flex justify-center items-center text-white">
        {element.icon}
      </div>
      <p className="text-2xl font-bold text-violet-50 w-3/5">{element.date}</p>
      {getChildrenByType(children, ["StageTitle"])}
    </motion.div>
  );
});

export const MotionStage = motion(Stage);
