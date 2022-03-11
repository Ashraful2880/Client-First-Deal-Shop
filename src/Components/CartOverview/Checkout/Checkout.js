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
    <div className=" min-h-screen container mx-auto">
      <div className="flex justify-around mb-52 border border-gray-300 rounded-lg mt-10">
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6 pb-10">
            <div class="mt-5 md:mt-0 md:col-span-2">
              <h2 className="text-2xl text-left mt-4 mb-2 font-bold ml-1">
                Billing Address
              </h2>

              <div class=" shadow-2xl overflow-hidden rounded-md border border-gray-200">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="cus_name"
                        className="block font-bold text-sm text-left"
                      >
                        Customer Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                        placeholder="Customer Name Here"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="email"
                        className="block font-bold text-sm text-left"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                        placeholder="Customer Email Here"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="street-address"
                        className="block font-bold text-sm text-left"
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="street address"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                        placeholder="Street Where You Live"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="state"
                        className="block font-bold text-sm text-left"
                      >
                        Address Line-2
                      </label>
                      <input
                        type="text"
                        name="address2"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                        placeholder="Your Address Line"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="city"
                        className="block font-bold text-sm text-left"
                      >
                        City Name
                      </label>
                      <input
                        type="text"
                        name="city"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                        placeholder="Your City Name Here"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="state"
                        className="block font-bold text-sm text-left"
                      >
                        Your State
                      </label>
                      <input
                        type="text"
                        name="state name"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                        placeholder="Your State"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="postal"
                        className="block font-bold text-sm text-left"
                      >
                        Zip / Postal Code
                      </label>
                      <input
                        type="number"
                        name="postal"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                        placeholder="Zip / Postal Code Here"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="postal"
                        className="block font-bold text-sm text-left"
                      >
                        Your Phone Number
                      </label>
                      <input
                        type="number"
                        name="phone"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                        placeholder="Enter a Active Number"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        for="country"
                        className="block font-bold text-sm text-left"
                      >
                        Country
                      </label>
                      <select
                        name="country"
                        autocomplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      >
                        <option>Bangladesh</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="px-4 pb-6 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={handlePay}
                    className="bg-orange-500 border border-orange-500 text-white px-3 py-2 rounded-md ml-2 hover:bg-transparent hover:text-orange-500 duration-300"
                  >
                    Proced To Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 sm:mt-0 w-1/4">
          <div class="md:grid md:grid-cols-3 md:gap-6 pb-10">
            <div class="mt-5 md:mt-0 md:col-span-2">
              <h2 className="text-2xl text-left mt-4 mb-2 font-bold ml-1">
                Order Summary
              </h2>

              <div class=" shadow-2xl overflow-hidden rounded-md border border-gray-200">
                <div class="px-4 pb-6 bg-gray-50 text-right sm:px-6">
                  <div className="flex justify-between ">
                    <h4 className="text-md font-bold">Your Orderd Items</h4>
                    <h4 className="text-orange-500 text-lg font-bold">4</h4>
                  </div>
                  <div>
                    <div className="flex justify-between border border-b-0 py-2 px-4">
                      <p>Product Name</p>
                      <p>60$</p>
                    </div>
                    <div className="flex justify-between border border-b-0 py-2 px-4">
                      <p>Product Name</p>
                      <p>90$</p>
                    </div>
                    <div className="flex justify-between border-b-0 py-2 px-4">
                      <p>Product Name</p>
                      <p>20$</p>
                    </div>
                    <div className="flex justify-between border py-2 px-4">
                      <p>Total</p>
                      <p>140$</p>
                    </div>
                    <div className="flex justify-between border py-2 px-4">
                      <p>Promo</p>
                      <p className="text-orange-500">-10$</p>
                    </div>
                    <div className="flex justify-between border py-2 px-4">
                      <p className="font-bold">Grand Total</p>
                      <p className="font-bold">130$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
