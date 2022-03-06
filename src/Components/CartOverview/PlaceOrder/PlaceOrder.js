import React from "react";

const PlaceOrder = () => {
  const myCartProduct = localStorage.getItem("cart");
  const cartProduct = JSON.parse(myCartProduct);
  console.log(cartProduct);
  return (
    <div className=" h-screen">
      <h1 className="text-3xl">Place Order Here</h1>
    </div>
  );
};

export default PlaceOrder;
