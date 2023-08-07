import React, { Fragment,useContext } from 'react'
import {MdClose} from 'react-icons/md'
import {BsCartX} from 'react-icons/bs'
import CartItem from './CartItem'
import { Context } from '@/utils/Context'
import { loadStripe } from '@stripe/stripe-js'
import { makePaymentRequest } from '@/utils/api'
const Cart = ({setShowCart}) => {
  const {cartItems,cartSubTotal}=useContext(Context);
  const stripePromise=loadStripe("pk_test_51NC3QySG8yNASpxn1dfVy4d0DA1QN1wYCftjyMITtkGl4cmX3fVNmBvmmCq6r7sjmsmpULXxuFoKbWV5Z9waC5Zv00cUI4MzEb");
  const handlePayement=async ()=>{
       try {
        const stripe= await stripePromise;
        const res=await makePaymentRequest.post("/api/orders",{
           products:cartItems
        });
        await stripe.redirectToCheckout({
           sessionId:res.data.stripeSession.id,
        })
       } catch (error) {
          console.log(error);
          // return error;
       }
  }
  return (
   <Fragment>
      <div className='cart-panel'>
        cart
          <div className='opacity-layer'></div>
          <div className='cart-content'>
              <div className='cart-header'>
                   <span className='Heading'>
                       Shopping Cart
                   </span>
                   <span className='close-btn' onClick={()=>setShowCart(false)}>
                      <MdClose/>
                   </span>
                   <span className='cart-close'>Close</span>
              </div>
              {!cartItems?.length && 
                 <div className='empty-cart'>
                 <BsCartX/>
                 <span className='empty-cart-text' >No product in the Cart</span>
                 <button className='return-cta'>Return to Shop</button>
                </div>
              }
              {!!cartItems?.length && 
                 <Fragment>
                 <CartItem/>
                 <div className='cart-footer'>
                     <div className='subTotal'>
                         <span className='cart-footer-text '>Subtotal</span>
                         <span className='cart-footer-ruppess total'>&#8377;{cartSubTotal}</span>
                     </div>
                     <div className='subTotal-button'>
                          <button className='checkOut-cta' onClick={handlePayement}>CheckOut</button>
                     </div>
                 </div>
               </Fragment>
              }
          </div>
      </div>
   </Fragment>
  )
}

export default Cart