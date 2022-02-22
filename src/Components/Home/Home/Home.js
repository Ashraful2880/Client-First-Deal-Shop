import React from "react";
import Blogs from "../../Blogs/Blogs";
import BestSellar from "../../Products/BestSellar/BestSellar";
import TopTrending from "../../Products/TopTrending/TopTrending";
import Application from "../Application/Application";
import Banner from "../Banner/Banner";
import Offer from "../Offer/Offer";
import OfferBanner from "../OfferBanner/OfferBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Offer />
      <TopTrending />
      <OfferBanner />
      <BestSellar />
      <Application />
      <Blogs />
    </div>
  );
};

export default Home;
