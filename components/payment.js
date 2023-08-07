import React, { Fragment } from 'react'
import Image from 'next/image'
import paymentPic from '../public/payments.png'
const Payment = () => {
  return (
   <Fragment>
     <Image
      src={paymentPic}
      width={200}
      height={20}
      alt='payment pic'
     />
   </Fragment>
  )
}

export default Payment