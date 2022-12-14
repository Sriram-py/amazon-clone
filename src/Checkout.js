import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg" alt=""/>

          <div className='checkout__title'>

           <h2>Your Shopping Basket </h2>
            {basket.map(item =>(
              <CheckoutProduct
               id={item.id}
               image={item.image}
               title={item.title}
               price={item.price}
               rating={item.rating}
              
              />
            ))}
              {/*BasketItem */}
              {/*BasketItem */}
              {/*BasketItem */}
              

          </div>

      </div>
      

      <div className='checkout__right'>
        <Subtotal />

      </div>
        

    </div>
  )
}

export default Checkout