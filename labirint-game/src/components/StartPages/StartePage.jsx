import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function StartePage() {

  return (
    <>
    <div>
      <h1>Правила игры</h1>
      <p>
        Для победы нужно указать правильный ответ. 
        < br />
        "Пройди" в уме лабиринт и укажи конечную точку. 
        < br />
        Старт начинается от 🏁. При верном ответе выходит 👍.
        < br />
        При неверном покажется 🤬. А 🤭 укажет, где был верный ответ.
        < br />
        < br />
        Удачи, у тебя всё получится 😘
      </p>
    </div>
    <div className='startGame'>
      <Link className='buttonGame' to="/game">В игру</Link>
    </div>
    </>
  )
}
