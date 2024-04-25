import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import logo from '../../Components/assets/images/logdo2.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };

    return (
        <>
          <div className='w-[100%] border-bottom '>
          <nav className="  shadow-lg  shadow-gray-20 w-full fixed top-0 z-10 ">
                <div className="max-sm:flex sm:flex  max-sm:justify-between sm:justify-between ">
                    <div className="flex items-start md:hidden bg-navbg1 max-sm:bg-white justify-center items-center px-2">
                        <button onClick={toggleSidebar} className="text-white   max-sm:text-black">
                            <svg className="w-6 h-6 text-4xl" fill="none" stroke="currentColor" viewBox="-0 5 20 20">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                 

                  <div className='w-[100%] flex justify-between  '>
                         {/* logo */}
                         <div class='md:order-1 w-1/2 max-sm:w-full  sm:w-full  flex items-center justify-center py-2 bg-navbg1 max-sm:bg-white'>
                        <div class="flex items-center justify-end">
                            <img src={logo} alt="Logo" class="lg:h-[74px] lg:w-[80px] max-sm:h-[63px] sm:h-[50px] sm:w-[60px] bg-white rounded-full p-[2px] max-sm:w-[60px]" />
                            <span class="text-white text-lg max-sm:text-base max-md:text-base bg-orange-500 px-[6px] py-[2px] rounded-sm ">Pushing up performance</span>
                        </div>
                    </div>


                 <div className='md:order-2 flex items-center justify-end logobg  w-1/2 sm:w-full  hidden md:block px-5  '>
                 <div class="flex items-center justify-center h-full">
                    <div class="flex flex-col items-center">
                        <ul class="flex flex-col items-center  md:flex-row md:gap-10 max-sm:gap-4 sm:gap-4">
                            <li><a href="/" class="text-gray-900 text-lg">Home</a></li>
                            <li>
                                <Link to="/about-us" >
                                <p class="text-gray-900 text-lg">About</p>
                                </Link>
                                </li>
                                <li>
                                <Link to="/about-us" >
                                <p class="text-gray-900 text-lg">Products</p>
                                </Link>
                                </li>

                               <li> <Link to="/services" >
                                <p class="text-gray-900 text-lg">Services</p>
                                </Link></li>
                                <li> <Link to="/contact-us" >
                                <p class="text-gray-900 text-lg">Contact Us</p>
                                </Link></li>
                                

                        </ul>
                    </div>
                </div>

                 </div>
                  </div>
                </div>
            </nav>
          </div>
            {showSidebar && (
                <div className="fixed inset-0 bg-gray-900  text-white z-50 w-[250px]">
                    <div className="flex  p-4">
                        <button onClick={closeSidebar} className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    {/* sidebar */}
                 <Sidebar/>
                </div>
            )}
        </>
    );
};

export default Navbar;






