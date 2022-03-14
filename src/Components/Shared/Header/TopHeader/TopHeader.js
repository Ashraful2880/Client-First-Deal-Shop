import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="py-1 bg-orange-600 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link
            className="mx-1 text-xs lg:text-base md:text-base hover:text-black duration-200 border-r border-gray-300"
            to="/about"
          >
            About Us
            <span className="ml-2"></span>
          </Link>
          <Link
            className="mx-1 text-xs lg:text-base md:text-base hover:text-black duration-200 border-r border-gray-300"
            to="/login"
          >
            My Account
            <span className="ml-2"></span>
          </Link>
          <Link
            className="mx-1 text-xs lg:text-base md:text-base hover:text-black duration-200 border-r border-gray-300"
            to="/order"
          >
            Track Order
            <span className="ml-2"></span>
          </Link>
          <Link
            className="mx-1 text-xs lg:text-base md:text-base hover:text-black duration-200 hidden lg:inline-block"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div>
          <a href="https://www.facebook.com/ashrafonline706/" target="blank">
            <i className="fa-brands fa-facebook lg:text-lg md:text-base sm:text-sm text-xs mx-2 hover:text-black duration-300"></i>
          </a>
          <a href="https://twitter.com/IslamAshraful80" target="blank">
            <i className="fa-brands fa-twitter lg:text-lg md:text-base sm:text-sm text-xs mx-2 hover:text-black duration-300"></i>
          </a>
          <a href="https://www.instagram.com/ashraful.islam706/" target="blank">
            <i className="fa-brands fa-instagram lg:text-lg md:text-base sm:text-sm text-xs mx-2 hover:text-black duration-300"></i>
          </a>
          <a href="https://www.facebook.com/ashrafonline706/" target="blank">
            <i className="fa-brands fa-whatsapp lg:text-lg md:text-base sm:text-sm text-xs mx-2 hover:text-black duration-300"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
