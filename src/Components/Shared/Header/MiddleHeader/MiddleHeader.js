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
      <div className="container mx-auto flex justify-between items-center py-2">
        <Link to="contact" className="ml-4">
          <i className="fa-solid fa-phone mx-2 text-xl text-orange-500"></i>
          <span className=" font-bold text-orange-500">
            Hotline: +88-01974238487
          </span>
        </Link>
        <div className="container mx-auto w-2/6 ">
          <form>
            <div class="flex justify-center py-1">
              <input
                type="search"
                class="w-full px-3 py-2 text-gray-700 bg-white border border-solid border-gray-300 rounded rounded-r-none transition ease-in-out focus:bg-gray-100"
                placeholder="I'm looking For"
              />
              <button
                class="btn px-6 py-2 bg-orange-500 text-black font-bold rounded rounded-l-none hover:bg-white duration-150 ease-in-out border-l border-orange-500"
                type="button"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
        <div>
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
            <button className="text-md font-semibold hover:text-orange-500 focus:text-orange-500 duration-300 md:mx-4 md:my-0 ml-6">
              <img
                className="w-8 rounded-full border-2 border-white mx-auto ml-6 "
                src={user?.photoURL}
                alt={"user"}
              />
            </button>
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
