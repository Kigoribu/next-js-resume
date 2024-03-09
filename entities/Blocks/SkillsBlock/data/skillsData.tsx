import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

interface ISkillBlockData {
  title: string;
  icon: JSX.Element;
}

export const skillsData: ISkillBlockData[] = [
  { title: "React", icon: <FaReact style={{ width: "100%", height: "100%" }} /> },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript style={{ width: "100%", height: "100%" }} />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript style={{ width: "100%", height: "100%" }} />,
  },
  { title: "HTML", icon: <FaHtml5 style={{ width: "100%", height: "100%" }} /> },
  { title: "CSS", icon: <FaCss3 style={{ width: "100%", height: "100%" }} /> },
  { title: "Sass", icon: <FaSass style={{ width: "100%", height: "100%" }} /> },
  {
    title: "NextJS",
    icon: <SiNextdotjs style={{ width: "100%", height: "100%" }} />,
  },
  { title: "Redux", icon: <SiRedux style={{ width: "100%", height: "100%" }} /> },
  {
    title: "MaterialUI",
    icon: <SiMui style={{ width: "100%", height: "100%" }} />,
  },
  { title: "Git", icon: <FaGithub style={{ width: "100%", height: "100%" }} /> },
  {
    title: "Docker",
    icon: <FaDocker style={{ width: "100%", height: "100%" }} />,
  },
  {
    title: "Photoshop",
    icon: <SiAdobephotoshop style={{ width: "100%", height: "100%" }} />,
  },
  { title: "Figma", icon: <FaFigma style={{ width: "100%", height: "100%" }} /> },
];
