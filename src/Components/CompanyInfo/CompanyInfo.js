import React from "react";
import img1 from "../../Components/assets/images/hero3.jpg"
import img2 from "../../Components/assets/images/corporate office image 482x627.jpg"
import logo from "../../Components/assets/images/logdo.png"



export const CompanyInfo = () =>{
    return(
        
       <>
       <div className="companyInfo mt-[70px] py-[100px]" style={{backgroundImage:`linear-gradient(to bottom, rgba(21,40,59, 0.8), rgba(21,40,59, 0.8)),url(${img1})`, backgroundSize: '100% 100%', backgroundAttachment:"fixed"  }} >
        <div className=" container mx-auto max-sm:w-[95%] sm:w-[90%] xl:w-[70%] md:h-auto CompanyInfo flex justify-between  bg-white p-10 sm:relative rounded-[40px] max-sm:flex-col  ">
          
             <div className="right w-2/3 max-sm:w-full ">
                <p className="mb-4 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet voluptatem facere suscipit? Repellendus asperiores tempora maiores, soluta eaque incidunt.</p>

                <p className="mb-4 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero recusandae officia sit natus fugit quia non dicta ex libero. Error velit harum quisquam vel tempore cupiditate veniam illum esse.</p>
                <p className="mb-4 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vero recusandae officia sit natus fugit quia non dicta ex libero. Error velit harum quisquam vel tempore cupiditate veniam illum esse.</p>

                {/* <h1 className="text-3xl font-bold text-blue-700 ">GY <span className="text-orange-500">P</span> R</h1> */}
                <img className="h-[100px]" src={logo} />
             </div>

             <div className="left w-1/3 max-sm:w-full text-white lg:absolute top-[-25px] right-[0px] ">

                <img className="h-[490px] w-[280px] max-sm:w-full rounded-3xl max-sm:mt-10 " src={img2} alt="companyImg" />
             </div>
            

        </div>
        </div>
       </>
    )
}