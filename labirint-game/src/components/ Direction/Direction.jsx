import React from 'react'
import style from './style.module.css'

export default function Direction({arrow}) {

  let text;
  switch (arrow) {
    case "left":
      text = "⬅";
      break;
    case "right":
      text = "➡";
      break;
    case "up":
      text = "⬆";
      break;
    case "down":
      text = "⬇";
      break;
    default:
      console.log("Error");
    }

  return (
    <div className={style.arrow}>{text}</div>
  )
}
