import React from 'react'

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
    <div className="arrow">{text}</div>
  )
}
