import React from "react";
import img1 from "../../Components/assets/images/hero1.jpg"
import { ServicesCard } from "./SerivicesCard";

export const Products = () => {
    return(
        <>
     <div
          className=" mt-20 text-center py-10 jersey-25-regular"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`,
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-6xl py-10 text-white  ">Our Services</h1>
          <p className="text-white text-lg">
            Our motivation and mission is to make Security Adoption & Absorption
            easy for organizations.
          </p>
        </div>
        {/* Services Content */}

        <ServicesCard/>

        <div>

        </div>
        </>
      

    )
}



