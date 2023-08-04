import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { Header } from "@/components/Header/Header";
import personalPhoto from "../photos/mohammad-rahmani-F6039SWvBp0-unsplash.jpg";
import { Name } from "@/components/Name/Name";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header>
        <Name>
          <div>Kigoribu</div>
        </Name>
        <Navbar labels={["О себе", "Навыки", "Проекты"]} />
      </Header>
      <div className="container mx-auto px-[250px]">
        <div className="grid grid-cols-2 text-white min-h-screen mt-20">
          <div className="text-white">
            <div className={styles.content_name}>Кирилл Горбунов</div>
            <div className={styles.content_surname}>Фронтэнд разработчик</div>
          </div>
          <div className="text-sm font-normal">
            Я стремлюсь к построению эффективных и высококачественных пользовательских интерфейсов, используя передовые технологии и методики разработки. Мне нравится совместная работа в команде и
            принятие участия в увлекательных проектах. Я готов к новым вызовам и продолжаю расширять свои знания и навыки в области фронтенд разработки. Если вы ищете талантливого и ответственного
            фронтенд разработчика, я буду рад обсудить возможности сотрудничества.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
