import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className=" my-10 container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">
        <Link to="/home" className="border rounded-2xl overflow-hidden">
          <img
            className="hover:scale-110 duration-500"
            src="https://i.ibb.co/9c80fVX/big-offer-1.png"
            alt="OfferImage"
          />
        </Link>
        <Link to="/home" className="border rounded-2xl overflow-hidden">
          <img
            className="hover:scale-110 duration-500"
            src="https://i.ibb.co/XxSrHw8/big-offer-2.png"
            alt="OfferImage"
          />
        </Link>
        <Link to="/home" className="border rounded-2xl overflow-hidden">
          <img
            className="hover:scale-110 duration-500"
            src="https://i.ibb.co/SKc19nR/big-offer-3.png"
            alt="OfferImage"
          />
        </Link>
      </div>
    </div>
  );
};

export default Offer;
