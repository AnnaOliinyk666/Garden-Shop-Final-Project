import React from 'react'
import gnome from './gnome.png'
import s from './style.module.css'

export default function FirstOrderSaleBanner() {
  const PostSaleURL = 'http://localhost:3333/sale/send';
  const PostCall = async (e) => {
   e.preventDefault();
    try {
        const response = await fetch(PostSaleURL, {
         method: 'POST',
         body: JSON.stringify({
             id: Date.now(),
             phone: +e.target.phone.value
            })
         });
         const data = await response.json();
         console.log(data);
       } catch(error) {
          console.log(error)
         } 
      e.target.phone.value='';
    }


  return (
    <div className={s.wrapper}>
        <img src={gnome} alt={gnome} />
        <div>
            <h2> <div>5% off</div>  on the first order</h2>
            <form onSubmit={PostCall} className={s.form}>
                <input name='phone' type="number" placeholder='49'/>
                <button>Get a discount</button>
            </form>
        </div>
    </div>
  )
}
