import React from 'react'
import CategorieItem from '../CategorieItem'
import { useSelector } from 'react-redux'
import s from './style.module.css'

export default function Catalog() {
    const categories = useSelector(store => store.categories)
    
  return (
    <div>
        <div className={s.block}>
            <h2>Catalog</h2>
            <button>All categories</button>
        </div>
        <div className={s.wrapper}>
            {
                categories.map(({id, ...item}) => id===5 ? '' : <CategorieItem key={id} {...item}/>)
            }
        </div>
        
        
    </div>
  )
}
