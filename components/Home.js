import React, { Fragment,useEffect,useContext } from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import { fetchDataFromApi } from '@/utils/api'
import { Context } from '@/utils/Context'
const Home = () => {
  const {categories,setCategories,products,setProducts}=useContext(Context)
  useEffect(()=>{
    getCategoryies();
    getProducts();
 },[])
  const getCategoryies=()=>{
    fetchDataFromApi("/api/categories?populate=*").then(function(res){
        //  console.log(res);
         setCategories(res);
    });
  }
  const getProducts=()=>{
    fetchDataFromApi("/api/products?populate=*").then(function(res){
        //  console.log(res);
         setProducts(res);
    });
  }
 
  return (
    <Fragment>
      <Banner/>
      <div className='main-content'>
      <div className='layout'>
         <Category categories={categories}/>
         <Products headingText="Popular Product" products={products} />
      </div>
      </div>
      
    </Fragment>
  )
}

export default Home