import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center py-6 ">
          <Link to="/home" className=" mb-2">
            <img className=" w-16" src={logo} alt="Main Logo" />
            <h4 className="text-orange-500 text-left font-bold mt-2">
              First Deal Shop
            </h4>
          </Link>
          <div className="flex mb-2">
            <p>
              <i className="fa-solid fa-location-dot bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 p-3 rounded-full text-white mr-5"></i>
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
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-phone-flip bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 p-3 rounded-full text-white mr-5"></i>
            <h2 className="text-white hover:text-orange-500 duration-300 cursor-pointer">
              +123-456-7890
            </h2>
          </div>
          <div className="text-left lg:text-center mb-2">
            <Link to="/home">
              <i className="fa-brands fa-facebook mx-2 bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 p-3 rounded-full text-white"></i>
            </Link>
            <Link to="/home">
              <i className="fa-brands fa-twitter mx-2 bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 p-3 rounded-full text-white"></i>
            </Link>
            <Link to="/home">
              <i className="fa-brands fa-instagram mx-2 bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 p-3 rounded-full text-white"></i>
            </Link>
            <Link to="/home">
              <i className="fa-brands fa-whatsapp mx-2 bg-orange-500 hover:bg-white hover:text-orange-500 duration-300 p-3 rounded-full text-white"></i>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-6 pb-10 text-white">
          <div>
            <h4 className="mb-4 text-xl font-bold">Legal</h4>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Terms Of Service</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Cookies</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Ad Cookies</p>
            </Link>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-bold">Partners</h4>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Retailers</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Affiliate</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Developers</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Press Release</p>
            </Link>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-bold">Service</h4>
            <Link to="/about" className="hover:text-orange-500 duration-300">
              <p>About Us</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Careers</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Buzz</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Activity Index</p>
            </Link>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-bold">Information</h4>
            <Link to="/about" className="hover:text-orange-500 duration-300">
              <p>Company</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Partners</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Programmes</p>
            </Link>
            <Link to="/home" className="hover:text-orange-500 duration-300">
              <p>Members</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
