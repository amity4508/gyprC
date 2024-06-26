import React from "react";
import { Hero, HeroSlider } from "../../Components/Sliders/HeroSlider";
import { ExpertArea } from "../../Components/Cards/Experts";
import { Testimonial } from "../../Testimonials/Testimonial";
import { AboutUs } from "../About/AboutUs";
import { ContactUs } from "../../Components/ContactUs/Contact";
import { CompanyInfo } from "../../Components/CompanyInfo/CompanyInfo";
import { Nimmin } from "../../Components/CompanyInfo/Nimmin";
import { BitBee } from "../../Components/CompanyInfo/BitBeet";
import { TingleTaste } from "../../Components/CompanyInfo/TingleTaste";
import { EquipMedy } from "../../Components/CompanyInfo/EquipMedy";
import { TeacherCool } from "../../Components/CompanyInfo/TeacherCool";
export const Home = () =>{
    return(
        <>
      <div className="bg-white">
          
      <Hero/>
        <ExpertArea />
        <CompanyInfo/>
        <TingleTaste/>
        <EquipMedy/>
        <Nimmin/>
        <BitBee/>
        <TeacherCool/>
        {/* <Testimonial/> */}
        <ContactUs/>
      </div>
        
        </>
    )
}