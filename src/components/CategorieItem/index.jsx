import React from 'react'
import s from './style.module.css'

export default function CategorieItem({image,title}) {
    const URL = 'http://localhost:3333/'
  return (
    <div>
        <img className={s.img} src={`${URL}${image}`}  alt={title}/>
        <p>{title}</p>
    </div>
  )
}
