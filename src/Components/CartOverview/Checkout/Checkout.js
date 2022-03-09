import React from "react";

const Checkout = () => {
  const handlePay = () => {
    const order = {
      cus_name: "Ashraful",
      cus_email: "Ami@gmail.com",
      product_name: "test Product",
      product_profile: "test Product",
      product_image: "https://i.ibb.co/tDLT8N3/Best-Sellar-Bannar.png",
      total_amount: 5000,
    };
    fetch(`http://localhost:5000/init`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
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
