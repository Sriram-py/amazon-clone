import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function Checkoutproduct({id,title,image,price,rating}) {
  const[{basket},dispatch]= useStateValue();
   const removefromBasket = () =>{
       dispatch({
        type: 'REMOVE_FROM_BASKET',
        id:id,
       })
   }

  return (
    <div className='checkoutProduct'>
       <img className='checkoutProduct__image' src={image} />

       <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>
            {title}
        </p>
        <p className='checkoutProduct__price'>
            <small>&#8377;</small>
            <strong>{price}</strong>

        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating).fill().map((_,i)=>(<p>&#11088;</p>))}

        </div>

        <button onClick={removefromBasket}> Remove from basket</button>

       </div>
       

    </div>
  )
}

export default Checkoutproduct