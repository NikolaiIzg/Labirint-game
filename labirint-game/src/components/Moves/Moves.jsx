import React from 'react'
import style from './style.module.css'
import Direction from '../ Direction/Direction';


export default function Moves({ moves }) {
  

  return (
    <div className={style.moves}>
      {moves.map((el, i) => (
        <Direction key={el + i} arrow={el} />
      ))}
    </div>
  )
}
