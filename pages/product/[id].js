import React, { Fragment } from 'react'
import HeaderNav from '@/components/Header';
import Footer from '@/components/Footer';
import SingleProduct from '@/components/SingleProduct/SingleProduct';
import { useRouter } from 'next/router';

const SingleProductId = () => {
  const router=useRouter();
  const {id}=router.query;
  return (
    <Fragment>
     <HeaderNav/>
     <SingleProduct id={id} />
     <Footer/>
    </Fragment>
  )
}

export default SingleProductId