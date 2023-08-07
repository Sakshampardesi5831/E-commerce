import React, { Fragment } from 'react'
import prod1 from '../public/prod-1.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
const Product = ({id,data}) => {
    const router=useRouter();
   console.log(data);
  const UrlBuilder=(src)=>{
    return `http://localhost:1337${src}`
  }

  return (
    <Fragment>
         <div className='product-card' onClick={()=>router.push(`/product/${id}`)}>
             <div className='thumbNail'>
                <Image src={UrlBuilder(data.img.data[0].attributes.url)} width={250} height={250} alt='product img'/>
             </div>
             <div className='prod-details'>
                 <span className='name'>{data.title}</span>
                 <span className='price'>&#8377; {data.price}</span>
             </div>
         </div>
    </Fragment>
  )
}

export default Product