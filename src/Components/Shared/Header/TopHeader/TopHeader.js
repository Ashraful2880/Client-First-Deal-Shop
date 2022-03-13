import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="py-1 bg-orange-600 text-white border-t-2">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link
            className="mx-1 text-sm hover:text-black duration-200"
            to="/about"
          >
            About Us
            <span className=" h-full w-[1px] bg-gray-300 inline-block align-middle ml-2"></span>
          </Link>
          <Link
            className="mx-1 text-sm hover:text-black duration-200"
            to="/login"
          >
            My Account
            <span className=" h-full w-[1px] bg-gray-300 inline-block align-middle ml-2"></span>
          </Link>
          <Link
            className="mx-1 text-sm hover:text-black duration-200 "
            to="/order"
          >
            Track Order
            <span className=" h-full w-[1px] bg-gray-300 inline-block align-middle ml-2"></span>
          </Link>
          <Link
            className="mx-1 text-sm hover:text-black duration-200"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div>
          <a href="https://www.facebook.com/ashrafonline706/" target="blank">
            <i className="text-lg fa-brands fa-facebook mx-2 hover:text-black duration-300"></i>
          </a>
          <a href="https://twitter.com/IslamAshraful80" target="blank">
            <i className="text-lg fa-brands fa-twitter mx-2 hover:text-black duration-300"></i>
          </a>
          <a href="https://www.instagram.com/ashraful.islam706/" target="blank">
            <i className="text-lg fa-brands fa-instagram mx-2 hover:text-black duration-300"></i>
          </a>
          <a href="https://www.facebook.com/ashrafonline706/" target="blank">
            <i className="text-lg fa-brands fa-whatsapp mx-2 hover:text-black duration-300"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
