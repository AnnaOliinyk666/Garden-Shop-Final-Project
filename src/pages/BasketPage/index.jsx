import React from 'react'

export default function BasketPage() {
  return (
    <div>
      <h2>Shopping cart</h2>
      <div>
        <p>Back to the store</p>
        <i class="las la-angle-right"></i>
      </div>
      <div>
        <div>baskItem</div>
        <div>
          <h4>Order details</h4>
          <div>
            <p>total</p>
            <p>3077,00$</p>
          </div>
          <form>
            <input type="text" placeholder='Phone number' />
            <button>Order</button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  )
}
