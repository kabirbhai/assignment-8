import React from "react";
import useProduct from "../../hooks/useProduct";

const Products = () => {
  const [products] = useProduct([]);
  console.log(products);
  return (
    <div>
      <h1>All product</h1>
    </div>
  );
};

export default Products;
