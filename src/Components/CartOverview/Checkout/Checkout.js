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
      <div className="flex justify-around mb-52 border mt-10">
        <div>
          <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
              <div class="border-t border-gray-200"></div>
            </div>
          </div>

          <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="email-address"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autocomplete="email"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="country"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            autocomplete="country-name"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            <option>Bangladesh</option>
                          </select>
                        </div>

                        <div class="col-span-6">
                          <label
                            for="street-address"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Street address
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autocomplete="street-address"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            for="city"
                            class="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autocomplete="address-level2"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="region"
                            class="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autocomplete="address-level1"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="postal-code"
                            class="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal code
                          </label>
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autocomplete="postal-code"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
              <div class="border-t border-gray-200"></div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Order Summary</h1>
        </div>
      </div>

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
