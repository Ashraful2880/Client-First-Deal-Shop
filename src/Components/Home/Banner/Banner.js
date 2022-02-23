import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Autoplay, Pagination]);

const Banner = () => {
  return (
    <>
      <Swiper
        effect={"slide"}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={2500}
        className="mySwiper slider-container"
      >
        <SwiperSlide>
          <img
            className=" h-full w-full"
            src="https://i.ibb.co/txs8GmD/register-bannar.jpg"
            alt="SliderImage"
          />
          <div className="text-left absolute xl:top-44 lg:top-40 md:top-28 sm:top-16 top-8 left-48">
            <h1 className="xl:text-7xl lg:text-6xl md:text-3xl sm:text-2xl font-bold text-white">
              Choose a New
            </h1>
            <h2 className="xl:text-5xl lg:text-4xl md:text-xl sm:text-sm font-bold my-2 text-orange-500">
              leap Stick Brand
            </h2>
            <h4 className="lg:mt-5 md:mt-2 sm:mt-1 text-gray-100 lg:text-3xl md:text-xl sm:text-sm font-semibold mb-2">
              With 20% Discount
            </h4>
            <Link to="/shop">
              <button className="border border-orange-500 rounded-md px-4 lg:py-2 sm:py-1 lg:text-lg sm:text-xs text-white lg:font-bold sm:font-normal bg-orange-500 hover:bg-transparent hover:text-orange-500 duration-300 lg:mt-10 md:mt-8 sm:mt-8">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-full w-full"
            src="https://i.ibb.co/THkLWXS/slider-3.jpg"
            alt="SliderImage"
          />
          <div className="text-left absolute xl:top-44 lg:top-40 md:top-28 sm:top-16 top-8 left-48">
            <h1 className="xl:text-7xl lg:text-6xl md:text-3xl sm:text-2xl font-bold">
              Western Collections
            </h1>
            <h2 className="xl:text-5xl lg:text-4xl md:text-xl sm:text-sm font-bold my-2 text-orange-500">
              For All WoMens Style
            </h2>
            <h4 className="lg:mt-5 md:mt-2 sm:mt-1 text-gray-800 lg:text-3xl md:text-xl sm:text-sm font-semibold mb-2">
              With 25% Discount
            </h4>
            <Link to="/shop">
              <button className="border border-orange-500 rounded-md px-4 lg:py-2 sm:py-1 lg:text-lg sm:text-xs text-white lg:font-bold sm:font-normal bg-orange-500 hover:bg-transparent hover:text-orange-500 duration-300 lg:mt-10 md:mt-8 sm:mt-8">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-full w-full"
            src="https://i.ibb.co/bXhDVTV/slider-1.jpg"
            alt="SliderImage"
          />
          <div className="text-left absolute xl:top-44 lg:top-40 md:top-28 sm:top-16 top-8 left-48">
            <h1 className="xl:text-7xl lg:text-6xl md:text-3xl sm:text-2xl font-bold">
              Latest Collect Your
            </h1>
            <h2 className="xl:text-5xl lg:text-4xl md:text-xl sm:text-sm font-bold my-2 text-orange-500">
              Perfect Womens Style
            </h2>
            <h4 className="lg:mt-5 md:mt-2 sm:mt-1 text-gray-800 lg:text-3xl md:text-xl sm:text-sm font-semibold mb-2">
              With 30% Discount
            </h4>
            <Link to="/shop">
              <button className="border border-orange-500 rounded-md px-4 lg:py-2 sm:py-1 lg:text-lg sm:text-xs text-white lg:font-bold sm:font-normal bg-orange-500 hover:bg-transparent hover:text-orange-500 duration-300 lg:mt-10 md:mt-8 sm:mt-8">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-full w-full"
            src="https://i.ibb.co/S7qscqJ/slider-2.jpg"
            alt="SliderImage"
          />
          <div className="text-left absolute xl:top-44 lg:top-40 md:top-28 sm:top-16 top-8 left-48">
            <h1 className="xl:text-7xl lg:text-6xl md:text-3xl sm:text-2xl font-bold">
              Finding Your
            </h1>
            <h2 className="xl:text-5xl lg:text-4xl md:text-xl sm:text-sm font-bold my-2 text-orange-500">
              Mens Collection
            </h2>
            <h4 className="lg:mt-5 md:mt-2 sm:mt-1 text-gray-800 lg:text-3xl md:text-xl sm:text-sm font-semibold mb-2">
              With 15% Discount
            </h4>
            <Link to="/shop">
              <button className="border border-orange-500 rounded-md px-4 lg:py-2 sm:py-1 lg:text-lg sm:text-xs text-white lg:font-bold sm:font-normal bg-orange-500 hover:bg-transparent hover:text-orange-500 duration-300 lg:mt-10 md:mt-8 sm:mt-8">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
