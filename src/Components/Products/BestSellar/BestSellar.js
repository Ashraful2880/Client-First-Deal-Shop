import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Rating from "react-rating";

SwiperCore.use([Autoplay, Pagination]);

const BestSellar = () => {
  const [bestSelling, setBestSelling] = useState([]);
  useEffect(() => {
    fetch(
      "https://server-firat-deal-shop.onrender.com/bestSelling?trending=bestSelling"
    )
      .then((res) => res.json())
      .then((data) => setBestSelling(data));
  }, []);

  return (
    <>
      {bestSelling?.length > 0 ? (
        <div className="container mx-auto mb-10">
          <div className="lg:flex md:flex sm:block my-10 border shadow-xl p-5">
            <div className="w-full overflow-hidden px-5">
              <h3 className="text-left mb-3 font-bold lg:text-3xl text-xl">
                Best Selling Products
              </h3>
              <hr
                className="bg-orange-500 lg:mb-14  mb-8"
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
                    slidesPerView: 3,
                  },
                  1020: {
                    slidesPerView: 5,
                  },
                }}
                className="mySwiper"
              >
                {bestSelling?.map((product, key) => (
                  <SwiperSlide key={key}>
                    <div className="border rounded-lg mx-auto bg-white lg:py-10 py-5 h-[300px] mb-2 lg:mb-6">
                      <div className="overflow-hidden relative product-link ">
                        <img
                          className="rounded-t-lg"
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
                      <div className="px-4 text-left">
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
            <div className="overflow-hidden h-full hidden lg:block md:block">
              <Link to="/home">
                <img
                  className=" hover:scale-125 duration-1000 mx-auto"
                  src="https://i.ibb.co/tDLT8N3/Best-Sellar-Bannar.png"
                  alt="Best Selling Banner"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <img
          className="w-96 rounded-2xl mx-auto mt-3"
          src="https://i.ibb.co/D1GcjP6/Loading.gif"
          alt="Loading..."
        />
      )}
    </>
  );
};

export default BestSellar;
