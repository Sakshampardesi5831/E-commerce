import React, { Fragment } from 'react'
import { useState,useEffect,useContext } from 'react'
import {TbSearch} from 'react-icons/tb'
import {CgShoppingCart} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'
import Search from './Search'
import Cart from './Cart'
import { useRouter } from 'next/router'
import { Context } from '@/utils/Context'
const HeaderNav = () => {
  const [scrolled,setScrolled]=useState(false);
  const [showCart,setShowCart]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  const {cartCount}=useContext(Context);
  const router=useRouter();
  const handleScroll=()=>{
    const onscroll=window.scrollY;
    // console.log(onscroll);
    if(onscroll>200){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }
  useEffect(()=>{
      window.addEventListener("scroll",handleScroll);
  },[handleScroll])
  return (
   <Fragment>
      <header className={`main-header ${scrolled ? 'sticky-header':''}`}>
          <div className="header-content">
            <ul className='left'>
              <li onClick={()=>router.push("/")}>Home</li>
              <li>About</li>
              <li>Other</li>
            </ul>
            <div className='header_content-logo'onClick={()=>router.push("/")} >E-COMMERCE</div>
            <div className='header_content_icons'>
                <TbSearch  onClick={()=>setShowSearch(true)}/>
                <AiOutlineHeart/>
                <span className='cart-icons' onClick={()=>setShowCart(true)}>
                <CgShoppingCart/>
                   {!!cartCount && <span>{cartCount}</span>}
                </span>
            </div>
          </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart}/>}
      {showSearch && <Search setShowSearch={setShowSearch}/>}
   </Fragment>
  )
}

export default HeaderNav