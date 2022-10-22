import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        {/* Top footer Area */}
        <div className="border-b border-b-gray-500">
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center lg:py-14 py-6">
            <Link to="/home" className=" mb-2 flex justify-center items-center">
              <img
                className="w-1/12"
                src="https://res.cloudinary.com/ashraful-islam/image/upload/v1645943479/First%20Deal-Shop/Logo_mdshou.png"
                alt="Main Logo"
              />
              <h4 className="mx-2 font-bold text-orange-500 text-xl mt-1">
                <span className="text-white">F</span>irst
                <span className="text-white"> D</span>eal
                <span className="text-white"> S</span>hop
              </h4>
            </Link>
            <div className="lg:flex justify-center items-center hidden">
              <p>
                <i className="fa-solid fa-location-dot bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 text-[23px] rounded-full text-white mr-5 h-10 w-10 flex flex-vol justify-center items-center"></i>
              </p>
              <div>
                <p className="text-white hover:text-orange-500 duration-300 cursor-pointer text-left">
                  No: 58 A, East Madison Street,
                </p>
                <p className="text-white hover:text-orange-500 duration-300 cursor-pointer text-left">
                  Baltimore, MD, USA 4508.
                </p>
              </div>
            </div>
            <div className="lg:flex justify-center items-center hidden">
              <i className="fa-solid fa-phone-flip bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 text-[23px] rounded-full text-white mr-5 h-10 w-10 flex flex-vol justify-center items-center"></i>
              <h2 className="text-white hover:text-orange-500 duration-300 cursor-pointer">
                +123-456-7890
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <Link to="/home">
                <i className="fa-brands fa-facebook mx-2 bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 rounded-full text-white h-10 w-10 text-xl flex flex-col justify-center items-center"></i>
              </Link>
              <Link to="/home">
                <i className="fa-brands fa-twitter mx-2 bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 rounded-full text-white h-10 w-10 text-xl flex flex-col justify-center items-center"></i>
              </Link>
              <Link to="/home">
                <i className="fa-brands fa-instagram mx-2 bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 rounded-full text-white h-10 w-10 text-xl flex flex-col justify-center items-center"></i>
              </Link>
              <Link to="/home">
                <i className="fa-brands fa-whatsapp mx-2 bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 rounded-full text-white h-10 w-10 text-xl flex flex-col justify-center items-center"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom footer Area */}
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 place-content-center place-items-center lg:py-14 py-6 text-white w-full">
          <div>
            <div className="text-start w-full flex flex-col justify-start items-start gap-3">
              <h4 className="mb-6 text-xl font-bold">Legal</h4>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Terms Of Service</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Privacy Policy</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Cookies</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Ad Cookies</p>
              </Link>
            </div>
          </div>

          <div>
            <div className="text-start w-full flex flex-col justify-start items-start gap-3">
              <h4 className="mb-6 text-xl font-bold">Partners</h4>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Retailers</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Affiliate</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Developers</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Press Release</p>
              </Link>
            </div>
          </div>
          <div>
            <div className="text-start w-full flex flex-col justify-start items-start gap-3">
              <h4 className="mb-6 text-xl font-bold">Service</h4>
              <Link to="/about" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>About Us</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Careers</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Buzz</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Activity Index</p>
              </Link>
            </div>
          </div>
          <div>
            <div className="text-start w-full flex flex-col justify-start items-start gap-3">
              <h4 className="mb-6 text-xl font-bold">Information</h4>
              <Link to="/about" className=" text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Company</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Partners</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Programmes</p>
              </Link>
              <Link to="/home" className="text-gray-300 hover:text-orange-500 duration-300 flex items-center gap-3">
                <i className="fa-solid fa-angles-right mt-0.5"></i>
                <p>Members</p>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Footer;
