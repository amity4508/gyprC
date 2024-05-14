import React from 'react';
import logo from "../../Components/assets/images/logdo.png"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-white bg-navbg1 py-2 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
    {/* logo */}
        <div className="mb-4 lg:mb-0">
          <img  src={logo} alt="CompanyLogo" className="h-[80px]" />
        </div>
        
        {/* Navigation Links */}
        <nav className="mb-4  lg:mb-0">
          <ul className="flex max-sm:flex-row  gap-3">
            <li className="">
              <NavLink to="/" className="hover:text-gray-800 text-xl">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/" className="hover:text-gray-800 text-xl">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/" className="hover:text-gray-800 text-xl">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/" className="hover:text-gray-800 text-xl">Home</NavLink>
            </li>
            
        
           
          </ul>
        </nav>
        <div className="SocialMedia">
            <div className="row">
                <ul className='flex gap-3'>
                    <li><a href=""><AiFillFacebook className="text-4xl hover:text-blue-400 rounded"  /></a></li>
                    <li><a href=""><AiFillInstagram className="text-4xl hover:text-blue-400 rounded"  /></a></li>
                    <li><a href=""><AiFillLinkedin className="text-4xl hover:text-blue-400 rounded"  /></a></li>
                    <li><a href=""><AiFillTwitterSquare className="text-4xl hover:text-blue-400 rounded"  /></a></li>

                </ul>
            </div>
        </div>

        {/* Address */}
        <div className="mb-4 lg:mb-0">
          <p>1234 Main Street</p>
          <p>City, State, Zip</p>
        </div>

        {/* Social Media Icons */}
        <div>
          <a href="#" className="text-xl mr-4 hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-xl mr-4 hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
