import React from 'react'
import s from './style.module.css'

export default function ProductItem({price,discont_price,image,title}) {
    const precent = (100-discont_price / price * 100).toFixed(2);
    const URL = 'http://localhost:3333/'
  return (
    <div className={s.wrapper}>
        <img className={s.img} src={`${URL}${image}`} alt="" />
        <p className={s.price}> <b className={s.newPrice}>{discont_price}$</b> <span className={s.oldPrice}>{price}$</span> <span className={s.percent}>-{precent}%</span></p>
        <p className={s.title}>{title}</p>
    </div>
  )
}
