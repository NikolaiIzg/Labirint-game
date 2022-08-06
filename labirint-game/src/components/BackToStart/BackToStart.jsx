import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'

export default function BackToStart() {
  return (
    <div className={style.buttonBack}>
      <Link className={style.buttonBackStart} to='/'>Вернуться к правилам</Link>
    </div>
  )
}
