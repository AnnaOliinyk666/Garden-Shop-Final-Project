import React from 'react'
import bush from './bush.png'
import s from './style.module.css'

export default function NewSeasonSaleBanner() {
    
  return (
    <div className={s.wrapper}>
        <div>
            <h1>Sale</h1>
            <h2>New Season</h2>
            <button>Sale</button>
        </div>
        <img src={bush} alt="bush" />
    </div>
  )
}
