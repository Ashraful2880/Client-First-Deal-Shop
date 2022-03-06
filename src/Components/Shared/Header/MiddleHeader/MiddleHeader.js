import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MiddleHeader = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    const myCartProduct = localStorage.getItem("cart");
    setItems(JSON.parse(myCartProduct));
  }, []);

  return (
    <div className="bg-orange-600 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="contact" className="ml-4">
          <i className="fa-solid fa-headphones mx-2 text-xl text-white"></i>
          <span className="text-white font-normal">+88-01974238487</span>
        </Link>
        <div className="container mx-auto w-3/6 ">
          <form action="/search">
            <div className="bg-white flex items-center rounded-md border h-10 shadow-lg">
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
          <Link to="/checkout" className="relative">
            <i className="fa-solid fa-cart-shopping mx-2 text-xl text-white px-2"></i>
            <span
              className="absolute bottom-4 left-10 rounded-full bg-black text-white font-bold text-xs"
              style={{ padding: "4px 10px" }}
            >
              {items?.length}
            </span>
          </Link>
          <Link to="/login">
            <i className="fa-solid fa-right-to-bracket mx-2 text-xl text-white"></i>
          </Link>
          <Link to="/logout">
            <i className="fa-solid fa-right-from-bracket mx-2 text-xl text-white"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
