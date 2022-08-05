import React from 'react'
import './style.css'

export default function Restart({restart}) {
  return (
    <div className="empty">
      <button onClick={restart} className="button">
        RESTART
      </button>
    </div>
  )
}
