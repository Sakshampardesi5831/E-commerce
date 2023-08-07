
import React, { Fragment,useContext } from 'react'
import {MdClose} from 'react-icons/md'
import prod1 from '../public/prod-1.jpg'
import Image from 'next/image'
import { Context } from '@/utils/Context'
const CartItem = () => {
        const { cartItems, handleRemovefromCart,handleCartProductQuantity}=useContext(Context);
        console.log(cartItems);
        //item.attributes?.img?.data?.[0]?.attributes?.url
        const UrlBuilder=(src)=>{
          if(!src){
            return;
          }else{
            return `http://localhost:1337${src}`
          }
        }
  return (
    <Fragment>
      <div className='cartItem-products'>
          {cartItems.map((item)=>(
              <div key={item.id} className='cartItem-product'>
              <div className='img-container'>
                  <Image src={UrlBuilder(item.attributes?.img?.data?.[0]?.attributes?.url)} width={50} height={50} alt='product Image'/>
              </div>
              <div className='prod-details'>
                   <span className='prod-details-name'>{item.attributes.title}</span>
                   <MdClose onClick={()=>handleRemovefromCart(item)} className='prod-details-close-btn'/>
                   <div className="prod-details-quantity-buttons">
                          <span onClick={()=>handleCartProductQuantity("dec",item)}>-</span>
                          <span>{item.attributes.quantity}</span>
                          <span onClick={()=>handleCartProductQuantity("inc",item)}>+</span>
                     </div>
                   <div className='cartItems-prod-details-text'>
                       <span>{item.attributes.quantity}</span>
                       <span>x</span>
                       <span className='highlight'>&#8377;{item.attributes.price * item.attributes.quantity}</span>
                   </div>
                   {/* <span className='prod-details-price'></span> */}
              </div>
           </div>
          ))} 
      </div>
    </Fragment>
  )
}

export default CartItem