import React, { FC, ReactHTMLElement } from 'react'
import styles from './header.module.scss'

interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement>{
  children: React.ReactNode
}

export const Header:FC<HeaderProps> = ({children}) => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header}>
        {children}
      </div>
      <hr/>
    </header>
  )
}
