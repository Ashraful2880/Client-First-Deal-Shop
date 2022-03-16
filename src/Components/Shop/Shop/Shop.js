import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(category);

  useEffect(() => {
    fetch(
      ` https://safe-bastion-76919.herokuapp.com/findProducts?category=${search}`
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
        <div className="menu px-10 overflow-y-auto w-64 shop-menu-bg text-white text-lg border-t border-orange-500">
          <button
            className="text-left pb-2 mt-12 pt-4 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 duration-300 font-bold"
            onClick={() => setSearch("All")}
          >
            All Products
          </button>
          <button
            className="text-left pb-2 mt-4 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 duration-300 font-bold"
            onClick={() => setSearch("Men")}
          >
            Mens
          </button>
          <button
            className="text-left pb-2 mt-4 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 duration-300 font-bold"
            onClick={() => setSearch("Women")}
          >
            Womens
          </button>
          <button
            className="text-left pb-2 mt-4 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 duration-300 font-bold"
            onClick={() => setSearch("Kids")}
          >
            Kids
          </button>
          <button
            className="text-left pb-2 mt-4 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 duration-300 font-bold"
            onClick={() => setSearch("BagPack")}
          >
            BagPack
          </button>
          <button
            className="text-left pb-2 mt-4 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 duration-300 font-bold"
            onClick={() => setSearch("Shoes")}
          >
            Shoes
          </button>
          <button
            className="text-left pb-2 mt-4 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 duration-300 font-bold"
            onClick={() => setSearch("Others")}
          >
            Others
          </button>
          <button
            className="text-left pb-2 mt-4 border-b-2 border-transparent hover:border-orange-500 focus:border-orange-500 duration-300 font-bold"
            onClick={() => setSearch("Uncategorize")}
          >
            Uncategorized
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
