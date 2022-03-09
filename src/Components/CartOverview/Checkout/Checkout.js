import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className=" h-screen">
      <h1 className="text-3xl">Checkout Page Here</h1>
      <button className="bg-orange-500 border border-orange-500 text-white px-3 py-2 rounded-md ml-2 hover:bg-transparent hover:text-orange-500 duration-300">
        <Link to="/payment">Proces To Pay</Link>
      </button>
    </div>
  );
};

export default Checkout;
