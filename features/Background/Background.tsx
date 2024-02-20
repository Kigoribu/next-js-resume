"use client";
import React, { useContext, useEffect } from "react";
import { animate, motion } from "framer-motion";
import { PageContext } from "../FullPageScroll/context/PageContext";
import { useMotionValue, useTransform } from "framer-motion";

const colors = ["#fff", "#6b21a8", "#0B879F", "#114195"];

export const Background = () => {
  const { pageNum } = useContext(PageContext);
  const progress = useMotionValue(pageNum);
  const color = useTransform(progress, [0, 1, 2, 3], colors);

  useEffect(() => {
    const animation = animate(progress, pageNum, {
      duration: 1,
      ease: "easeInOut",
    });
    return () => animation.stop();
  }, [pageNum, progress]);

  return <motion.div className="fixed h-screen w-screen" style={{ backgroundColor: color }} />;
};
