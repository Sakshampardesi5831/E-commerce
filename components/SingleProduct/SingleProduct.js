import React, { Fragment } from "react";
import { useContext,useState } from "react";
import { Context } from "@/utils/Context";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod1 from '../../public/prod-1.jpg'

import Image from "next/image";
import RelatedProduct from "./RelatedProducts/RelatedProduct";
import { useFetch } from "@/hooks/useFetch";
const SingleProduct =({id}) => {
  // console.log(id);
 const [quantity,setQuantity]=useState(1);
  const {data}=  useFetch(`/api/products?populate=*&[filters][id]=${id}`)
  console.log(data);
  if(!data){
    return;
  }
  const product=data.data?.[0]?.attributes;
  const categoryId=data.data?.[0]?.attributes?.categories?.data?.[0]?.id;
  const UrlBuilder=(src)=>{
    if(!src){
      return;
    }else{
      return `http://localhost:1337${src}`
    }
  }
  /*--------------------CODE FOR ADD TO CART--------------------------------*/
  const increment=()=>{
    setQuantity((prevState)=>prevState+1);
  }
  const decrement=(prevState)=>{
      setQuantity((prevState)=>{
           if(prevState===1){
            return 1;
           }
           return prevState-1;
      });
  }
  const {handleAddtoCart}=useContext(Context);

  return (
    <Fragment>
      <div className="single-product-main-content">
        <div className="single-product-layout">
          <div className="single-product-page">
            <div className="single-product-left">
                <Image loading="lazy" src={UrlBuilder(data.data?.[0]?.attributes.img.data?.[0]?.attributes?.url)} width={300} height={300}  alt="productDetailImage"/>
            </div>
            <div className="single-product-right">
                <span className="single-product-name">{data.data?.[0]?.attributes?.title}</span>
                <span className="single-product-price">{data.data?.[0]?.attributes?.price}</span>
                <span className="single-product-desc">{data.data?.[0]?.attributes?.desc}</span>
                <div className="single-product-cart-buttons">
                     <div className="quantity-buttons">
                         <span onClick={decrement}>-</span>
                         <span>{quantity}</span>
                         <span onClick={increment}>+</span>
                     </div>
                      <button onClick={()=>{
                        handleAddtoCart(data.data?.[0],quantity)
                          setQuantity(1);
                        }} className="addToCartButton"><FaCartPlus size={20}/> Add to cart</button>
                </div>
               <span className="divider"/>
               <div className="info-items">
                   <span className="text-bold">
                    Category
                    <span>Headphones</span>
                    </span>  
               </div>
               <div className="info-items">
                   <span className="text-bold">
                    Share
                    <span className="social-Icons">
                        <FaFacebookF size={16} />
                        <FaInstagram size={16}/>
                        <FaLinkedinIn size={16}/>
                        <FaPinterest size={16}/>
                        <FaTwitter   size={16}/>
                    </span>
                    </span>  
               </div>
            </div>
          </div>
          <RelatedProduct productId={id} categoryId={categoryId} /> 
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
