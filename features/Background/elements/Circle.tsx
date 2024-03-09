"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { PageContext } from "@/features/FullPageScroll/context/PageContext";

const variants = {
  0: {
    r: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  1: {
    cx: 5,
    cy: 40,
    r: 50,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  2: {
    cx: 50,
    cy: 10,
    r: 50,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  3: {
    cx: 50,
    cy: 50,
    r: 50,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const Circle = () => {
  const { pageNum } = useContext(PageContext);

  const animate: any = () => {
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

  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="opacity-10 absolute">
      <motion.circle variants={variants} initial="0" animate={animate} fill="#000000" />
    </svg>
  );
};
