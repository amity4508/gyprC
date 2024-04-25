import React from "react";
import { Hero, HeroSlider } from "../../Components/Sliders/HeroSlider";
import { ExpertArea } from "../../Components/Cards/Experts";
import { Testimonial } from "../../Testimonials/Testimonial";
import { AboutUs } from "../About/AboutUs";
import { ContactUs } from "../../Components/ContactUs/Contact";
import { CompanyInfo } from "../../Components/CompanyInfo/CompanyInfo";
import { Nimmin } from "../../Components/CompanyInfo/Nimmin";
import { BitBee } from "../../Components/CompanyInfo/BitBeet";
import { MyAssignmentHelp } from "../../Components/CompanyInfo/MyAssignmentHelp";
export const Home = () =>{
    return(
        <>
      <div className="bg-white">
          
      <Hero/>
        <ExpertArea />
        <CompanyInfo/>
        <MyAssignmentHelp/>
        <Nimmin/>
        <BitBee/>
        <Testimonial/>
        <ContactUs/>
      </div>
        
        </>
    )
}