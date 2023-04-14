import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'

export default function ProductsPage() {
  const {products} = useSelector(state => state)
  return (
    <div className={s.wrapper}>
      <h2>All products</h2>
      <form>
        <label htmlFor="priceValue">Price</label>
        <input name='priceValue' type="number" placeholder='from'/>
        <input name='priceValue' type="number" placeholder='to'/>
        <label htmlFor="discount">Discounted items</label>
        <input type="checkbox" name='discount' />
        <label htmlFor="sorted">Sorted</label>
        <select name="sorted" id="">
          <option value="1">price down</option>
          <option value="2">price up</option>
        </select>
      </form>
      <div className={s.wrap_product}>
          {
            products.map(item => <ProductItem key={item.id} {...item}/>)
          }
      </div>
    </div>
  )
}
