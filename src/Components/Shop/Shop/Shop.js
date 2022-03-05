import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AllProducts from "../AllProducts/AllProducts";
import Kids from "../Kids/Kids";
import Mens from "../Mens/Mens";
import Others from "../Others/Others";
import Shoes from "../Shoes/Shoes";
import Uncategorized from "../Uncategorized/Uncategorized";
import Womens from "../Womens/Womens";

const Shop = () => {
  return (
    <div className="container mx-auto pt-5">
      <div className="w-full overflow-hidden px-5">
        <div className="mb-2 text-left">
          <Link to="/shop">
            <button className="mx-2 pt-2 font-bold text-xl border-t-2 border-transparent hover:text-orange-500 hover:border-orange-500 duration-300 focus:text-orange-500 focus:border-orange-500">
              All Products
            </button>
          </Link>
          <Link to="mens">
            <button className="mx-2 pt-2 font-bold text-xl border-t-2 border-transparent hover:text-orange-500 hover:border-orange-500 duration-300 focus:text-orange-500 focus:border-orange-500">
              Mens
            </button>
          </Link>
          <Link to="womens">
            <button className="mx-2 pt-2 font-bold text-xl border-t-2 border-transparent hover:text-orange-500 hover:border-orange-500 duration-300 focus:text-orange-500 focus:border-orange-500">
              Womens
            </button>
          </Link>
          <Link to="kids">
            <button className="mx-2 pt-2 font-bold text-xl border-t-2 border-transparent hover:text-orange-500 hover:border-orange-500 duration-300 focus:text-orange-500 focus:border-orange-500">
              Kids
            </button>
          </Link>
          <Link to="shoes">
            <button className="mx-2 pt-2 font-bold text-xl border-t-2 border-transparent hover:text-orange-500 hover:border-orange-500 duration-300 focus:text-orange-500 focus:border-orange-500">
              Shoes
            </button>
          </Link>
          <Link to="others">
            <button className="mx-2 pt-2 font-bold text-xl border-t-2 border-transparent hover:text-orange-500 hover:border-orange-500 duration-300 focus:text-orange-500 focus:border-orange-500">
              Others
            </button>
          </Link>
          <Link to="uncategorize">
            <button className="mx-2 pt-2 font-bold text-xl border-t-2 border-transparent hover:text-orange-500 hover:border-orange-500 duration-300 focus:text-orange-500 focus:border-orange-500">
              Uncategorized
            </button>
          </Link>
        </div>
        <hr className="bg-orange-500 mb-8" style={{ padding: "1px 0px" }} />
      </div>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="mens" element={<Mens />} />
        <Route path="womens" element={<Womens />} />
        <Route path="kids" element={<Kids />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="others" element={<Others />} />
        <Route path="uncategorize" element={<Uncategorized />} />
      </Routes>
    </div>
  );
};

export default Shop;
