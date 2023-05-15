import React from 'react'
import { useDispatch } from 'react-redux'
// import { basketDecrementAction, basketIncrementAction, basketRemoveAction } from '../../store/reducer/basketReducer';
import s from './style.module.css'
import { basket_decrement, basket_increment, basket_remove } from '../../store/slice/basketSlice';
import { Link } from 'react-router-dom';

export default function BasketItem({id,title, price, discont_price,image,count}) {
  const dispatch = useDispatch();
  const URL = 'http://localhost:3333/'
  return (
    <div className={s.wrapper}>
      <Link to={`/product/${id}`}>
      <img src={`${URL}${image}`} alt={title} />
      </Link>
        
        <div className={s.name_count_block}>
            <p className={s.title}>{title}</p>
            <div className={s.btnDecr}>
                <button onClick={()=>dispatch(basket_decrement(id))}>-</button>
                <p>{count}</p>
                <button onClick={()=>dispatch(basket_increment(id))}>+</button>
            </div>
        </div>
        {
          discont_price != null
          ?<><p className={s.price}>{discont_price}<span>$</span></p>
          <p className={s.oldPrice}>{price}$</p></> 
          : <p className={s.price}>{price}$</p>
        }
        
        <button className={s.del_btn} onClick={()=>dispatch(basket_remove(id))}>x</button>
    </div>
  )
}
