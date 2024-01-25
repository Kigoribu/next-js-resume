import { GiBookmarklet } from "react-icons/gi";
import { IoBriefcase } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";

export interface IExpiriensStages {
  date: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

export const expiriensStages: IExpiriensStages[] = [
  {
    date: "2017 - 2021",
    title: `Российский Технологический Университет МИРЭА. Специальность "Информационная безопасность"`,
    description:
      "Получил фундаментальные знания в области программирования и информационной безопасности, которые мне помогли при более детальном изучении программирования",
    icon: <GiBookmarklet style={{ width: "100%", height: "100%" }} />,
  },
  {
    date: "2021 - 2024",
    title: "Компания Servicepipe. Frontend-разработчик",
    description: "",
    icon: <IoBriefcase style={{ width: "100%", height: "100%" }} />,
  },
  {
    date: "2024 - ...",
    title: "Готов рассмотреть ваши предложения 🤝",
    description: "",
    icon: <MdOutlineSearch style={{ width: "100%", height: "100%" }} />,
  },
] as const;
