import React from "react";
import Story from "../Story/Story";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const AboutUs = () => {
  return (
    <div className="container mx-auto" style={{ minHeight: "70vh" }}>
      <div>
        <h3 className="text-left my-3 font-bold text-3xl">
          Few Words About Us
        </h3>
        <hr className="bg-orange-500" style={{ padding: "1px 0px" }} />
      </div>
      <Testimonial />
      <Team />
      <Story />
    </div>
  );
};

export default AboutUs;
