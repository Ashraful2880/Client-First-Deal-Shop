import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Blogs.css";

SwiperCore.use([Autoplay, Pagination]);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://server-firat-deal-shop.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      {blogs?.length > 0 ? (
        <div className="container mx-auto">
          <h3 className="text-left my-3 font-bold text-3xl pl-2">
            From Our Blogs
          </h3>
          <hr className="bg-orange-500" style={{ padding: "1px 0px" }} />

          <div className="w-full pt-7 pb-20 overflow-hidden px-5">
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
                  slidesPerView: 2,
                },
                1020: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {blogs?.map((blog, key) => (
                <SwiperSlide key={key}>
                  <div className="border rounded-lg card mx-auto duration-300 bg-white max-w-md">
                    <div className="overflow-hidden">
                      <img
                        className="w-full card-image rounded-t-lg"
                        src={blog?.url}
                        alt="BlogImage"
                      />
                    </div>
                    <div className="px-4 pb-4 card-content text-left">
                      <h1 className="text-lg font-bold my-5 text-gray-700 cursor-pointer">
                        {blog?.name}
                      </h1>
                      <hr className="border" />
                      <div className="flex justify-evenly pt-2 pb-2">
                        <div className="flex text-stone-500 text-sm">
                          <div className="text-base">
                            Published:
                            <span> {blog?.date} </span>
                          </div>
                        </div>
                        <div className="border-l-2 "></div>
                        <div className="flex text-stone-500 text-sm">
                          <div className="text-base">
                            Posted By:
                            <span> {blog?.by} </span>
                          </div>
                        </div>
                      </div>
                      <hr className="border" />
                      <div className="py-2 text-stone-500">
                        <p>{blog?.description.slice(0, 100)}</p>
                        <button className="text-orange-500 font-bold border-b-2 border-orange-500 border-t-2 border-t-transparent hover:border-t-orange-500 duration-500 px-2 py-1 mt-3 text-sm">
                          Read More
                        </button>
                      </div>
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
    </>
  );
};

export default Blogs;
