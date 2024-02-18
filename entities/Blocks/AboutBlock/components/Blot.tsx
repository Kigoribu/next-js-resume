import React, { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IBlotProps extends HTMLMotionProps<"div"> {
  delay: number;
}

export const Blot: FC<IBlotProps> = ({ delay, className, ...other }) => {
  const blotAnimate = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        duration: 1,
        stiffness: 50,
        type: "spring",
        delay: delay,
      },
    },
  };
  return (
    <motion.div variants={blotAnimate} className={cn("", className)}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#62e3e3"
          d="M40.8,-58.9C54.6,-54.7,68.6,-46.2,76.9,-33.5C85.2,-20.9,87.7,-3.9,85.5,12.4C83.2,28.7,76.3,44.4,64.5,53.2C52.7,62,36,63.8,20.1,68.5C4.3,73.1,-10.8,80.4,-17.5,72.5C-24.2,64.6,-22.6,41.4,-30.4,28.5C-38.3,15.6,-55.7,13,-67.2,3.2C-78.8,-6.7,-84.5,-24,-80.8,-38.9C-77,-53.7,-63.8,-66.2,-48.8,-69.8C-33.7,-73.5,-16.9,-68.2,-1.7,-65.6C13.5,-63,27,-63.1,40.8,-58.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  );
};
