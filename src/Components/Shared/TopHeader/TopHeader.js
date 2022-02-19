import React from "react";

const TopHeader = () => {
  return (
    <div className="border">
      <div className="container mx-auto flex justify-between">
        <div>
          <ul className="flex">
            <li>About Us</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p>
            <i className="fa-solid fa-truck" style={{ marginRight: "5px" }}></i>
            100% Secure delivery in Courier
          </p>
        </div>
        <div>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
