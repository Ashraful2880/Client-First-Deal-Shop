import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo.png";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img className="w-48" src={logo} alt="Main Logo" />
        </div>
        <div>
          <p>
            <i class="fa-solid fa-location-dot"></i>
          </p>
          <p>No: 58 A, East Madison Street,</p>
          <p>Baltimore, MD, USA 4508.</p>
        </div>
        <div>
          <i class="fa-solid fa-phone-flip"></i>
          <h2>+123-456-7890</h2>
        </div>
        <div>
          <Link to="/home">
            <i className="fa-brands fa-facebook mx-2 hover:text-white"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-twitter mx-2 hover:text-white"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-instagram mx-2 hover:text-white"></i>
          </Link>
          <Link to="/home">
            <i className="fa-brands fa-whatsapp mx-2 hover:text-white"></i>
          </Link>
        </div>
      </div>
      <hr />
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-left">
          <h4 className="mb-4 text-xl font-bold">Legal</h4>
          <Link to="/home">
            <p>Terms Of Service</p>
          </Link>
          <Link to="/home">
            <p>Privacy Policy</p>
          </Link>
          <Link to="/home">
            <p>Cookies</p>
          </Link>
          <Link to="/home">
            <p>Ad Cookies</p>
          </Link>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-bold">Partners</h4>
          <Link to="/home">
            <p>Retailers</p>
          </Link>
          <Link to="/home">
            <p>Affiliate</p>
          </Link>
          <Link to="/home">
            <p>Developers</p>
          </Link>
          <Link to="/home">
            <p>Press Release</p>
          </Link>
        </div>
        <div>
          <h4 className="mb-4 text-xl font-bold">Service</h4>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/home">
            <p>Careers</p>
          </Link>
          <Link to="/home">
            <p>Buzz</p>
          </Link>
          <Link to="/home">
            <p>Activity Index</p>
          </Link>
        </div>
        <div>
          <h4 className="mb-4 text-xl font-bold">Information</h4>
          <Link to="/about">
            <p>Company</p>
          </Link>
          <Link to="/home">
            <p>Partners</p>
          </Link>
          <Link to="/home">
            <p>Programmes</p>
          </Link>
          <Link to="/home">
            <p>Members</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
