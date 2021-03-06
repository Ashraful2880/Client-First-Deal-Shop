import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

const PlaceOrder = () => {
  const alert = useAlert();
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState();
  const [grandTotal, setGrandTotal] = useState();
  const [disablebtn, setDisablebtn] = useState();
  const [disablebtnOpacity, setdisablebtnOpacity] = useState();

  //<------- Get All Cart Products From Local Storage ------->

  useEffect(() => {
    const myCartProduct = localStorage.getItem("cart");
    setCartItems(JSON.parse(myCartProduct));
  }, []);

  //<------ Function For Remove (Added Cart) Item From Local Storage ------->

  const removeItem = (id) => {
    const setCart = cartItems.filter((items) => items.productId !== id);
    setCartItems(setCart);
    localStorage.setItem("cart", JSON.stringify(setCart));
    alert.success("Remove Item From Cart");
  };

  //<------ Function For Calculation Price And Discount Area -------->

  let TotalCartPrice = cartItems.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);

  const shippingCost = parseFloat((TotalCartPrice / 100) * 10);
  const deliveryCostCalculate = parseFloat((TotalCartPrice / 100) * 15);
  const deliveryCost = deliveryCostCalculate;
  const subTotal = parseFloat(TotalCartPrice + shippingCost + deliveryCost);

  const handleCoupon = (e) => {
    if (coupon === "discount") {
      const discount = subTotal - (subTotal / 100) * 15;
      setGrandTotal(discount);
      alert.success("You have Get 15% discount");
      setCoupon("");
      setDisablebtn("none");
      setdisablebtnOpacity("0.7");
    } else {
      alert.error("Wrong Coupon Code");
      setCoupon("");
    }
  };
  //<------ Pending Payment Order Save To Local Storage ---------->

  const orderSaveToLocalStorage = () => {
    const pendingPayment = {
      totalProduct: cartItems?.length,
      totalProductPrice: TotalCartPrice,
      shippingCost: shippingCost.toFixed(2),
      deliveryCost: deliveryCost.toFixed(2),
      totalPrice: subTotal,
      coupon: parseFloat(grandTotal - subTotal) || 0,
      netTotal: grandTotal,
      totalWithoutCoupon: subTotal,
    };
    localStorage.setItem("pendingPayment", JSON.stringify(pendingPayment));
  };

  return (
    <div className="container mx-auto mb-10 min-h-screen">
      <h1 className="lg:text-3xl sm:text-sm font-bold pt-7 pb-3 lg:text-left text-center">
        Products You Have Added
      </h1>
      <div className="lg:flex block justify-between min-h-[55vh]">
        <div className="lg:overflow-hidden overflow-x-scroll lg:w-3/4 w-full mb-4">
          <table className="w-full mr-2 border">
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
                        className="mx-auto lg:w-28 w-full"
                        src={item?.image}
                        alt="CartImage"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black">
                      {item?.name || ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black">
                      {item?.price || 0}$
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black">
                      {item?.quantity || 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black">
                      {item?.price || 0}$
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
        </div>
        <div className="cart border lg:w-1/4 w-full lg:ml-2 ml-0 text-left relative mb-4">
          <h2 className="text-xl font-bold border-b-2 py-3 text-center">
            Details Of Cost
          </h2>
          <div className="px-8 pt-8">
            <h2 className="text-lg font-bold border-b my-4 flex justify-between">
              <span>Products Total: </span>
              <span className="text-orange-500">{TotalCartPrice || 0}$</span>
            </h2>
            <h2 className="text-lg font-bold border-b my-4 flex justify-between">
              <span>Shipping: </span>
              <span className="text-orange-500">
                {shippingCost?.toFixed(2) || 0}$
              </span>
            </h2>
            <h2 className="text-lg font-bold border-b my-4 flex justify-between">
              <span>Delivery: </span>
              <span className="text-orange-500">
                {deliveryCost?.toFixed(2) || 0}$
              </span>
            </h2>
            <h2 className="text-lg font-bold border-b my-4 flex justify-between">
              <span>Sub Total: </span>
              <span className="text-orange-500">
                {subTotal?.toFixed(2) || 0}$
              </span>
            </h2>
          </div>
          <div className="px-8 pt-4 pb-4 flex justify-start">
            <div className="flex items-center border border-orange-500 rounded-lg">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter Coupon Code"
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                className="text-md font-bold text-white border bg-orange-500 hover:bg-transparent border-orange-500 hover:border-orange-500 hover:text-orange-500 py-1 px-3 rounded-lg hover:border-l-2"
                type="button"
                style={{
                  pointerEvents: `${disablebtn}`,
                  opacity: `${disablebtnOpacity}`,
                }}
                onClick={handleCoupon}
              >
                Apply
              </button>
            </div>
          </div>
          <div className="px-8 pb-4 mb-10 lg:mb-32">
            <h2 className="text-lg font-bold flex justify-between">
              <span>Grand Total:</span>
              <span>{grandTotal?.toFixed(2) || subTotal}$</span>
            </h2>
          </div>
          <Link to="/checkout">
            <button
              onClick={orderSaveToLocalStorage}
              className="lg:text-lg text-base font-bold bg-orange-500 border border-orange-500 hover:bg-transparent hover:text-orange-500 duration-300 lg:py-3 py-2 mb-6 lg:px-6 px-3 rounded-md lg:absolute static bottom-4 left-10 lg:ml-1 ml-16"
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
