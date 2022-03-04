import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const AddToCart = () => {
  const { productId } = useParams();
  const [addCart, setAddCart] = useState({});
  console.log(addCart);
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
          <h3 className="font-bold text-2xl">Price: {addCart?.price}$</h3>
          <h3 className="font-bold text-md">
            Rating:{" "}
            <Rating
              readonly
              className="text-orange-500"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={addCart?.star}
            />
          </h3>
          <p className="mt-5 text-gray-600 tracking-wider">
            <spab className="font-bold text-orange-500">{addCart?.name}</spab>{" "}
            allows you to fully express your vibrant personality with three
            grayscale options. Feeling adventurous? Put on a heather gray tee.
            Want to be a trendsetter? Try our exclusive colorway: "Black". Need
            to add an extra pop of color to your outfit? Our white tee has you
            covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
