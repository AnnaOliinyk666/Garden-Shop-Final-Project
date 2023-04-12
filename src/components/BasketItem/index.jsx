import React from 'react'

export default function BasketItem({title, price, discont_price,image}) {
  return (
    <div>
        <img src={image} alt={title} />
        <div>
            <p>{title}</p>
            <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
        </div>
        <p>{discont_price}<span>$</span></p>
        <p>{price}$</p>
        <button>x</button>
    </div>
  )
}
