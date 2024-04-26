import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { AboutUs } from '../pages/About/AboutUs';
import Footer from '../Components/Footer/Footer';
import { Products } from '../pages/Products/Product';
import { ContactUsPage } from '../Components/ContactUs/ContactUsPage';
import { Navbar } from '../Components/Navbar/Navbar';
import { FoodServices } from '../pages/Services/FoodServices';
import { HealthCare } from '../pages/Services/HealthCare';
import { EducationalS } from '../pages/Services/EducationalS';
import { DigitalS } from '../pages/Services/DigitalS';



export const UserRoute = () => {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about-us' element={<AboutUs/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/contact-us' element={<ContactUsPage/>} />
    <Route path='/product/foody-services' element={<FoodServices/>} />
    <Route path='/product/health-care' element={<HealthCare/>} />
    <Route path='/product/educational-services' element={<EducationalS/>} />
    <Route path='/product/digital-services' element={<DigitalS/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
};
