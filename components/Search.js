import React, { Fragment } from 'react'
import { MdClose } from 'react-icons/md'
import prod1 from '../public/prod-1.jpg'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useFetch } from '@/hooks/useFetch'
const Search = ({setShowSearch}) => {
  const [query,setQuery]=useState([]);
  const router=useRouter();

  let {data}=useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
  console.log(data);
  if(!query.length){
    data=null;
  }
  const UrlBuilder=(src)=>{
    if(!src){
      return;
    }else{
      return `http://localhost:1337${src}`
    }
  }
  return (
    <Fragment>
      <div className='search-Model'>
         <div className='form-field'>
           <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='Search for Product'autoFocus  />
           <MdClose onClick={()=>setShowSearch(false)} className='searchModel-close-btn'/>
         </div>
         <div className='search-result-content'>
            <div className='search-result'>
              {data?.data?.map((item)=>(
                  <div key={item.id}className='search-result-item' onClick={()=>{router.push(`/product/${item.id}`);setShowSearch(false)}}>
                  <div className='search_result_item-img-container'>
                       <Image src={UrlBuilder(item?.attributes?.img?.data?.[0]?.attributes?.url)} width={50} height={50} alt='product image'/>
                  </div>
                  <div className='search_result_item-prod_details'>
                      <span className='search_result_item-prod_details-name' >{item.attributes.title}</span>
                      <span className='search_result_item-prod_details-desc'>{item.attributes.desc}</span>
                  </div>
                   </div>
              ))}
               
            </div>
         </div>
      </div>
    </Fragment>
  )
}

export default Search