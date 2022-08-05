import React from 'react'
import './style.css';

export default function Row(props) {
  console.log(1111111111, props);
  return (
    <div className="row">{props.children}</div>
  )
}
