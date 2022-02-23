import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="py-2 bg-black text-gray-300">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link className="mx-1 text-sm hover:text-white" to="/about">
            About Us
          </Link>
          <Link className="mx-1 text-sm hover:text-white" to="/login">
            My Account
          </Link>
          <Link className="mx-1 text-sm hover:text-white " to="/order">
            Track Order
          </Link>
          <Link className="mx-1 text-sm hover:text-white" to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <p className=" cursor-pointer hover:text-white">
            <i className="fa-solid fa-truck mr-2"></i>
            100% Secure delivery in Courier
          </p>
        </div>
        <div>
          <Link to="/home">
            <i className="fa-brands fa-facebook mx-2 hover:text-white"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-twitter mx-2 hover:text-white"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-instagram mx-2 hover:text-white"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-whatsapp mx-2 hover:text-white"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
