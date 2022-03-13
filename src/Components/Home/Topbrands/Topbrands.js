import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Topbrands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch(" https://safe-bastion-76919.herokuapp.com/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mb-14">
      <h5 className="text-orange-500 text-2xl font-bold uppercase">
        Our Brands
      </h5>
      <h2 className="text-3xl uppercase font-bold mb-10">our brand partners</h2>
      <div className=" container mx-auto">
        <div className="w-full overflow-hidden px-5">
          <Swiper
            loop={true}
            autoplay={{ delay: 3000 }}
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
            {brands?.map((brand, key) => (
              <SwiperSlide key={key}>
                <div className="border border-orange-500 rounded-lg mx-auto bg-white pb-1 brand-container">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-lg"
                      src={brand?.image}
                      alt="brandImage"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Topbrands;
