import React from "react";
import SwiperCore, { EffectCube, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

SwiperCore.use([Autoplay]);
const Story = () => {
  return (
    <div className="container mx-auto">
      <h5 className="text-orange-500 text-2xl font-bold uppercase">
        Our Story
      </h5>
      <h2 className="text-3xl uppercase font-bold mb-10">Rate Our Workflow</h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <Swiper
            effect={"cube"}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 0,
              shadowScale: 0,
            }}
            modules={[EffectCube]}
            className="mySwiper"
          >
            <SwiperSlide className="my-3">
              <img
                className="rounded-xl"
                src="https://i.ibb.co/YWR4K2B/pexels-andrea-piacquadio-3765132.jpg"
                alt="AboutImage"
              />
            </SwiperSlide>
            <SwiperSlide className="my-3">
              <img
                className="rounded-xl"
                src="https://i.ibb.co/ct9pxHQ/latest-6.jpg"
                alt="AboutImage"
              />
            </SwiperSlide>
            <SwiperSlide className="my-3">
              <img
                className="rounded-xl"
                src="https://i.ibb.co/wJcK5fP/latest-2.jpg"
                alt="AboutImage"
              />
            </SwiperSlide>
            <SwiperSlide className="my-3 ">
              <img
                className="rounded-xl"
                src="https://i.ibb.co/HpT3LyQ/latest-1.jpg"
                alt="AboutImage"
              />
            </SwiperSlide>
            <SwiperSlide className="my-3">
              <img
                className="rounded-xl"
                src="https://i.ibb.co/J2HWzpV/story-5.jpg"
                alt="AboutImage"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="xl:mx-auto xl:container xl:px-20 md:px-6 px-4 py-5">
            <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
              <div className="text-left">
                <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                  Why First Deals Shop
                </p>
                <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-8/12 w-full">
                  Whether article spirits new her covered hastily sitting her.
                  Money witty books nor son add
                </p>
                <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          style={{ boxShadow: "10px 10px 0px black" }}
                          className="bg-orange-500 p-3 rounded-lg"
                          src="https://i.ibb.co/mDw1vB6/clock.png"
                          alt="clock"
                        />
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8 ">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Time Prompt
                      </h2>
                      <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        Whether article spirits new her covered.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          style={{ boxShadow: "10px 10px 0px black" }}
                          className="bg-orange-500 p-3 rounded-lg"
                          src="https://i.ibb.co/JsbbqY6/support.png"
                          alt="Friendly"
                        />
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Customer Friendly
                      </h2>
                      <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        Whether article spirits new her covered.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          style={{ boxShadow: "10px 10px 0px black" }}
                          className="bg-orange-500 p-3 rounded-lg"
                          src="https://i.ibb.co/TB3jGdg/shipped.png"
                          alt="Fast Delivery"
                        />
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Fast Delivery
                      </h2>
                      <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        Whether article spirits new her covered.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 relative">
                      <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img
                          style={{ boxShadow: "10px 10px 0px black" }}
                          className="bg-orange-500 p-3 rounded-lg"
                          src="https://i.ibb.co/T2sLJfq/easy.png"
                          alt="Easy Payment"
                        />
                      </div>
                    </div>
                    <div className="flex items-start flex-col ml-6 pt-8">
                      <h2 className="text-lg font-semibold leading-4 text-gray-800">
                        Easy Payment
                      </h2>
                      <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                        Whether article spirits new her covered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
