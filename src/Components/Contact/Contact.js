import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-bannar">
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 py-20">
        <div
          className=" w-full sm:p-12 rounded-xl"
          style={{ background: "#0000009e" }}
        >
          <p className="text-4xl font-bold leading-7 text-center text-white mb-5">
            Just Drop a Message For
          </p>
          <p className="text-3xl font-bold leading-7 text-center text-white">
            Contact Us
          </p>
          <form>
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="leading-none p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-whiterounded"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none text-white">
                  Phone
                </label>
                <input
                  type="number"
                  name="number"
                  className="leading-none p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-whiterounded"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="leading-none p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-whiterounded"
                  required
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none text-white">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="h-40 text-base leading-none p-3 focus:outline-none focus:border-orange-500 mt-4 bg-whiteborder-0 rounded"
                ></textarea>
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="mt-9 font-semibold leading-none py-4 px-10 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg duration-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
