import React, { Fragment } from "react";
import Products from "@/components/Products";
import { useFetch } from "@/hooks/useFetch";

const RelatedProduct = ({ productId, categoryId }) => {
  console.log(productId,categoryId);
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );
  console.log(data);
  return (
    <Fragment>
      <div className="related-product">
        <Products products={data}  headingText="Related Product" />
      </div>
    </Fragment>
  );
};

export default RelatedProduct;
