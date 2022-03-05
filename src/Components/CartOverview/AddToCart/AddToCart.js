import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const AddToCart = () => {
  const { productId } = useParams();
  const [addCart, setAddCart] = useState({});
  useEffect(() => {
    fetch(`https://safe-bastion-76919.herokuapp.com/addToCart/${productId}`)
      .then((res) => res.json())
      .then((data) => setAddCart(data));
  }, [productId]);
  return (
    <div className="container mx-auto border shadow-lg my-10 py-20">
      <div className="flex justify-evenly">
        <div className="w-1/2">
          <img style={{ margin: "auto" }} src={addCart?.url} alt="product" />
        </div>
        <div className="w-1/2 text-left">
          <h3 className="font-bold text-3xl">{addCart?.name}</h3>
          <h3 className="font-bold text-2xl mb-4">
            Price: <span className="text-orange-500">{addCart?.price}$</span>
          </h3>
          <h3 className="font-bold text-md">
            <Rating
              readonly
              className="text-orange-500"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={addCart?.star}
            />{" "}
            (125 Customeer Review)
          </h3>
          <p className="mt-5 text-gray-600 tracking-wider ">
            <span className="font-bold text-orange-500">{addCart?.name} </span>
            allows you to fully express your vibrant personality with three
            grayscale options. Feeling adventurous? Put on a heather gray tee.
            Want to be a trendsetter? Try our exclusive colorway. "Black". Need
            to add an extra pop of color to your outfit? Our white tee has you
            covered.
          </p>
          <p className="text-md font-bold mb-10 mt-4 text-orange-500">
            Only 27 in Stock. Order Now
          </p>
          <h3 className="font-bold text-xl mb-8">
            Quantity:{" "}
            <i
              className="fa-solid fa-minus text-md bg-gray-200 px-2 text-orange-500 border border-gray-300 cursor-pointer hover:bg-white duration-300"
              style={{ padding: "4px 8px" }}
            ></i>
            <span
              className=" border border-gray-300 "
              style={{ padding: "2px 20px" }}
            >
              1
            </span>
            <i
              className="fa-solid fa-plus text-md bg-gray-200 px-2 text-orange-500 border border-gray-300 cursor-pointer hover:bg-white duration-300"
              style={{ padding: "4px 8px" }}
            ></i>{" "}
          </h3>
          <button className="bg-orange-500 border border-orange-500 text-white px-3 py-2 rounded-md mr-2 hover:bg-transparent hover:text-orange-500 duration-300">
            Add To Cart
          </button>
          <button className="bg-indigo-600 border border-indigo-600 text-white px-3 py-2 rounded-md ml-2 hover:bg-transparent hover:text-indigo-600 duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
