import React, {useState} from "react";
export const Sidebar = () =>{

    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };
    return(
        <div className="sidebar px-2">
        <ul>
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="about-us" className="text-white">About</a></li>
            <li><a href="services" className="text-white">Services</a></li>
            <li><a href="contact-us" className="text-white">Contact</a></li>
        </ul>
    </div>
)}


