import { motion } from "framer-motion";
import React, { ButtonHTMLAttributes, FC, ReactElement, forwardRef } from "react";

interface IMyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement;
}

const MyButton: FC<IMyButton> = forwardRef(function MyButton({ children, ...other }, ref: any) {
  return (
    <button {...other} ref={ref}>
      {children}
    </button>
  );
});

export const MotionMyButton = motion(MyButton);
