import React from "react";

const Checkout = () => {
  const handlePay = () => {
    const info = {
      product_name: "Ashraful Islam",
      product_profile: "Details Of Me",
      product_image: "My Image",
      total_amount: 200,
      cus_name: "My Name",
      cus_email: "My Email",
    };
    fetch(`https://safe-bastion-76919.herokuapp.com/init`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data);
      });
  };
  return (
    <div className=" h-screen">
      <h1 className="text-3xl">Checkout Page Here</h1>
      <button
        onClick={handlePay}
        className="bg-orange-500 border border-orange-500 text-white px-3 py-2 rounded-md ml-2 hover:bg-transparent hover:text-orange-500 duration-300"
      >
        Proced To Pay
      </button>
    </div>
  );
};

export default Checkout;
