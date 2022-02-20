import React from "react";
import { Link } from "react-router-dom";
import MiddleHeader from "../MiddleHeader/MiddleHeader";
import TopHeader from "../TopHeader/TopHeader";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <MiddleHeader />

      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/home" className="text-gray-800 hover:text-gray-700">
                <i className="fa-solid fa-bars mr-2"></i>
                Browse Categories
                <i className="fa-solid fa-angle-down ml-2"></i>
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/home"
              >
                Home
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/home"
              >
                Categories
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/shop"
              >
                Shop
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/about"
              >
                About
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/blogs"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
