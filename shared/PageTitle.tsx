import React, { FC } from "react";

interface IPageTitleProps {
  title: string;
}

export const PageTitle: FC<IPageTitleProps> = ({ title }) => {
  return (
    <p className="absolute left-5 bottom-5 text-4xl font-extrabold text-gray-100 opacity-25">
      {title}
    </p>
  );
};
