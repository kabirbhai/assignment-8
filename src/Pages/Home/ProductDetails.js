import React from "react";

const ProductDetails = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-container mb-4">
      <h3>Your Item</h3>
      <div>
        {cart.map((product) => (
          <div className="d-flex justify-content-around align-items-center my-2">
            <img
              className="rounded float-start"
              width={40}
              src={product.img}
              alt=""
            />
            <h5 className="m-0 ">{product.name}</h5>
            <button onClick={() => removeFromCart(product)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
