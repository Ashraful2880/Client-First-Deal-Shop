import React from "react";
import MiddleHeader from "../MiddleHeader/MiddleHeader";
import TopHeader from "../TopHeader/TopHeader";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <MiddleHeader />
      <h1 className="bg-indigo-500">This is Header</h1>
    </div>
  );
};

export default Header;
