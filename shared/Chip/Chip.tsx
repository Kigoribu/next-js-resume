import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes } from "react";

interface IChipProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
  color?: string;
}

export const Chip: FC<IChipProps> = ({
  children,
  color = "rgb(84, 140, 196)",
  className,
  ...other
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cn("rounded-full text-md text-white py-1 px-3", className)}
      {...other}
    >
      {children}
    </div>
  );
};
