import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { useAlert } from "react-alert";

const AddToCart = () => {
  const alert = useAlert();
  const [cart, setCart] = useState({});
  const [cartCount, setCartCount] = useState(1);
  const [price, setPrice] = useState();
  const { productId } = useParams();

  useEffect(() => {
    setPrice(cart?.price * cartCount);
  }, [cart?.price, cartCount]);

  useEffect(() => {
    fetch(`https://server-firat-deal-shop.onrender.com/addToCart/${productId}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [productId]);

  const addLocalStorage = () => {
    let AddLocalStorage = [];
    if (localStorage.getItem("cart")) {
      AddLocalStorage = JSON.parse(localStorage.getItem("cart"));
    }
    AddLocalStorage.push({
      productId: productId + 1,
      image: `${cart.url}`,
      name: `${cart.name}`,
      price: price,
      quantity: cartCount,
    });
    localStorage.setItem("cart", JSON.stringify(AddLocalStorage));
    alert.success("Product Added to Cart");
  };

  return (
    <div className="container mx-auto border shadow-lg my-10 lg:py-20 py-2">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:w-1/2 w-full">
          <img style={{ margin: "auto" }} src={cart?.url} alt="product" />
        </div>
        <div className="lg:w-1/2 w-full lg:text-left text-center">
          <h3 className="font-bold lg:text-3xl text-xl">{cart?.name}</h3>
          <h3 className="font-bold text-2xl lg:mb-4 mb-1">
            Price:{" "}
            <span className="text-orange-500">{price || cart?.price}$</span>
          </h3>
          <h3 className="font-bold lg:text-base text-xs">
            <Rating
              readonly
              className="text-orange-500"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={cart?.star}
            />{" "}
            (125 Customeer Review)
          </h3>
          <p className="mt-5 text-gray-600 tracking-wider lg:block hidden">
            <span className="font-bold text-orange-500">{cart?.name} </span>
            allows you to fully express your vibrant personality with three
            grayscale options. Feeling adventurous? Put on a heather gray tee.
            Want to be a trendsetter? Try our exclusive colorway. "Black". Need
            to add an extra pop of color to your outfit? Our white tee has you
            covered.
          </p>
          <p className="text-md font-bold lg:mb-10 mb-2 lg:mt-4 mt-1 text-orange-500">
            Only 27 in Stock. Order Now
          </p>
          <h3 className="font-bold text-xl mb-8">
            Quantity:{" "}
            <button
              onClick={() =>
                cartCount > 1 ? setCartCount(cartCount - 1) : setCartCount(1)
              }
            >
              <i
                className="fa-solid fa-minus text-md bg-gray-200 px-2 text-orange-500 border border-gray-300 cursor-pointer hover:bg-white duration-300"
                style={{ padding: "4px 8px" }}
              ></i>
            </button>
            <span
              className=" border border-gray-300 inline-block w-14 "
              style={{ padding: "1px 20px" }}
            >
              {cartCount}
            </span>
            <button onClick={() => setCartCount(cartCount + 1)}>
              <i
                className="fa-solid fa-plus text-md bg-gray-200 px-2 text-orange-500 border border-gray-300 cursor-pointer hover:bg-white duration-300"
                style={{ padding: "4px 8px" }}
              ></i>{" "}
            </button>
          </h3>
          <button
            onClick={addLocalStorage}
            className="bg-orange-500 border border-orange-500 text-white px-3 lg:py-2 py-1 lg:text-base text-xs rounded-md mr-2 hover:bg-transparent hover:text-orange-500 duration-300"
          >
            Add To Cart
          </button>
          <button className="bg-orange-500 border border-orange-500 text-white px-3 lg:py-2 py-1 lg:text-base text-xs rounded-md ml-2 hover:bg-transparent hover:text-orange-500 duration-300">
            <Link to="/placeOrder">Place Order</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
