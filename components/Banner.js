import React, { Fragment } from 'react'
import BannerImage from './BannerImage'
const Banner = () => {
  return (
    <Fragment>
       <div className='hero-Banner'>
          <div className='content'>
            <div className='text-content'>
               <h1>Sales</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate Lorem ipsum dolor sit amet. </p>
               <div className='ctas'>
                   <div className='banner-cta'>Read More</div>
                   <div className='banner-cta v2'>Shop Now</div>
               </div>
            </div>  
            <div className='image-content'>
            <BannerImage/>
            </div> 
          </div>
       </div>
    </Fragment>
  )
}

export default Banner