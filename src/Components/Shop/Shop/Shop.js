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
    <div className="pt-5">
      <div className="mb-4">
        <Link to="/shop">
          <button className="m-2"> All Products</button>
        </Link>
        <Link to="mens">
          <button className="m-2"> Mens</button>
        </Link>
        <Link to="womens">
          <button className="m-2"> Womens</button>
        </Link>
        <Link to="kids">
          <button className="m-2"> Kids</button>
        </Link>
        <Link to="shoes">
          <button className="m-2"> Shoes</button>
        </Link>
        <Link to="others">
          <button className="m-2"> Others</button>
        </Link>
        <Link to="uncategorize">
          <button className="my-2 ms-2 me-5"> Uncategorized</button>
        </Link>
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
