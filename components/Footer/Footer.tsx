import React from "react";
import styles from "./footer.module.css";
import { Contact } from "./components/Contact";

export const Footer = () => {
  return (
    <div className="bg-[#090c18] h-36 flex items-center justify-center text-white gap-10 mt-20">
      <Contact />
      <Contact />
    </div>
  );
};
