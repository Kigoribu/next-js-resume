"use client";
import React, { useContext, useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { PageContext } from "@/features/FullPageScroll/context/PageContext";

const variants = {
  0: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  1: {
    pathLength: 1,
    cx: 95,
    cy: 20,
    r: 30,
    opacity: 1,
    transition: {
      pathLength: {
        delay: 1,
        duration: 2,
      },
      duration: 1,
    },
  },
  2: {
    pathLength: 1000,
    cx: 50,
    cy: 20,
    r: 40,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  3: {
    pathLength: 1000,
    cx: 50,
    cy: 25,
    r: 40,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const colors = ["#fff", "#DE4FB3", "#3491AC", "#4475CA"];

export const Lines = () => {
  const { pageNum } = useContext(PageContext);
  const progress = useMotionValue(pageNum);
  const color = useTransform(progress, [0, 1, 2, 3], colors);

  const animateVariants: any = () => {
    switch (pageNum) {
      case 0:
        return "0";
      case 1:
        return "1";
      case 2:
        return "2";
      case 3:
        return "3";
    }
    return "0";
  };

  useEffect(() => {
    const animation = animate(progress, pageNum, {
      duration: 1,
      ease: "easeInOut",
    });
    return () => animation.stop();
  }, [pageNum, progress]);

  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="opacity-100 absolute">
      <motion.circle
        variants={variants}
        initial="0"
        animate={animateVariants}
        strokeWidth={0.1}
        fill="none"
        stroke={color}
      />
    </svg>
  );
};
