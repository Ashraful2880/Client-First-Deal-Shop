import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import loader from "../../../Images/Loading.gif";
import trendingBanner from "../../../Images/top-trending.jpg";
import useProducts from "../../../Hooks/UseProducts";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./TopTrending.css";
SwiperCore.use([Autoplay, Pagination]);

const TopTrending = () => {
  const [products] = useProducts();
  return (
    <div className="container mx-auto">
      <h3 className="text-left my-3 mx-6 font-bold text-3xl">
        Top Trending Products
      </h3>
      <hr className="bg-orange-500" style={{ padding: "1px 0px" }} />
      {products?.length > 0 ? (
        <div className="flex">
          <div className="mt-7 overflow-hidden">
            <Link to="/home">
              <img
                className=" hover:scale-125 duration-1000"
                src={trendingBanner}
                alt="Trending Banner"
              />
            </Link>
          </div>
          <div className="w-full mt-7 pb-10 overflow-hidden px-5">
            <Swiper
              loop={true}
              autoplay={{ delay: 2000 }}
              grabCursor={true}
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1020: {
                  slidesPerView: 5,
                },
              }}
              className="mySwiper"
            >
              {products?.map((product, key) => (
                <SwiperSlide key={key}>
                  <div
                    className="border rounded-lg mx-auto bg-white"
                    style={{ height: "270px" }}
                  >
                    <div className="overflow-hidden relative product-link ">
                      <img
                        className="rounded-t-lg product-Image"
                        src={product?.url}
                        alt="ProductsImage"
                      />
                      <Link to="/blogs" className="overlay">
                        <p className="cart-button text"></p>
                        <p className="cart-button icon">
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
                      <span className="text-sm font-bold bg-orange-500 text-white p-2 rounded-full absolute top-2 left-2">
                        {product?.price}$
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <img
          className="w-96 rounded-2xl mx-auto mt-3"
          src={loader}
          alt="Loading..."
        />
      )}
    </div>
  );
};

export default TopTrending;
