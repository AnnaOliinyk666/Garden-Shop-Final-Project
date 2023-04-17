import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'
import { useParams } from 'react-router-dom'
import { productsSortPriceAction } from '../../store/reducer/productsReducer'

export default function ProductsPage() {
  const {products,categories} = useSelector(state => state)
  const {id,sale} = useParams();
  const prodByCategory = products.filter(item => item.categoryId === +id);
  const prodSale = products.filter(item => item.discont_price)
  const thisCategory = categories.find(item => item.id === +id)
  

  const dispatch = useDispatch();

  
  const [checkBoxStatus,setcheckBoxStatus] = useState(false)

  const sortOnChange = (e) => {
    
    dispatch(productsSortPriceAction(+e.target.value))
  }
  
  function title() {
    if (id) {
      return <h2>{thisCategory.title}</h2>
    } else if (sale) {
      return <h2>Products with sale</h2>
    } else {
      return <h2>All products</h2>
    }
  }
  function render() {
    if (id) {
      return prodByCategory.map(item => <ProductItem key={item.id} {...item}/>)
    } else if (sale) {
      return prodSale.map(item => <ProductItem key={item.id} {...item}/>)
    } else if(products === undefined){
      return <h4>LOADING ...</h4>
    } else {
      return products.map(item => <ProductItem key={item.id} {...item}/>)
    }
  }
  
  return (
    <div className={s.wrapper}>
      {
        title()
      }
      
      <div>
        <label htmlFor="priceValue">Price</label>
        <input name='priceValue' type="number" placeholder='from'/>
        <input name='priceValue' type="number" placeholder='to'/>
        
        {
          sale === undefined
          ? <>
          <label htmlFor="discount">Discounted items</label>
          <input onChange={()=>{setcheckBoxStatus(!checkBoxStatus)}} type="checkbox" checked={checkBoxStatus} name='discount' />
          </>
          :''
        }
        
        <label htmlFor="price">Sorted</label>
        <select onChange={sortOnChange} name="price">
          <option value="1">low</option>
          <option value="2">high</option>
        </select>
      </div>
      <div className={s.wrap_product}>
          {
            render()
          }
      </div>
    </div>
  )
}
