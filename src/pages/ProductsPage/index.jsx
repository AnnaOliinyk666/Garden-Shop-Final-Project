import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'
import { useParams } from 'react-router-dom'
import {  filterByPriceFrom, filterByPriceTo, resetFilter, showSale, sortFilter } from '../../store/slice/productsSlice'



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
      const prodByCategory = productsSel.filter(item => item.categoryId === +params.id);
      
      const thisCategory = categoriesSel.find(item => item.id === +params.id)
      setProductsStatus(prodByCategory)
      setCategoriesStatus(thisCategory)
    } else if (params.sale) {
      const prodSale = productsSel.filter(item => item.discont_price)
     setProductsStatus(prodSale)
      setCategoriesStatus([]) 
    }else if(products === undefined){
      return <h4>LOADING ...</h4>
    } else {
     setProductsStatus(productsSel)
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



  if (params.sale) {
    if (params.sale !== 'sale') {
      return window.location.replace(
        "http://localhost:3000/error"
      );
    }
  } else if (params.id){
    if (params.id > categoriesSel.length || params.id < 1) {
      return window.location.replace(
        "http://localhost:3000/error"
      );
    }
  } else if (params.all) {
    if (params.all !== 'all') {
      return window.location.replace(
        "http://localhost:3000/error"
      );
    }
  }
  return (
    <div className={s.wrapper}>
      {
        title()
      }
      
      <div className={s.filterBar}>
        <div className={s.filterPrice}>
          <label htmlFor="priceValue">Price</label>
          <input onChange={(e)=> dispatch(filterByPriceFrom(+e.target.value))} name='priceValueFrom'  type="number" placeholder='from'/>
          <input onChange={(e)=> dispatch(filterByPriceTo(+e.target.value))} name='priceValueTo' type="number" placeholder='to'/>
        </div>
        
        
        {
          params.sale === undefined
          ? <div>
          <label htmlFor="discount">Discounted items</label>
          <input onChange={()=> checkboxOnChange(!checkBoxStatus)} type="checkbox" checked={checkBoxStatus} name='discount' />
          </div>
          :''
        }
        <div>
          <label htmlFor="price">Sorted</label>
          <select onChange={sortOnChange} name="price">
            <option value="1">low</option>
            <option value="2">high</option>
          </select>
        </div>
        
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
