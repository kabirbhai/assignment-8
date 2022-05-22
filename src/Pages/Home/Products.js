import React from "react";
import useProduct from "../../hooks/useProduct";
import Product from "./Product";
import "../../Style/Style.css";

const Products = () => {
  const [products] = useProduct([]);

  return (
    <section>
      <div className="text-center bg-primary py-4 text-white">
        <h1 className="text-Primary ">
          Choose your favorite <span>WATCH</span>
        </h1>
        <h3>Choose 4 watch</h3>
      </div>
      <div className="container product-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
