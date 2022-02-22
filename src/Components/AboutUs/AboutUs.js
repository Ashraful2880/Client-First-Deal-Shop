import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto" style={{ minHeight: "70vh" }}>
      <h3 className="text-left my-3 font-bold text-3xl">Few Words About Us</h3>
      <hr className="bg-orange-500" style={{ padding: "1px 0px" }} />
      <div className="mt-4 mb-20">
        <h5 className="text-orange-500 text-xl font-bold uppercase">
          Our Testimonial
        </h5>
        <h2 className="text-2xl uppercase font-bold">Happy Customeer Quotes</h2>
        <div>counter Effect Here</div>
      </div>
      <div className="mt-4 mb-20">
        <h5 className="text-orange-500 text-xl font-bold uppercase">
          Our Members
        </h5>
        <h2 className="text-2xl uppercase font-bold">Happy Customeer Quotes</h2>
        <div>Meet Our Team</div>
      </div>
    </div>
  );
};

export default AboutUs;
