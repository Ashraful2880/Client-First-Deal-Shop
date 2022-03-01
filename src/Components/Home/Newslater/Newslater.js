import React from "react";
import "./Newslater.css";

const Newslater = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 mb-12 pt-20">
        <div className="w-full flex">
          <div className="w-full h-auto bg-transparent hidden lg:block bg-cover rounded-l-lg subscribeContainer"></div>
          <div className="w-full lg:w-7/12 p-5 rounded-lg lg:rounded-l-none pb-20 bg-gray-700">
            <h1 className="pt-10 text-7xl text-center text-orange-500 font-semibold leading-tight">
              Subscribe &
            </h1>
            <h1 className="pt-1 text-6xl text-center text-white font-semibold  leading-tight">
              Get 15%
            </h1>
            <h1 className="pt-1 text-5xl text-center text-orange-500 font-semibold leading-tight">
              Discount
            </h1>
            <form className=" px-4 pt-6 pb-2 mb-4 text-center">
              <div className="mb-3 w-full mx-auto">
                <label
                  className="block mb-2 text-2xl font-bold text-white text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-4 text-lg leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline mb-4"
                  name="email"
                  type="email"
                  placeholder="Subscribe Our Newslater"
                />
              </div>
              <div className="ml-2 text-center">
                <button
                  className=" lg:w-1/3 sm:w-full md:w-full px-4 py-3 font-bold text-white bg-orange-500 border border-orange-500 rounded-lg hover:bg-transparent duration-300"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="text-white mt-6">
              <h3 className="text-4xl mb-3">Alwayes Get Up to date</h3>
              <h3 className="text-2xl">With Best Deal Offer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
