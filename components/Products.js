import React, { Fragment } from 'react'
import Product from './Product'
const Products = ({innerPage, headingText,products}) => {
  return (
    <Fragment>
        <div className='products-Container'>
           {!innerPage &&<div className='section-heading'>{headingText}</div>}
              <div className='products'>
                {products.data?
                 products.data.map((item)=>(
                    <Product key={item.id} id={item.id} data={item.attributes} />
                 ))
                :"loading"}
                 
              </div>
        </div>
    </Fragment>
  )
}

export default Products