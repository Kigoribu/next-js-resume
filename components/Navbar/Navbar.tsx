import React from 'react'
import styles from './navbar.module.scss'

type NavbarProps = {
  labels: string[]
}

export const Navbar = ({labels}: NavbarProps) => {
  return (
      <nav className={styles.nav_container}>
        <ul>
          {labels.map((label)=>{
            return (
              <li className={styles.nav_list_elem}>{label}</li>
            )
          })}
        </ul>
      </nav>
  )
}
