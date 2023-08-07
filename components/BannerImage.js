import React from 'react'
import Image from 'next/image'
import banner from '../public/banner.png'
const BannerImage = () => {
  return (
    <div className='bannerImage'>
         <Image
           src={banner}
           width={450}

           alt='image'
         />
    </div>
  )
}

export default BannerImage