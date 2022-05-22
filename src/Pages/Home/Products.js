import React, { useState } from "react";
import useProduct from "../../hooks/useProduct";
import Product from "./Product";
import "../../Style/Style.css";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const [products] = useProduct([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedProduct) => {
    const exists = cart.find(
      (products) => products._id === selectedProduct._id
    );
    if (!exists) {
      const newProduct = [...cart, selectedProduct];
      setCart(newProduct);
    } else {
      alert("This Item already added");
    }
    if (cart.length > 3) {
      alert("You cannot add more than 4 Item");
    }
  };

  const removeFromCart = (remove) => {
    const removed = cart.filter((products) => products._id !== remove._id);
    setCart(removed);
  };

  return (
    <section>
      <div className="text-center  py-4 ">
        <h1 className="text-Primary ">
          Choose your favorite <span>WATCH</span>
        </h1>
        <h3>Choose 4 watch</h3>
      </div>
      <div className="  main-container">
        <div className=" container product-container ">
          {products.map((product) => (
            <Product
              key={product._id}
              handleAddToCart={handleAddToCart}
              product={product}
            />
          ))}
        </div>
        <div className="productDetails-container ">
          <ProductDetails cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </section>
  );
};

export default Products;
