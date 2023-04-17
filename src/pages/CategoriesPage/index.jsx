import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import CategorieItem from '../../components/CategorieItem'

export default function CategoriesPage() {
    const categories = useSelector(store => store.categories)
  return (
    <div>
        <h2 className={s.title}>Categories</h2>
        <div className={s.wrapper}>
            {
                categories.map((item) => <CategorieItem key={item.id} {...item}/>)
            }
        </div>
    </div>
  )
}
