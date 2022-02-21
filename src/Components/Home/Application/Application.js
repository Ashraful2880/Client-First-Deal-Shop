import React from "react";
import { Link } from "react-router-dom";
import app1 from "../../../Images/app-1.png";
import app2 from "../../../Images/app-2.png";
import appTracker from "../../../Images/app track.png";

const Application = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="py-12">
          <img src={appTracker} alt="app Tracker Phone Logo" />
        </div>
        <div className="lg:text-left sm:text-center lg:pt-14 sm:pt-0">
          <h1 className="text-4xl font-bold py-5">
            Get More With
            <span className="text-orange-500"> Our Application</span>
          </h1>
          <p className="mb-12 lg:w-3/4 sm:w-full">
            Nunc pellentesque orci sed tempor pharetra. Morbi molestie purus in
            interdum facilisis. Mauris commodo mi a egestas sollicitudin. Mauris
            pharetra placerat sem vel fringilla.
          </p>
          <div className="flex items-center my-5">
            <h5 className="bg-orange-500 hover:bg-white hover:text-orange-500 border border-orange-500 text-white px-3 py-2 rounded-full font-bold duration-300">
              01
            </h5>
            <h4 className="font-bold text-xl ml-5 cursor-pointer">
              Order From Any Location
            </h4>
          </div>
          <div className="flex items-center mb-5">
            <h5 className="bg-orange-500 hover:bg-white hover:text-orange-500 border border-orange-500 text-white px-3 py-2 rounded-full font-bold duration-300">
              02
            </h5>
            <h4 className="font-bold text-xl ml-5 cursor-pointer">
              Get Important Notices
            </h4>
          </div>
          <div className="flex items-center mb-5">
            <h5 className="bg-orange-500 hover:bg-white hover:text-orange-500 border border-orange-500 text-white px-3 py-2 rounded-full font-bold duration-300">
              03
            </h5>
            <h4 className="font-bold text-xl ml-5 cursor-pointer">
              Follow Delivery Status
            </h4>
          </div>
          <div className="flex mt-12 mb-6">
            <Link to="/home" className="mx-2">
              <img src={app1} alt="Apple Icon" />
            </Link>
            <Link to="/home" className="mx-2">
              <img src={app2} alt="google play" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
