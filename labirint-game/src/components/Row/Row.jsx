import React from 'react'
import style from'./style.module.css';

export default function Row(props) {
  return (
    <div className={style.row}>{props.children}</div>
  )
}
