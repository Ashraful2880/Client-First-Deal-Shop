import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-bannar">
      <div className="max-w-5xl mx-auto px-1 lg:px-8 py-20">
        <div
          className=" w-full sm:p-12 rounded-xl px-2 py-10"
          style={{ background: "#0000009e" }}
        >
          <p className="lg:text-4xl md:text-3xl sm:text-2xl font-bold leading-7 text-center text-white lg:mb-5 md:mb-3 sm;mb-2">
            Just Drop a Message For
          </p>
          <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold leading-7 text-center text-white mb-4">
            Contact Us
          </p>
          <form>
            <div className="md:flex items-center lg:mt-12 md:mt-10 sm:mt-4">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="leading-none p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-white rounded"
                  placeholder="Enter Your Name"
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
                  className="leading-none p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-white rounded"
                  placeholder="Enter Contact Number"
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
                  className="leading-none p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-white rounded"
                  placeholder="Enter Your Email"
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
                  placeholder="Your Message"
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
