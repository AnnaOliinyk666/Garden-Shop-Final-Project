import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'
import { useParams } from 'react-router-dom'
import {  filterByCategory, filterByPriceFrom, filterByPriceTo, resetFilter, showSale, sortFilter } from '../../store/slice/productsSlice'



export default function ProductsPage() {
  const productsSel = useSelector(state => state.products.list)
  const categoriesSel = useSelector(state => state.categories.list)
  const [products,setProductsStatus] = useState(productsSel)
  const [categories,setCategoriesStatus] = useState([]);
  const [checkBoxStatus,setcheckBoxStatus] = useState(false)
 
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    if (params.id) {
      // dispatch(filterByCategory(params.id))
      const prodByCategory = productsSel.filter(item => item.categoryId === +params.id);
      
      const thisCategory = categoriesSel.find(item => item.id === +params.id)
      setProductsStatus(prodByCategory)
      setCategoriesStatus(thisCategory)
      // if(checkBoxStatus === true){
      //   const newProductSale = prodByCategory.filter(item => item.discont_price)
      //   setProductsStatus(newProductSale)
      // }
    } else if (params.sale) {
      const prodSale = productsSel.filter(item => item.discont_price)
     setProductsStatus(prodSale)
      // dispatch(showSale())
      setCategoriesStatus([]) 
    // } else if (checkBoxStatus === true) {
      
    //   const prodSale = productsSel.filter(item => item.discont_price)
    //   setProductsStatus(prodSale)
    //   setCategoriesStatus([])
    }else if(products === undefined){
      return <h4>LOADING ...</h4>
    } else {
     setProductsStatus(productsSel)
      // dispatch(resetFilter())
      setCategoriesStatus([])
    }
  }, [params,categoriesSel,productsSel])
  
  
 
  
  

  

  

  

  const sortOnChange = (e) => {
    dispatch(sortFilter(+e.target.value))
    setProductsStatus(productsSel)
  }

  const checkboxOnChange = (checkBoxStatus) => {
    setcheckBoxStatus(checkBoxStatus);
    if (checkBoxStatus) {
      dispatch(showSale());
    } else {
      dispatch(resetFilter())
    }
   
  }
  
  function title() {
    if (params.id) {
      if (categories === undefined) {
        return <h2>Loading ...</h2>
      } else {
        return <h2>{categories.title}</h2>
      }
    } else if (params.sale) {
      return <h2>Products with sale</h2>
    } else {
      return <h2>All products</h2>
    }
  }

  
  
  return (
    <div className={s.wrapper}>
      {
        title()
      }
      
      <div>
        <label htmlFor="priceValue">Price</label>
        <input onChange={(e)=> dispatch(filterByPriceFrom(+e.target.value))} name='priceValueFrom'  type="number" placeholder='from'/>
        <input onChange={(e)=> dispatch(filterByPriceTo(+e.target.value))} name='priceValueTo' type="number" placeholder='to'/>
        
        {
          params.sale === undefined
          ? <>
          <label htmlFor="discount">Discounted items</label>
          <input onChange={()=> checkboxOnChange(!checkBoxStatus)} type="checkbox" checked={checkBoxStatus} name='discount' />
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
            products === undefined
            ? <h4>LOADING ...</h4>
            : products
            .filter(({show_priceFrom}) => show_priceFrom )
            .filter(({show_priceTo}) => show_priceTo )
            .filter(({show_sale}) => show_sale)
            .map(item => <ProductItem key={item.id} {...item}/>)
          }
      </div>
    </div>
  )
}
