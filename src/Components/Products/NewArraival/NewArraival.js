import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useProducts from "../../../Hooks/UseProducts";
import { Link } from "react-router-dom";
import Rating from "react-rating";

SwiperCore.use([Autoplay, Pagination]);

const NewArraival = () => {
  const [products] = useProducts();
  return (
    <div className="container mx-auto mb-10">
      <div className="overflow-hidden px-1">
        <Link to="/home">
          <img
            className="w-full hover:scale-105 duration-1000"
            src="https://i.ibb.co/hmDN8fs/New-Arrival-bannar.jpg"
            alt="Off Banner"
          />
        </Link>
      </div>
      {products?.length > 0 ? (
        <div className="flex my-10 border shadow-xl p-5">
          <div className="w-full overflow-hidden px-5">
            <h3 className="text-left mb-3 font-bold lg:text-3xl sm:text-sm">
              New Arraival Products
            </h3>
            <hr
              className="bg-orange-500 lg:mb-14 mb-8"
              style={{ padding: "1px 0px" }}
            />
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
                  slidesPerView: 4,
                },
                1020: {
                  slidesPerView: 6,
                },
              }}
              className="mySwiper"
            >
              {products?.map((product, key) => (
                <SwiperSlide key={key}>
                  <div className="border rounded-lg mx-auto bg-white py-10 lg:max-h-80 md:max-h-80 sm:h-full mb-10">
                    <div className="overflow-hidden relative product-link ">
                      <img
                        className="rounded-t-lg product-Image"
                        src={product?.url}
                        alt="ProductsImage"
                      />
                      <Link
                        to="/blogs"
                        className="overlay overflow-hidden absolute bottom-0 left-0 right-0 h-0 w-full bg-gray-500"
                      >
                        <p className=" text-orange-500 absolute top-1/2 left-1/2 text"></p>
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
          src="https://i.ibb.co/D1GcjP6/Loading.gif"
          alt="Loading..."
        />
      )}
    </div>
  );
};

export default NewArraival;
