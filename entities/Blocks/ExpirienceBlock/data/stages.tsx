import { GiBookmarklet } from "react-icons/gi";
import { IoBriefcase } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";

export interface IExpiriensStages {
  date: string;
  title: string;
  description: string;
  roles?: string[];
  technologies?: string[];
  icon: JSX.Element;
}

export const expiriensStages: IExpiriensStages[] = [
  {
    date: "2017 - 2021",
    title: `РТУ МИРЭА. Специальность "Информационная безопасность"`,
    description: `Получил фундаментальные знания в области сетей, программирования, информационной безопасности и информационных технологий. Результатом моего обучения была дипломная работа, на тему "Реализация безопасного удаленного доступа к локальной вычислительной сети предприятия", где я использовал эмулятор сети GNS3, клиентское приложение для входа в систему, написанное на C# и оборудование MikroTik для настройки сети.`,
    roles: ["Студент"],
    technologies: ["C++", "C#", "GNS3", "AstraLinux", "JavaScript", "HTML"],
    icon: <GiBookmarklet style={{ width: "100%", height: "100%" }} />,
  },
  {
    date: "2021 - 2024",
    title: "Компания Servicepipe. Frontend-разработчик",
    description:
      "С нуля разработал проект личного кабинета, прорабытывал бизнес-логику для получения клиентом данных из внутренних систем. Занимался разработкой внутренних проектов компании. Помимо React также в меньшей мере имел опыт работы с CMS Bitrix и Tilda. Внедрил в отдел практику CI/CD, построенную на использовании Docker и Gitea Actions. Принимал непосредственное участие в обсуждении проектов бизнеса для формирования ТЗ для отдела.",
    roles: ["Frontend-разработчик", "Дизайнер"],
    technologies: [
      "JavaScipt",
      "TypeScript",
      "Docker",
      "HTML",
      "CSS",
      "SASS",
      "Tilda",
      "Bitrix",
      "MUI",
      "Git",
    ],
    icon: <IoBriefcase style={{ width: "100%", height: "100%" }} />,
  },
  {
    date: "2024 - ...",
    title: "Готов рассмотреть ваши предложения 🤝",
    description: "",
    icon: <MdOutlineSearch style={{ width: "100%", height: "100%" }} />,
  },
];
