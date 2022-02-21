import React from "react";
import { Link } from "react-router-dom";
import MiddleHeader from "../MiddleHeader/MiddleHeader";
import TopHeader from "../TopHeader/TopHeader";

const Header = () => {
  const myFunction = () => {
    const toggleButton = document.getElementById("toogleDiv");
    if (toggleButton.style.display === "none") {
      toggleButton.style.display = "block";
    } else {
      toggleButton.style.display = "none";
    }
  };
  return (
    <div>
      <TopHeader />
      <MiddleHeader />
      <nav className="bg-indigo-600 shadow">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="lg:block sm:hidden md:hidden">
              <Link to="/home" className="text-white hover:text-gray-700">
                <i className="fa-solid fa-bars mr-2"></i>
                Browse Categories
                <i className="fa-solid fa-angle-down ml-2"></i>
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white focus:outline-none"
                aria-label="toggle menu"
                onClick={myFunction}
              >
                <i className="fa-solid fa-bars mr-2"></i>
              </button>
            </div>
          </div>

          <div className="md:flex items-center" id="toogleDiv">
            <div className="flex flex-col md:flex-row md:mx-6 text-white">
              <Link
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/home"
              >
                Home
              </Link>
              <Link
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/home"
              >
                Categories
                <i className="fa-solid fa-angle-down ml-2"></i>
              </Link>
              <Link
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/shop"
              >
                Shop
                <i className="fa-solid fa-angle-down ml-2"></i>
              </Link>
              <Link
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                to="/about"
              >
                About
              </Link>
              <Link
                className="my-1 text-sm font-medium hover:text-indigo-500 md:mx-4 md:my-0"
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
