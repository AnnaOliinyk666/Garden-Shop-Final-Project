import React from 'react'
import gnome from './gnome.png'
import s from './style.module.css'

export default function FirstOrderSaleBanner() {
  return (
    <div className={s.wrapper}>
        <img src={gnome} alt={gnome} />
        <div>
            <h2> <div>5% off</div>  on the first order</h2>
            <form className={s.form}>
                <input type="number" placeholder='+49'/>
                <button>Get a discount</button>
            </form>
        </div>
    </div>
  )
}
