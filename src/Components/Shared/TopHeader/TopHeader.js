import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="border py-1">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link className="mx-1 text-sm" to="/about">
            About Us
          </Link>
          <Link className="mx-1 text-sm" to="/login">
            My Account
          </Link>
          <Link className="mx-1 text-sm" to="/order">
            Track Order
          </Link>
          <Link className="mx-1 text-sm" to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <p>
            <i className="fa-solid fa-truck mr-2"></i>
            100% Secure delivery in Courier
          </p>
        </div>
        <div>
          <Link to="/home">
            <i className="fa-brands fa-facebook mx-2"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-twitter mx-2"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-instagram mx-2"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-whatsapp mx-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
