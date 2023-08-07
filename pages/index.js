import React, { Fragment,useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import HeaderNav from '@/components/Header';
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
const index = () => {
  
  const router=useRouter();
  return (
    <Fragment>
      <HeaderNav/>
      <Home/>
      <Footer/>
    </Fragment>
  )
}

export default index