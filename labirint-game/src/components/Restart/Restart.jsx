import React from 'react'
import style from './style.module.css'

export default function Restart({restart}) {
  return (
    <div className={style.empty}>
      <button onClick={restart} className={style.button}>
        RESTART
      </button>
    </div>
  )
}
