import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg lg:h-screen sm:h-full">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 mb-12 pt-20">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-transparent hidden lg:block lg:w-5/12 bg-cover rounded-l-lg logincontainer"></div>
            <div
              className="w-full lg:w-7/12 p-5 rounded-lg lg:rounded-l-none pb-20"
              style={{ background: "#000000a3" }}
            >
              <h3 className="pt-10 text-3xl text-center font-bold text-white">
                Welcome Back To
              </h3>
              <h3 className="pt-1 text-2xl text-center text-orange-500 font-bold">
                First Deal Shop
              </h3>
              <hr className="mt-4 mb-2 border-t" />
              <form className="px-8 pt-6 pb-2 mb-4 text-center">
                <div className="mb-3 lg:w-2/3 sm:w-full md:w-full mx-auto">
                  <label
                    className="block mb-2 text-sm font-bold text-white"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline mb-4"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3 lg:w-2/3 sm:w-full md:w-full mx-auto">
                  <label
                    className="block mb-2 text-sm font-bold text-white"
                    htmlFor="password"
                  >
                    Your Password
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline mb-4"
                    name="password"
                    type="password"
                    placeholder="Your Password"
                  />
                </div>
                <div className="text-center ml-2">
                  <button
                    className=" lg:w-2/3 sm:w-full md:w-full px-4 py-2 font-bold text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white duration-300"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="focus:outline-none text-md font-medium leading-none text-white">
                New user?
                <Link
                  to="/signup"
                  className="ml-2 text-orange-500 focus:text-white focus:outline-none hover:underline text-md font-medium leading-none cursor-pointer"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
