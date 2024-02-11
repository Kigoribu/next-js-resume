import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes, ReactNode, forwardRef } from "react";

interface IStageDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const StageDescription: FC<IStageDescriptionProps> = forwardRef<
  HTMLParagraphElement,
  IStageDescriptionProps
>(({ children, className, ...other }, ref) => {
  return (
    <div
      className={cn("text-lg font-light text-violet-100 whitespace-pre-wrap", className)}
      {...other}
      ref={ref}
    >
      {children}
    </div>
  );
});

StageDescription.displayName = "StageDescription";
