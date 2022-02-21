import React from "react";
import Blogs from "../../Blogs/Blogs";
import Application from "../Application/Application";
import Offer from "../Offer/Offer";

const Home = () => {
  return (
    <div>
      <Offer />
      <Application />
      <Blogs />
    </div>
  );
};

export default Home;
