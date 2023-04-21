import React from 'react'
import bush from './bush.png'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import ProductsPage from '../../pages/ProductsPage'

export default function NewSeasonSaleBanner() {
    
  return (
    <div className={s.wrapper}>
        <div>
            <h1>Sale</h1>
            <h2>New Season</h2>
            <Link to='/products/sale' element={<ProductsPage/>}>Sale</Link>
        </div>
        <img src={bush} alt="bush" />
    </div>
  )
}
