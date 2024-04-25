import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import logo from '../../Components/assets/images/logdo2.png';

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
          <div className=''>
          <nav className=" navbg p-2 mx-auto flex shadow-lg shadow-gray-300  ">
                <div className="flex items-center justify-between container mx-auto">
                    <div className="flex items-start md:hidden">
                        <button onClick={toggleSidebar} className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    {/* logo */}

                    <div className="flex items-center ">
                        <img src={logo} alt="Logo" className="lg:h-[75px] lg:w-[80px] max-sm:h-[50px] sm:h-[50px] sm:w-[60px]  max-sm:w-[60px]" />
                        <span className="text-white text-lg max-sm:text-base max-md:text-base bg-orange-500 px-[6px] p py-[2px] rounded-sm border border-gray-300 ">Pushing up perfomance</span>
                    </div>
                 
                    <div className="flex hidden md:block">
                        <ul className="md:flex  md:items-center md:space-x-4 lg:gap-6 max-sm:gap-4 sm:gap-4   ">
                            <li><a href="#" className="text-white text-medium ">Home</a></li>
                            <li><a href="#" className="text-white text-medium ">About</a></li>
                            <li><a href="#" className="text-white text-medium ">Services</a></li>
                            <li><a href="#" className="text-white text-medium ">Contact</a></li>
                            <li><a href="#" className="text-white text-medium ">Home</a></li>
                            <li><a href="#" className="text-white text-medium ">About</a></li>
                         
                        </ul>
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






