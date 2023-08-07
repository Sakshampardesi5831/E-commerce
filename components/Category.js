import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import cat1 from '../public/cat-1_1.png'
import cat2 from '../public/cart-2.jpg'
import cat3 from '../public/cart-3.jpg'
import cat4 from '../public/cart-4.jpg'
import cat5 from '../public/cart-5.jpg'
const Category = ({categories}) => {
  const router=useRouter();
    // console.log(categories);
    const UrlBuilder=(src)=>{
         return `http://localhost:1337${src}`
    }
  return (
    <Fragment>
      <div className='shop-by-category'>
          <div className='categories'>
            {categories.data ? categories.data.map((item)=>( 
               <div key={item.id} className='category' onClick={()=>router.push(`/category/${item.id}`)}>
               <Image  src={UrlBuilder(item.attributes.img.data.attributes.url)}  width={250} height={200} alt='earphone'/>
                </div>
            )) :"loading"}    
          </div>
      </div>
    </Fragment>
  )
}

export default Category