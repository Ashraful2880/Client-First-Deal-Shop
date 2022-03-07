import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const myCartProduct = localStorage.getItem("cart");
    setCartItems(JSON.parse(myCartProduct));
  }, []);

  const removeItem = (id) => {
    const test = cartItems.filter((items) => items.productId !== id);
    setCartItems(test);
    localStorage.setItem("cart", JSON.stringify(test));
    console.log(test);
  };

  return (
    <div className="container mx-auto mb-10 min-h-screen">
      <h1 className="lg:text-3xl sm:text-sm font-bold pt-7 pb-3 text-left">
        Products You Have Added
      </h1>
      <div className="flex justify-between">
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
          <tbody className="bg-white divide-y ">
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
        <div className="cart border w-1/4 ml-2 text-left relative min-h-[50vh]">
          <h2 className="text-xl font-bold border-b-2 py-3 text-center">
            Price And Delivery
          </h2>
          <div className="p-8">
            <h2 className="text-lg font-bold">Cart Sub Total:</h2>
            <h2 className="text-lg font-bold">Shipping:</h2>
            <h2 className="text-lg font-bold">Delivery:</h2>
            <h2 className="text-lg font-bold">Total:</h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="border p-2"
            />
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
