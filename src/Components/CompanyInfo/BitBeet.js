import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TestimonialSlider } from "../../Testimonials/Testimonial";
import img1 from "../../Components/assets/images/hero2.png"
import bitbee from "../assets/images/Bitbee 729x1064.jpg"

import logo from "../../Components/assets/images/logdo2.png"
import { Link } from "react-router-dom";


export const BitBee = () => {
  const BitBee = [
    {
      quote:
        "Aptara’s unique combination of digital technology and publishing expertise has streamlined and simplified our operations. We now have a single, trusted content production partner to handle all of our digital publishing needs.",
      author: "Director, Publishing Operations",
      companyLogo: img1,
    },
    {
      quote:
        "Aptara’s unique combination of digital technology and publishing expertise has streamlined and simplified our operations. We now have a single, trusted content production partner to handle all of our digital publishing needs.",
      author: "Director, Publishing Operations",
      companyLogo: img1,
    },
    {
      quote: "Another testimonial quote of digital of digital technology and publishing expertise has streamlined and simplified technology and publishing expertise has streamlined and simplified.",
      author: "Another Author",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="mt-[100px]"  style={{backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`, backgroundSize: '100% 100%', backgroundAttachment:"fixed" }}>

    
    <div className="container mx-auto mb-10 pb-20 lg:px-8 "   >
      <div className="py-10">
        <h1 className="text-6xl max-sm:text-3xl font-bold text-white jersey-25-regular">BitBee Media </h1>
      </div>
      <div className="flex max-sm:flex-col gap-5">
              {/* ----Company left img---- */}
              <div class="w-1/3 h-full max-sm:w-full relative group">
    <img className="h-[400px]" src={bitbee} alt="companyImage" />
           
    {/* <!-- companyLink --> */}
    <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center">
       <div className="  ">
       <Link to="/" className='font-bold text-lg block p-2 bg-white text-black rounded hover:bg-blue-900 hover:text-white'   >Visit this Website</Link>
       </div>
    </div>
</div>
        <div className="w-2/3 max-sm:w-full mt-14">
          <TestimonialSlider testimonials={BitBee} />
        </div>
      </div>
    </div>
    </div>
  );
};