import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketItem from '../../components/BasketItem';
// import { basketClearAction } from '../../store/reducer/basketReducer';
import s from './style.module.css'
import { Link } from 'react-router-dom';
import { basket_clear } from '../../store/slice/basketSlice';

export default function BasketPage() {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.list);
  const products = useSelector(state => state.products.list);
  const data = basket.map (item => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product};
  })
  function render() {
    if (products.length === 0) {
      return <p>LOADING ...</p>
    } else if (basket.length === 0) {
      return <p>Basket empty ...</p>
    } else {
      return <>
      {
        data.map(item => <BasketItem key={item.id} {...item}/>)
      }</>
    }
  }
  const totalPrice = (data.reduce((acc, {price,discont_price,count}) => 
    discont_price !== null
    ? acc + discont_price*count
    : acc + price*count,0)).toFixed(2)

    // const PostSaleURL = 'http://localhost:3333/sale/send';
    // const PostCall = async (e) => {
    //  e.preventDefault();
    //   try {
    //       const response = await fetch(PostSaleURL, {
    //        method: 'POST',
    //        body: JSON.stringify({
    //            id: Date.now(),
    //            phone: +e.target.phone.value
    //           })
    //        });
    //        const data = await response.json();
    //        console.log(data);
    //      } catch(error) {
    //         console.log(error)
    //        } 
    //     e.target.phone.value='';
    //   }
  

  return (
    <div>
      <div className={s.title}>
        <h2>Shopping cart</h2>
        
        <div>
        <Link to="/products/all">
          <p>Back to the store</p>
        </Link>
          <Link to="/products/all">
          <i class="las la-angle-right"></i>
        </Link>
        </div>
      </div>
      
      <div className={s.wrapper}>
        <div>
          {
            render()
          }
          
        </div>
        <div className={s.order_block}>
          <h4>Order details</h4>
          <div className={s.order_price}>
            <p>Total:</p>
            <div>{totalPrice} <span>$</span></div>
          </div>
          <form>
            <input type="text" placeholder='Phone number' />
            <button>Order</button>
          </form>
          
        </div>
        <button className={s.clear_btn} onClick={()=>dispatch(basket_clear())}>Clear basket</button>
      </div>
      <div></div>
    </div>
  )
}
