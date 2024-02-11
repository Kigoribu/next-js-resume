import React, { FC, ReactNode, forwardRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { getChildrenByType } from "../../../app/utils/getChildrenByType";
import { cn } from "@/lib/utils";

interface IStageControlProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export const StageControl: FC<IStageControlProps> = forwardRef(function Stage(
  { children, className, ...other },
  ref: any
) {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex flex-col justify-center p-4 pointer-events-none whitespace-pre-wrap",
        className
      )}
      {...other}
    >
      {getChildrenByType(children, ["StageDate"])}
      {getChildrenByType(children, ["StageTitle"])}
      {getChildrenByType(children, ["StageDescription"])}
      {getChildrenByType(children, ["StageFooter"])}
    </motion.div>
  );
});

export const MotionStageControl = motion(StageControl);
