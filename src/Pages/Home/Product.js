import React from "react";

const Product = ({ product }) => {
  const { name, price, img } = product;
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          className="img-thumbnail"
          src={img}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            Price: <strong>{price}</strong>
          </p>
          <button class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
