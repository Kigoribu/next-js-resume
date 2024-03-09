import React, { Children, FC, ReactElement, ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { typeOfComponent } from "@/lib/getChildrenByType";
import { cn } from "@/lib/utils";

interface IAnimateAppearanceTextByWordProps {
  delay?: number;
  speedOffset?: number;
  children?: ReactNode;
}

export const AnimateAppearanceTextByWord: FC<IAnimateAppearanceTextByWordProps> = ({
  delay = 0,
  speedOffset = 0.05,
  children,
}) => {
  const localDelay = useRef(0);
  const wordAnimante = {
    hidden: {
      y: `0.25em`,
      opacity: 0,
    },
    show: (custom: number = 0.1) => ({
      y: `0em`,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: custom * speedOffset + delay,
      },
    }),
  };

  return (
    <>
      {Children.map(children, (child: any) => {
        if (typeOfComponent(child) === "span") {
          localDelay.current += 1;
          return (
            <motion.span
              aria-hidden="true"
              initial="hidden"
              whileInView="show"
              variants={wordAnimante}
              custom={localDelay.current}
              className={cn("inline-block", child?.props?.className)}
            >
              {child?.props?.children + " "}
            </motion.span>
          );
        } else {
          return child
            ?.toString()
            .trim()
            .split(" ")
            .map((word: string, i: number) => {
              localDelay.current += 1;
              return (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  custom={localDelay.current}
                  initial="hidden"
                  whileInView="show"
                  variants={wordAnimante}
                  className="inline-block"
                >
                  {word + " "}
                </motion.span>
              );
            });
        }
      })}
    </>
  );
};
