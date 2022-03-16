import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Success = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({});
  const goToHome = useNavigate();

  const validateOrder = () => {
    const orderInfo = {
      tran_id: id,
      val_id: orderDetails?.val_id,
    };
    fetch(`https://safe-bastion-76919.herokuapp.com/validate`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {});
    localStorage.removeItem("cart");
    localStorage.removeItem("pendingPayment");
    goToHome("/home");
  };

  useEffect(() => {
    fetch(`https://safe-bastion-76919.herokuapp.com/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  }, [id]);
  return (
    <div className=" min-h-[50vh]">
      <h1 className="text-3xl">Payment Succesfull. Confirm Your Order</h1>
      <h1 className="text-3xl">Your Id is {id}</h1>
      <button
        className="bg-orange-500 hover:bg-transparent border border-orange-500 px-4 py-2 font-bold text-white hover:text-orange-500 rounded-lg duration-300"
        onClick={validateOrder}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Success;
