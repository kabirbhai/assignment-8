import React from "react";
const Product = ({ product, handleAddToCart }) => {
  const { name, price, img } = product;

  return (
    <div>
      <div class="card" style={{ width: "20rem", margin: "auto" }}>
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
          <button
            onClick={() => handleAddToCart(product)}
            class="btn btn-primary w-100 d-flex justify-content-around align-items-center"
          >
            Add to cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              width={22}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
