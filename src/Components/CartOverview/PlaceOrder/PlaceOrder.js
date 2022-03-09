import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState();
  const [grandTotal, setGrandTotal] = useState();

  useEffect(() => {
    const myCartProduct = localStorage.getItem("cart");
    setCartItems(JSON.parse(myCartProduct));
  }, []);

  const removeItem = (id) => {
    const setCart = cartItems.filter((items) => items.productId !== id);
    setCartItems(setCart);
    localStorage.setItem("cart", JSON.stringify(setCart));
    console.log(setCart);
  };

  let TotalCartPrice = cartItems.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);

  const shippingCost = parseFloat((TotalCartPrice / 100) * 10);
  const deliveryCostCalculate = parseFloat((TotalCartPrice / 100) * 15);
  const deliveryCost = deliveryCostCalculate;
  const subTotal = parseFloat(TotalCartPrice + shippingCost + deliveryCost);

  const couponInput = (e) => {
    setCoupon(e.target.value);
  };

  const handleCoupon = (e) => {
    if (coupon === "discount") {
      const discount = subTotal - (subTotal / 100) * 15;
      setGrandTotal(discount);
      alert("Congratualions, You have Get 15% discount");
      setCoupon("");
    } else {
      alert("Wrong Coupon Code");
      setCoupon("");
    }
  };
  /*   const savePdDetails = () => {
    localStorage.setItem("Checkout", JSON.stringify(cartItems));
  }; */

  return (
    <div className="container mx-auto mb-10 min-h-screen">
      <h1 className="lg:text-3xl sm:text-sm font-bold pt-7 pb-3 text-left">
        Products You Have Added
      </h1>
      <div className="flex justify-between min-h-[55vh]">
        <table className="w-3/4 mr-2 border">
          <thead className=" divide-y border-b-2 border-t border-gray-300">
            <tr>
              <th
                scope="col"
                className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
              >
                Image
              </th>
              <th
                scope="col"
                className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
              >
                Product
              </th>
              <th
                scope="col"
                className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
              >
                Price
              </th>
              <th
                scope="col"
                className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
              >
                Total
              </th>
              <th
                scope="col"
                className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
              >
                Romove
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {cartItems &&
              cartItems.map((item, key) => (
                <tr key={key} className="font-bold">
                  <td className="px-6 py-4 whitespace-nowrap mx-auto">
                    <img
                      className="w-28 mx-auto"
                      src={item?.image}
                      alt="CartImage"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {item?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {item?.price}$
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {item?.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {item?.price}$
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-orange-600">
                    <button onClick={() => removeItem(item?.productId)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="cart border w-1/4 ml-2 text-left relative">
          <h2 className="text-xl font-bold border-b-2 py-3 text-center">
            Details Of Cost
          </h2>
          <div className="px-8 pt-8">
            <h2 className="text-lg font-bold border-b my-4">
              Cart Sub Total:{" "}
              <span className="text-orange-500">{TotalCartPrice}$</span>
            </h2>
            <h2 className="text-lg font-bold border-b my-4">
              Shipping:{" "}
              <span className="text-orange-500">
                {shippingCost?.toFixed(2)}$
              </span>
            </h2>
            <h2 className="text-lg font-bold border-b my-4">
              Delivery:{" "}
              <span className="text-orange-500">
                {deliveryCost?.toFixed(2)}$
              </span>
            </h2>
            <h2 className="text-lg font-bold border-b my-4">
              Total:{" "}
              <span className="text-orange-500">{subTotal?.toFixed(2)}$</span>
            </h2>
          </div>
          <div className="px-8 pt-4 pb-4 flex justify-start">
            <div className="flex items-center border border-orange-500 rounded-lg">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter Coupon Code"
                onBlur={couponInput}
              />
              <button
                className=" text-md font-bold text-white border bg-orange-500 hover:bg-transparent border-orange-500 hover:border-orange-500 hover:text-orange-500 py-1 px-3 rounded-lg hover:border-l-2"
                type="button"
                onClick={handleCoupon}
              >
                Apply
              </button>
            </div>
          </div>
          <div className="px-8 pb-4">
            <h2 className="text-lg font-bold">
              Grand Total: {grandTotal?.toFixed(2) || subTotal}$
            </h2>
          </div>
          <button className="text-lg font-bold bg-orange-500 border border-orange-500 hover:bg-transparent hover:text-orange-500 duration-300 py-3 px-6 rounded-md absolute bottom-4 left-10">
            <Link to="/checkout">Proceed to Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
