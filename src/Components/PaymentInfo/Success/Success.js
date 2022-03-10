import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Success = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({});
  console.log(orderDetails);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  }, [id]);
  return (
    <div className=" min-h-[50vh]">
      <h1 className="text-3xl">Payment Succesfull. Confirm Your Order</h1>
      <h1 className="text-3xl">Your Id is {id}</h1>
      <button>Confirm Order</button>
    </div>
  );
};

export default Success;
