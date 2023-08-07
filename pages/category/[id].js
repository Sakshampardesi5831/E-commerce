import React, { Fragment } from "react";
import Products from '@/components/Products'
import HeaderNav from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from "next/router";
import { useFetch } from "@/hooks/useFetch";
const SingleCategoryId = () => {
  const router=useRouter();
  const {id}=router.query;
  console.log(id);
  const {data}=useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)
  console.log(data);
  // console.log(data.data[0].attributes.categories.data[0].attributes.title);
  return (
    <Fragment>
      <HeaderNav/>
      <div className="category-main-content">
        <div className="categorylayout">
          <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
          <Products innerPage={true} products={data}/>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default SingleCategoryId;
