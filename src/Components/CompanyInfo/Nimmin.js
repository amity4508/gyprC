import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TestimonialSlider } from "../../Testimonials/Testimonial";
import img1 from "../assets/images/nimmin 729x1064.jpg";
import logo from "../../Components/assets/images/logdo2.png";
import nimmin from "../../Components/assets/images/Nimmin.png"
import { Link } from "react-router-dom";


export const Nimmin = () => {
  const NimminData = [
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
      quote:
        "Another testimonial quote of digital of digital technology and publishing expertise has streamlined and simplified technology and publishing expertise has streamlined and simplified.",
      author: "Another Author",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div
      className="mt-[100px] pb-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255, 0.3), rgba(255,255,255, 0.3)), url(${nimmin})`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto mb-10  lg:px-8">
        <div className="py-10 text-end">
          <h1 className="text-6xl jersey-25-regular max-sm:text-3xl max-sm:text-center font-bold text-white">
            Nimmin - MyBananaProduct
          </h1>
        </div>
        <div className="flex max-sm:flex-col gap-5">
          <div className="w-2/3 max-sm:w-full mt-14">
            <TestimonialSlider testimonials={NimminData} />
          </div>
          {/* ----Company left img---- */}
          <div class="w-1/3 h-full max-sm:w-full relative group">
            <img className="h-[400px] rounded-[20px] " src={img1} alt="companyImage" />
            {/* <!-- companyLink --> */}
            <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center rounded-[20px] ">
              <div className="  ">
              <Link to="/" className='font-bold text-lg block p-2 bg-white text-black rounded hover:bg-blue-900 hover:text-white'   >Visit this Website</Link>

              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};





