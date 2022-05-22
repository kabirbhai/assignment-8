const ProductDetails = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-container mb-4">
      <h3 className="text-center">Your Item</h3>
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
            <button
              onClick={() => removeFromCart(product)}
              style={{ backgroundColor: "#d1c1c1" }}
              className="border-0 p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                width={22}
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="text-center">
        {cart.length > 3 && <button>Remove all</button>}
      </div>
    </div>
  );
};

export default ProductDetails;
