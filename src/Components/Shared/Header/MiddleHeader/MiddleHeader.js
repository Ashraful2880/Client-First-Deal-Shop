import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/UseAuth";

const MiddleHeader = () => {
  // console.log = console.warn = console.error = () => {};
  // console.error("Something bad happened.");

  const { user } = useAuth();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const myCartProduct = localStorage.getItem("cart");
    setItems(JSON.parse(myCartProduct));
  }, []);

  return (
    <div className="bg-gray-900 border-b border-gray-500">
      <div className="container mx-auto lg:flex sm:block justify-between items-center py-1">
        <span className="ml-4">
          <i className="fa-solid fa-phone mx-2 lg:text-xl text-base text-orange-500 animate-bounce"></i>
          <span className="font-bold text-orange-500">
            Hotline: +88-01974238487
          </span>
        </span>
        <div className="container mx-auto lg:w-2/6 w-5/6">
          <form className="flex justify-center py-1">
            <input
              type="search"
              className="w-full px-3 lg:py-2 py-0 text-gray-700 bg-white border border-solid border-gray-300 rounded rounded-r-none transition ease-in-out focus:bg-gray-100"
              placeholder="I'm looking For"
            />
            <button
              className="btn px-6 lg:py-2 py-0 bg-orange-500 text-black font-bold rounded rounded-l-none hover:bg-white duration-150 ease-in-out border-l border-orange-500"
              type="button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="mt-1 lg:mt-0 flex items-center justify-center">
          <Link to="/faviorite" className="relative">
            <i className="fa-solid fa-heart text-orange-500 text-2xl mx-4 hover:text-white duration-200"></i>
            <span
              className="absolute bottom-4 left-9 rounded-full text-orange-500 bg-white font-bold text-sm"
              style={{ padding: "1px 8px" }}
            >
              {items?.length || 0}
            </span>
          </Link>
          <Link to="/placeOrder" className="relative">
            <i className="fa-solid fa-cart-shopping text-orange-500 text-2xl hover:text-white duration-200 mx-4"></i>
            <span
              className="absolute bottom-3 left-9 rounded-full text-orange-500 bg-white font-bold text-sm"
              style={{ padding: "1px 8px" }}
            >
              {items?.length || 0}
            </span>
          </Link>
          {user ? (
            <Link to="/">
              <img
                className="w-10 rounded-full border-2 border-white mx-auto ml-6 inline-b"
                src={user?.photoURL}
                alt={"user"}
              />
            </Link>
          ) : (
            <Link to="/login">
              <i className="fa-solid fa-right-to-bracket mr-2 ml-6 text-xl text-white"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
