import React from "react";
import "./Newslater.css";

const Newslater = () => {
  return (
    <div className="flex justify-center mb-12 pt-20 ">
      <div className="w-full flex">
        <div className="w-full hidden lg:block bg-cover rounded-l-lg subscribeContainer"></div>
        <div className="w-full lg:w-7/12 p-5 rounded-lg lg:rounded-l-none pb-20 bg-gray-900">
          <h1 className="pt-10 text-4xl text-center text-orange-500 font-semibold leading-tight">
            Subscribe Newslater
          </h1>
          <form className="pt-6 text-center flex justify-between items-center">
            <input
              className="w-full px-4 py-3 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline mx-1"
              name="email"
              type="email"
              placeholder="Subscribe Our Newslater"
            />
            <button
              className="px-10 py-2 font-bold text-white bg-orange-500 border border-orange-500 rounded-lg hover:bg-transparent duration-300 mx-1"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <div className="text-white mt-10 text-center">
            <h3 className="text-4xl mb-2">Alwayes Get Up to date</h3>
            <h3 className="text-xl">With Best Deal Offer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
