
import React from "react";
import { ContactUs } from "./Contact";
import img1 from "../../Components/assets/images/hero1.jpg"
import { BiCheck } from "react-icons/bi";
import { TfiCup } from "react-icons/tfi";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export const ContactUsPage = () => {
  return (
    <>
   <div
          className=" mt-20 text-center py-10 jersey-25-regular "
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`,
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}>
          <h1 className="text-6xl py-10 text-white  ">Contact Us</h1>
          {/* <p className="text-white text-lg"> We have the Answers </p> */}
        </div>
      {/* Contact inner  */}
     <div className="jersey-25-regular mx-auto text-center py-8">
     <h1 className="text-6xl py-6 text-navBlue  ">Got a Question?</h1>
     <p className="text-white text-3xl text-navBlue ">We have the Answers</p>
     </div>


        <ContactUs/>


             {/* Contact inner  */}
     <div className="jersey-25-regular mx-auto text-center py-10">
     <h1 className="text-6xl py-10 text-navBlue  ">Other Queries?</h1>
     <p className=" text-3xl text-navBlue ">We got you covered</p>



     </div>
     <OtherQueries/>


        <div>

        </div>
    </>
  );
};





export const OtherQueries = () => {
  return (
    <>
      <div
        className=" ourProcess mx-auto py-14 "
       >
        <div className=" container mx-auto mb-12 px-1 ">

          <div class="container mx-auto lg:w-[90%] grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
            <div className="flex flex-col text-center items-center gap-2">
            <span className="" ><TfiCup class="text-6xl max-sm:text-4xl block font-bold  text-navBlue " /></span>               
              <h1 className="text-3xl max-sm:text-2xl text-orange-600 jersey-25-regular  ">Contact Sales</h1>
              <p><a href="tel:8787878787">+91-9871944633</a></p>
            </div>

            <div className="flex flex-col text-center items-center gap-2">
            <span className=" rotate-[320deg] " ><BsFillMegaphoneFill class="text-6xl max-sm:text-4xl block font-bold  text-navBlue " /></span>               
              <h1 className="text-3xl max-sm:text-2xl text-orange-600 jersey-25-regular  ">Media Enquiries</h1>
              <p><a href="mailto:support@gypr.com">support@gypr.com</a></p>
            </div>

            <div className="flex flex-col text-center items-center gap-2">
            <span className="" ><FaHandshake class="text-6xl max-sm:text-4xl block font-bold  text-navBlue " /></span>               
              <h1 className="text-3xl max-sm:text-2xl text-orange-600 jersey-25-regular  ">Become Partner</h1>
              <p><a href="tel:8787878787">+91-9871944633</a></p>

            </div>

            <div className="flex flex-col text-center items-center gap-2">
            <span className="" ><MdSupportAgent class="text-6xl max-sm:text-4xl block font-bold  text-navBlue " /></span>               
              <h1 className="text-3xl max-sm:text-2xl text-orange-600 jersey-25-regular  ">Support</h1>
              <p><a href="tel:8787878787">+91-9871944633</a></p>

            </div>
                <div className="flex flex-col text-center items-center gap-2">
            <span className="" ><IoLocationSharp class="text-6xl max-sm:text-4xl block font-bold  text-navBlue " /></span>               
              <h1 className="text-3xl max-sm:text-2xl text-orange-600 jersey-25-regular  ">Registered Office</h1>
              <p>Delhi</p>

            </div>

          



            
           
          </div>
        </div>
      </div>
    </>
  );
};
