import React from "react";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <Link to="/home" className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 duration-300"
            src="https://i.ibb.co/M69HfCh/offer-bannar-2.png"
            alt="Offer Banner"
          />
        </Link>
        <Link to="/home" className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 duration-300"
            src="https://i.ibb.co/k41nBBp/offer-banner-3.png"
            alt="Offer Banner"
          />
        </Link>
      </div>
    </div>
  );
};

export default OfferBanner;
