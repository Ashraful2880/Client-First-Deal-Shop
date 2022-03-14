import React from "react";
import useProducts from "../../../Hooks/UseProducts";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const AllProducts = () => {
  const [products] = useProducts();

  return (
    <div className="container mx-auto pb-10">
      {products?.length > 0 ? (
        <div className="flex mt-4 border shadow-xl p-5">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-col-1 gap-10 overflow-hidden px-5">
            {products?.map((product, key) => (
              <div key={key}>
                <div className="border rounded-lg mx-auto bg-white py-10 relative">
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
      ) : (
        <img
          className="w-96 rounded-2xl mx-auto mt-3"
          src="https://i.ibb.co/D1GcjP6/Loading.gif"
          alt="Loading..."
        />
      )}
    </div>
  );
};

export default AllProducts;
