import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center py-6 ">
          <div>
            <img className="w-48" src={logo} alt="Main Logo" />
          </div>
          <div>
            <p>
              <i className="fa-solid fa-location-dot bg-white p-5 rounded-full text-indigo-600"></i>
            </p>
            <p className="text-white">No: 58 A, East Madison Street,</p>
            <p className="text-white">Baltimore, MD, USA 4508.</p>
          </div>
          <div className="flex justify-center">
            <i className="fa-solid fa-phone-flip bg-white p-5 rounded-full text-indigo-600"></i>
            <h2 className="text-white">+123-456-7890</h2>
          </div>
          <div>
            <Link to="/home">
              <i className="fa-brands fa-facebook mx-2 hover:text-red-600 bg-white p-3 rounded-full text-indigo-600"></i>
            </Link>
            <Link to="/home">
              <i className="fa-brands fa-twitter mx-2 hover:text-red-600 bg-white p-3 rounded-full text-indigo-600"></i>
            </Link>
            <Link to="/home">
              <i className="fa-brands fa-instagram mx-2 hover:text-red-600 bg-white p-3 rounded-full text-indigo-600"></i>
            </Link>
            <Link to="/home">
              <i className="fa-brands fa-whatsapp mx-2 hover:text-red-600 bg-white p-3 rounded-full text-indigo-600"></i>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-container">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-6 pb-10 text-white">
          <div>
            <h4 className="mb-4 text-xl font-bold">Legal</h4>
            <Link to="/home" className="hover:text-red-600">
              <p>Terms Of Service</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Cookies</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Ad Cookies</p>
            </Link>
          </div>

          <div>
            <h4 className="mb-4 text-xl font-bold">Partners</h4>
            <Link to="/home" className="hover:text-red-600">
              <p>Retailers</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Affiliate</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Developers</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Press Release</p>
            </Link>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-bold">Service</h4>
            <Link to="/about" className="hover:text-red-600">
              <p>About Us</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Careers</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Buzz</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Activity Index</p>
            </Link>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-bold">Information</h4>
            <Link to="/about" className="hover:text-red-600">
              <p>Company</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Partners</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Programmes</p>
            </Link>
            <Link to="/home" className="hover:text-red-600">
              <p>Members</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
