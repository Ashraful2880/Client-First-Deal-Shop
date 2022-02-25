import React from "react";
import { Link } from "react-router-dom";
import MiddleHeader from "../MiddleHeader/MiddleHeader";
import TopHeader from "../TopHeader/TopHeader";
import "./Header.css";

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
      <nav className="bg-gray-800 shadow py-2">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="lg:block sm:hidden md:hidden">
              <Link
                to="/home"
                className="text-white sub-menu-container hover:text-orange-500 focus:text-orange-500 duration-300"
              >
                <i className="fa-solid fa-bars mr-2 text-md"></i>
                <span className="font-semibold ">Logo Here</span>
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
              <ul className="flex justify-center">
                <li className="hoverable hover:text-white">
                  <Link
                    className="my-1 text-md font-semibold  hover:text-orange-500 focus:text-orange-500 duration-300 md:mx-4 md:my-0"
                    to="/home"
                  >
                    <i className="fa-solid fa-bars mr-2 text-md"></i>
                    <span className="font-semibold ">Browse Categories</span>
                    <i className="fa-solid fa-angle-down ml-2 text-md"></i>
                  </Link>
                  <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-800">
                    <div className="container mx-auto w-full flex flex-wrap justify-between">
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center border-b mb-4">
                          <h3 className="font-bold text-xl text-white text-bold mb-2">
                            Categories
                          </h3>
                        </div>
                        <div className="text-gray-100 text-md flex flex-col">
                          <Link
                            to="/shop"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            All Products
                          </Link>
                          <Link
                            to="/mens"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Mens Collections
                          </Link>
                          <Link
                            to="womens"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Womens Collections
                          </Link>
                          <Link
                            to="/kids"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Kids Collections
                          </Link>
                          <Link
                            to="/shoes"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Shoes Collections
                          </Link>
                          <Link
                            to="/others"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Others Collections
                          </Link>
                          <Link
                            to="uncategorized"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            UnCategorized
                          </Link>
                        </div>
                      </ul>
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center border-b mb-4">
                          <h3 className="font-bold text-xl text-white text-bold mb-2">
                            Special Products
                          </h3>
                        </div>
                        <div className="text-gray-100 text-md flex flex-col">
                          <Link
                            to="/home"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Top Trending
                          </Link>
                          <Link
                            to="/home"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Best Selling
                          </Link>
                          <Link
                            to="/home"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            New Arraival
                          </Link>
                          <Link
                            to="/home"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Hot Sales
                          </Link>
                          <Link
                            to="/home"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Shoes Collections
                          </Link>
                          <Link
                            to="/home"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            Brand Of The Week
                          </Link>
                          <Link
                            to="/home"
                            className="mb-1 hover:translate-x-1 hover:text-orange-500 duration-300"
                          >
                            <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                            App Info
                          </Link>
                        </div>
                      </ul>
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 cursor-pointer">
                        <div className="flex items-center border-b mb-4">
                          <h3 className="font-bold text-xl text-white text-bold mb-2">
                            Latest News
                          </h3>
                        </div>
                        <h4 className="text-orange-500 mb-2 font-bold">
                          <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                          For Sellar
                        </h4>
                        <p className="text-gray-100 text-sm">
                          This proposal is a win-win situation which will cause
                          a stellar paradigm shift, let's touch base off-line
                          before we fire the new ux experience.
                        </p>
                        <h4 className="text-orange-500 my-2 font-bold">
                          <i className="fa-solid fa-angles-right mr-2 text-md"></i>
                          For Buyer
                        </h4>
                        <p className="text-gray-100 text-sm">
                          This proposal is a win-win situation which will cause
                          a stellar paradigm shift, let's touch base off-line
                          before we fire the new ux experience.
                        </p>
                      </ul>
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3 cursor-pointer">
                        <div className="flex items-center border-b mb-4">
                          <h3 className="font-bold text-xl text-white text-bold mb-2">
                            Weekly Hot
                          </h3>
                        </div>
                        <img
                          src="https://i.ibb.co/0nckYyr/Dropdown-Categories-Bannar.png"
                          alt="Drop Down Bannar"
                        />
                        <p className="text-gray-100 text-sm mt-4">
                          This is a no-brainer to wash your face, or we need to
                          future-proof this high performance keywords
                          granularity.
                        </p>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <Link
                className=" my-1 text-md font-semibold hover:text-orange-500 focus:text-orange-500 duration-300 md:mx-4 md:my-0"
                to="/shop"
              >
                Shop
                <i className="fa-solid fa-angle-down ml-2"></i>
              </Link>
              <Link
                className="my-1 text-md font-semibold hover:text-orange-500 focus:text-orange-500 duration-300 md:mx-4 md:my-0"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="my-1 text-md font-semibold hover:text-orange-500 focus:text-orange-500 duration-300 md:mx-4 md:my-0"
                to="/about"
              >
                About
              </Link>
              <Link
                className="my-1 text-md font-semibold hover:text-orange-500 focus:text-orange-500 duration-300 md:mx-4 md:my-0"
                to="/blogs"
              >
                Blog
              </Link>
              <Link
                className="my-1 text-md font-semibold hover:text-orange-500 focus:text-orange-500 duration-300 md:mx-4 md:my-0"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
