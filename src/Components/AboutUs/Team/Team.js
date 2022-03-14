import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Team.css";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Pagination]);

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://safe-bastion-76919.herokuapp.com/about")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="lg:mb-14 mb-1">
      <h5 className="text-orange-500 text-2xl font-bold uppercase">
        Our Members
      </h5>
      <h2 className="text-3xl uppercase font-bold mb-10">Meet Our Teams</h2>
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
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {teams?.map((team, key) => (
              <SwiperSlide key={key}>
                <div className="border rounded-lg mx-auto bg-white pb-1 team-container">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-lg"
                      src={team?.image}
                      alt="TeamImage"
                    />
                  </div>
                  <div className="px-4 text-left overlay-details">
                    <div className="flex justify-between items-center pt-1">
                      <div>
                        <h4 className="text-lg font-bold text-orange-500">
                          {team?.name}
                        </h4>
                        <h5 className="text-sm font-bold text-gray-300">
                          {team?.designation}
                        </h5>
                      </div>
                      <h1>
                        <a href="https://ashrafulislambd.com">
                          <i className="fab fa-facebook mx-1 text-gray-200 text-xl hover:text-orange-500  duration-300"></i>
                        </a>
                        <a href="https://ashrafulislambd.com">
                          <i className="fab fa-twitter mx-1 text-gray-200 text-xl hover:text-orange-500  duration-300"></i>
                        </a>
                        <a href="https://ashrafulislambd.com">
                          <i className="fs-4 fab fa-instagram mx-1 text-gray-200 text-xl hover:text-orange-500 duration-300"></i>
                        </a>
                      </h1>
                    </div>
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

export default Team;
