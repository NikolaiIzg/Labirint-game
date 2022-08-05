import React from 'react'
import Direction from '../ Direction/Direction';


export default function Moves({moves}) {

  console.log(moves);
  return (
    <div className="moves">
      {moves.map((el, i) => (
        <Direction key={el + i} arrow={el} />
      ))}
    </div>
  )
}
