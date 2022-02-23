import React from "react";
import CountUp from "react-countup";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="mt-4 mb-20">
      <h5 className="text-orange-500 text-2xl font-bold uppercase">
        Our Testimonial
      </h5>
      <h2 className="text-3xl uppercase font-bold mb-6">
        Happy Customeer Quotes
      </h2>
      <div className="bannar">
        <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 h-64 items-center">
          <div className=" border rounded-lg">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/9ngGnQ6/happy-face.png"
              alt="Happy Customer"
            />
            <h1 className="text-5xl font-bold mb-3 text-white">
              <CountUp end={1000} duration={3} suffix="+" />
            </h1>
            <h3 className="font-bold text-orange-500 text-2xl">
              Happy Customers
            </h3>
          </div>

          <div className=" border rounded-lg">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/9ngGnQ6/happy-face.png"
              alt="Happy Customer"
            />
            <h1 className="text-5xl font-bold mb-3 text-white">
              <CountUp end={670} duration={3} suffix="+" />
            </h1>
            <h3 className="font-bold text-orange-500 text-2xl">
              Trusted Sellar
            </h3>
          </div>

          <div className=" border rounded-lg">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/9ngGnQ6/happy-face.png"
              alt="Happy Customer"
            />
            <h1 className="text-5xl font-bold mb-3 text-white">
              <CountUp end={5000} duration={3} suffix="+" />
            </h1>
            <h3 className="font-bold text-orange-500 text-2xl">Delivery</h3>
          </div>
          <div className=" border rounded-lg ">
            <img
              className="w-24 mx-auto"
              src="https://i.ibb.co/9ngGnQ6/happy-face.png"
              alt="Happy Customer"
            />
            <h1 className="text-5xl font-bold mb-3 text-white">
              <CountUp end={400} duration={3} suffix="+" />
            </h1>
            <h3 className="font-bold text-orange-500 text-2xl">Outlets</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
