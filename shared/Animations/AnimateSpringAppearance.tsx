import React, { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface IAnimateSpringAppearanceProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: JSX.Element;
}

export const AnimateSpringAppearance: FC<IAnimateSpringAppearanceProps> = ({
  delay = 0,
  children,
  ...other
}) => {
  const animationVariants = {
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
    <motion.div variants={animationVariants} className="content" {...other}>
      {children}
    </motion.div>
  );
};
