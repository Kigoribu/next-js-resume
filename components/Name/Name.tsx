import React, { FC } from 'react'
import styles from './name.module.scss'

interface NameProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode
}

export const Name:FC<NameProps> = ({children}) => {
  return (
    <div className={styles.name}>{children}</div>
  )
}
