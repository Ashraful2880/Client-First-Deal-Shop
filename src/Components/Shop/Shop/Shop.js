import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("Men");

  useEffect(() => {
    fetch(
      `https://safe-bastion-76919.herokuapp.com/findProducts?category=${search}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search]);

  return (
    <div className="drawer drawer-mobile w-full relative">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div>
          {!products?.length ? (
            <img
              className="w-96 rounded-2xl mx-auto mt-3"
              src="https://i.ibb.co/D1GcjP6/Loading.gif"
              alt="Loading..."
            />
          ) : (
            <div>
              <div className="pl-10">
                <h3 className="text-left mb-1 mt-2 font-bold lg:text-3xl text-xl relative">
                  {search} Products
                </h3>
                <hr className="bg-orange-500" style={{ padding: "1px 0px" }} />
                <label
                  htmlFor="my-drawer-2"
                  className="drawer-button lg:hidden absolute top-1 left-0.5"
                >
                  <i className="fa-solid fa-angles-right text-lg bg-orange-500 px-2 rounded text-white"></i>
                </label>
              </div>
              <div className="flex border shadow-xl p-5 mb-10 min-h-[75vh]">
                <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-col-1 gap-10 overflow-hidden px-5 relative">
                  {products?.map((product, key) => (
                    <div key={key}>
                      <div className="border rounded-lg mx-auto bg-white pt-10 relative h-[360px]">
                        <div className="overflow-hidden relative product-link ">
                          <img
                            className="rounded-t-lg product-Image"
                            src={product?.url}
                            alt="ProductsImage"
                          />
                          <Link
                            to={`/addToCart/${product._id}`}
                            className="overlay overflow-hidden absolute bottom-0 left-0 right-0 h-0 w-full bg-gray-500"
                          >
                            <p className=" text-orange-500 absolute top-1/2 left-1/2 icon">
                              <i className="fas fa-shopping-cart"></i>
                            </p>
                          </Link>
                        </div>
                        <div className="px-4 card-content text-left">
                          <Rating
                            readonly
                            className="text-orange-500"
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            initialRating={product?.star}
                          />
                          <h1 className="text-md font-bold text-gray-700">
                            {product?.name}
                          </h1>
                        </div>
                        <span className="text-sm font-bold bg-orange-500 text-white p-2 rounded-full absolute top-2 left-2">
                          {product?.price}$
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu px-20 overflow-y-auto w-64 shop-menu-bg text-white text-base text-left border-t border-orange-500 font-bold">
          <li className="cursor-pointer pb-2 pt-8 border-b-2 border-transparent hover:border-orange-500 focus:text-orange-500 duration-300">
            All Products
          </li>
          <li
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-orange-500 duration-300"
            onClick={() => setSearch("Men")}
          >
            Mens
          </li>
          <li
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-orange-500 duration-300"
            onClick={() => setSearch("Women")}
          >
            Womens
          </li>
          <li
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-orange-500 duration-300"
            onClick={() => setSearch("Kids")}
          >
            Kids
          </li>
          <li
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-orange-500 duration-300"
            onClick={() => setSearch("BagPack")}
          >
            BagPack
          </li>
          <li
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-orange-500 duration-300"
            onClick={() => setSearch("Shoes")}
          >
            Shoes
          </li>
          <li
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-orange-500 duration-300"
            onClick={() => setSearch("Others")}
          >
            Others
          </li>
          <li
            className="cursor-pointer py-2 border-b-2 border-transparent hover:border-orange-500 duration-300"
            onClick={() => setSearch("Uncategorize")}
          >
            Uncategorized
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
