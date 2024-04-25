import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { AboutUs } from '../pages/About/AboutUs';
import Footer from '../Components/Footer/Footer';
import { Services } from '../pages/Services/Services';
import { ContactUsPage } from '../Components/ContactUs/ContactUsPage';
import { Navbar } from '../Components/Navbar/Navbar';



export const UserRoute = () => {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about-us' element={<AboutUs/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/contact-us' element={<ContactUsPage/>} />

    </Routes>
    <Footer/>

    </BrowserRouter>

  );
};
