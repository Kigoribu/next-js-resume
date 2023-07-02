import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from '@/components/Navbar/Navbar'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import { Header } from '@/components/Header/Header'
import personalPhoto from '../photos/mohammad-rahmani-F6039SWvBp0-unsplash.jpg'
import { Name } from '@/components/Name/Name'

export default function Home() {
  return (
    <>
      <Header>
          <Name><div>Kigoribu</div></Name>
          <Navbar labels={["О себе", "Навыки", "Проекты"]} />
      </Header>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.content_name}>
            Кирилл Горбунов
          </h2>
          <h3 className={styles.content_surname}>
            Фронтэнд разработчик<br />
          </h3>
        </div>
        <div style={{ height: '200vh' }}></div>
      </div>
    </>
  )
}
