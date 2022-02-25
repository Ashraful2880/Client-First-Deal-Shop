import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" w-4/6 mx-auto py-24 bg-gray-100 rounded-xl my-10">
      <img
        className="mx-auto"
        src="https://i.ibb.co/ThGcj8s/404.png"
        alt="Error Page"
      />
      <p className="text-gray-600 text-lg mt-4 mb-10">
        We Cannot Find The Page You Are Looking For
      </p>
      <Link to="/home">
        <button className="bg-orange-500 px-3 py-2 border border-orange-500 rounded-lg font-bold text-white hover:bg-transparent hover:text-orange-500 duration-300">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
