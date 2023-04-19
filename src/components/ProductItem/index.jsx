import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
// import { basketAddAction } from '../../store/reducer/basketReducer';
import { Link } from 'react-router-dom';
import { basket_add } from '../../store/slice/basketSlice';

export default function ProductItem({id,price,discont_price,image,title}) {
    const precent = (100-discont_price / price * 100).toFixed(2);
    const URL = 'http://localhost:3333/'
    const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div>
        <Link to={`/products/${id}`}>
          <img className={s.img} src={`${URL}${image}`} alt="" />
        </Link>
          <button className={s.btn} onClick={() => dispatch(basket_add(id))}><i class="las la-cart-plus"></i></button> 
      </div>
        
        {
          discont_price !== null
          ? <p className={s.price}> <b className={s.newPrice}>{discont_price}$</b> <span className={s.oldPrice}>{price}$</span> <span className={s.percent}>-{precent}%</span></p>
          : <p className={s.price}> <b className={s.newPrice}>{price}$</b></p>
        }
        
        <p className={s.title}>{title}</p>
    </div>
  )
}
