import React from "react";

const PlaceOrder = () => {
  const myCartProduct = localStorage.getItem("cart");
  const cartProduct = JSON.parse(myCartProduct);

  console.log(cartProduct);
  return (
    <div className="container mx-auto mb-10">
      <h1 className="text-2xl font-bold pt-4 pb-6">Your Products</h1>
      <table className="min-w-full">
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
          {cartProduct &&
            cartProduct.map((item, key) => (
              <tr key={key} className="font-bold">
                <td className="px-6 py-4 whitespace-nowrap ">
                  <img className=" w-28" src={item?.image} alt="CartImage" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {item.price}$
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  {item.price}$
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-black">
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlaceOrder;
