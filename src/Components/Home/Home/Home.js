import React from "react";
import Team from "../../AboutUs/Team/Team";
import Blogs from "../../Blogs/Blogs";
import Contact from "../../Contact/Contact";
import BestSellar from "../../Products/BestSellar/BestSellar";
import HotDeal from "../../Products/HotDeal/HotDeal";
import NewArraival from "../../Products/NewArraival/NewArraival";
import TopTrending from "../../Products/TopTrending/TopTrending";
import Application from "../Application/Application";
import Banner from "../Banner/Banner";
import Newslater from "../Newslater/Newslater";
import Offer from "../Offer/Offer";
import OfferBanner from "../OfferBanner/OfferBanner";
import Topbrands from "../Topbrands/Topbrands";

const Home = () => {
  return (
    <div>
      <Banner />
      <Offer />
      <TopTrending />
      <OfferBanner />
      <BestSellar />
      <NewArraival />
      <HotDeal />
      <Application />
      <Blogs />
      <Team />
      <Newslater />
      <Topbrands />
      <Contact />
    </div>
  );
};

export default Home;
