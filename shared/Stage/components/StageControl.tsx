import React, { Children, FC, HTMLAttributes, ReactElement, ReactNode, forwardRef } from "react";
import { HTMLMotionProps, MotionProps, motion } from "framer-motion";
import { IExpiriensStages } from "../../../entities/Blocks/Expirience/data/stages";
import { getChildrenByType } from "../../../app/utils/getChildrenByType";
import { cn } from "@/lib/utils";
import { Chip } from "@/shared/Chip/Chip";

interface IStageControlProps extends HTMLMotionProps<"div"> {
  element: IExpiriensStages;
  children: ReactNode;
}

export const StageControl: FC<IStageControlProps> = forwardRef(function Stage(
  { element, children, className, ...other },
  ref: any
) {
  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-col justify-center p-4 pointer-events-none", className)}
      {...other}
    >
      {/* <div className="w-[200px] h-[200px] flex justify-center items-center text-white">
        {element.icon}
      </div> */}
      {getChildrenByType(children, ["StageDate"])}
      {getChildrenByType(children, ["StageTitle"])}
      {getChildrenByType(children, ["StageDescription"])}
      {getChildrenByType(children, ["StageFooter"])}
    </motion.div>
  );
});

export const MotionStageControl = motion(StageControl);
