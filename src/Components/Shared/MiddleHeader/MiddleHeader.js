import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Mainlogo.png";

const MiddleHeader = () => {
  return (
    <div className="border-b bg-indigo-100">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/home">
            <img className="w-32" src={logo} alt="Main Logo" />
          </Link>
        </div>
        <div className="container mx-auto w-3/6 ">
          <form action="/search">
            <div className="bg-white flex items-center rounded-lg border h-12 shadow-lg">
              <input
                autoFocus
                type="search"
                className="w-full  px-6 text-gray-700 leading-tight focus:outline-none"
                placeholder="Search Product By Name"
              />
              <div className="p-2 md:p-4">
                <button className="rounded-full focus:outline-none w-10 h-12 md:w-10 md:h-12 flex items-center justify-center">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <Link to="/home" className="relative">
            <i className="fa-solid fa-cart-shopping mx-2 text-2xl text-gray-700  px-2"></i>
            <span className="absolute bottom-4 left-11 rounded-full bg-indigo-500 text-white px-1 text-xs">
              1
            </span>
          </Link>
          <Link to="/login">
            <i className="fa-solid fa-user-large mx-2 text-2xl text-gray-700"></i>
          </Link>
          <Link to="contact">
            <i className="fa-solid fa-headphones mx-2 text-2xl text-gray-700"></i>
            <span>+88-01974238487</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
