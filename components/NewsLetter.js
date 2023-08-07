import React, { Fragment } from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa'
const NewsLetter = () => {
  return (
    <Fragment>
      <div className='newsletter-section'>
         <div className='newsletter_section-content'>
             <span className="small-text">NewsLetter</span>
             <span className='big-text'>Sign Up for Latest Update and Offers</span>
             <div className='form'>
               <input type="text" placeholder='Email' />
               <button>Subscribe</button>
             </div>
             <div className='text'>Will be used in Accordance with our privacy policy</div>
             <div className='social-icons'>
                 <div className='icons'>
                    <FaFacebook size={14}/>
                 </div>
                 <div className='icons'>
                   <FaInstagram size={14}/>
                 </div>
                 <div className='icons'>
                  <FaLinkedin size={14} />
                 </div>
                 <div className='icons'>
                   <FaTwitter size={14} />
                 </div>
             </div>
         </div>
      </div>
    </Fragment>
  )
}

export default NewsLetter