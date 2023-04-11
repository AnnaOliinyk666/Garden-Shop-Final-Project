import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.png'
import basketImg from './Vector_basket.png'
import s from './style.module.css'

export default function Header() {
    const checkClass = ({isActive}) => isActive? s.active:'';
  return (
    <div className={s.wrapper}>
        <div className={s.logoBlock}>
            <img src={logo} alt="logo" />
            <Link className={s.category} to='/categories'>Catalog</Link>
            {/* <button>Catalog</button> */}
        </div>
        <div className={s.navBlock}>
            <nav className={s.nav}>
                <NavLink className={checkClass} to='/'>Main Page</NavLink>
                <NavLink className={checkClass} to='/products/all'>All products</NavLink>
                <NavLink className={checkClass} to='/products/sale'>All sales</NavLink>
            </nav>
            <Link to='/basket'><img src={basketImg} alt="basket" /></Link>
            
        </div>   
    </div>
  )
}
