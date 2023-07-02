"use client"
import React, { FC } from 'react'
import { motion } from 'framer-motion';
import styles from './progressBar.module.scss'

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement>{
  title: string;
  progress: 10|20|30|40|50|60|70|80|90|100
}

const ProgressBar: FC<ProgressBarProps> = ({title,progress,...other}) => {
  return (
    <div {...other} className={styles.wrapper}>
      <div className={styles.bar}>
        <motion.div
          initial={{width:0}}
          animate={{width:progress+"%"}}
          transition={{duration: 1}}
          className={styles.bar_progress}
          style={{
            width: progress + '%'
          }}
        />
      </div>
      <div className={styles.title}>
        {title} 
      </div>
    </div>
  )
}

export default ProgressBar
