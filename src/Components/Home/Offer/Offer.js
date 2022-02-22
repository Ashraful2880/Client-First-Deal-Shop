import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className=" my-10 container mx-auto border shadow-md p-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        <Link to="/home" className="rounded-2xl overflow-hidden">
          <img
            className="hover:scale-110 duration-500 rounded-r-xl"
            src="https://i.ibb.co/wKDh9nL/Offer-1.jpg"
            alt="OfferImage"
          />
        </Link>
        <Link to="/home" className=" rounded-2xl overflow-hidden">
          <img
            className="hover:scale-110 duration-500 rounded-r-xl"
            src="https://i.ibb.co/X4qSh3B/Offer-2.jpg"
            alt="OfferImage"
          />
        </Link>
        <Link to="/home" className=" rounded-2xl overflow-hidden">
          <img
            className="hover:scale-110 duration-500 rounded-r-xl"
            src="https://i.ibb.co/rFnS4TT/offer-3.jpg"
            alt="OfferImage"
          />
        </Link>
      </div>
    </div>
  );
};

export default Offer;
