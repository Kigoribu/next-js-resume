import React from "react";
import { FaGithubAlt } from "react-icons/fa";

export const GitHub = () => {
  return (
    <a
      className="fixed max-md:right-12 max-md:top-10 md:bottom-12 md:left-12 text-white hover:text-cyan-200 cursor-pointer z-50"
      href="https://github.com/Kigoribu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithubAlt size={48} />
    </a>
  );
};
