import React from "react";
import img1 from "../../Components/assets/images/hero1.jpg";
import { BiCheck } from "react-icons/bi";

export const DigitalS = () => {
  return (
    <>
      <div className="bg-white">
        <div
          className=" mt-20 text-center py-10 jersey-25-regular"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`,
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-6xl py-10 text-white  ">Digital Marketing Services</h1>
          <p className="text-white text-lg">
            Our motivation and mission is to make Security Adoption & Absorption
            easy for organizations.
          </p>
        </div>
        <div className="container mx-auto py-10 lg:w-[80%] -z-0 ">
          <div className="flex justify-center mb-5">
         
            <hr className="w-[100px] h-[3px] text-black bg-black" />
          </div>
          <p className="text-base text-gray-600 px-3">
            “Making Security Simple”, with a Simple Focus on Niche Cyber
            Security Technologies and the ability to making them be simple for
            adoption and absorption has been our driving force. Our motivation
            and mission are to make Security Adoption & Absorption easy for
            organizations. The complex security terms scare & confuse the
            end-user making it difficult for them to identify the right solution
            which meets their security requirements. This gives rise to GAPS
            which may result in security breaches or compromise. Cybercrime is
            growing and with technology evolving daily, Infosec teams find it
            difficult to cope and be able to identify the right technology
            sufficing their requirements. We have broken the complex solutions
            in easy formats that make absorption way by any organization, be it
            an Enterprise or Government. Our solutions cover Application, Data,
            Infrastructure Security, and Threat Intelligence and benefit both
            the Red & Blue Teams. Our team can help them be proactive and share
            with them various nuances based on their exposure. Our team’s
            approach to IT security issues starts by behaving like an adversary
            or a hacker. This is followed with a joint deep-diving session with
            the customer helps us to identify the appropriate cybersecurity. We
            then break the delivery into multiple phases to enable the process
            to learn, adapt, and modify before moving to the next phase. We
            don’t just deliver products and solutions; we help you build a
            strong and resilient cybersecurity platform capable to adapt easily
            to meet your present and future needs. Our Philosophy to Advice and
            Deliver Right has enabled us to build a strong trust with our
            customers. This has made us their trusted partner for their
            cybersecurity requirements.
          </p>
        </div>

        {/* Our process  */}
        <OurProcess />
        <Approach/>

      </div>
    </>
  );
};

export const OurProcess = () => {
  return (
    <>
      <div
        className=" ourProcess mx-auto jersey-25-regular py-14 "
        style={{
          background: `linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,0, 0.9)), url(${img1})`,
        }}>
        <div className=" container mx-auto mb-12 ">
          <h1 className="text-white text-center text-5xl  mb-12">Our process is a 4-Way Cyclic and starts with</h1>

          <div class="container mx-auto lg:w-[90%] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div className="flex gap-2">
            <span className="" ><BiCheck class="text-4xl block font-bold  text-blue-400 " /></span>               
              <h1 className="text-2xl text-white">Discover and Define</h1>
            </div>

            <div className="flex gap-2">
            <span className="" ><BiCheck class="text-4xl block font-bold  text-blue-400 " /></span>               
              <h1 className="text-2xl text-white">Identify, Automate & Modify</h1>
            </div>

            <div className="flex gap-2">
            <span className="" ><BiCheck class="text-4xl block font-bold  text-blue-400 " /></span>               
              <h1 className="text-2xl text-white">Mitigate, Protect and Prevent</h1>
            </div>

            <div className="flex gap-2">
            <span className="" ><BiCheck class="text-4xl block font-bold  text-blue-400 " /></span>               
              <h1 className="text-2xl text-white">Rediscover and Repeat</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const Approach = () =>{
    return(

        <>
         <div className="container mx-auto lg:w-[80%] px-2">
            <div className="approach flex md:flex-row max-sm:flex-col sm:flex-col  py-10 gap-5 ">

                <div className="left lg:w-1/2 max-sm:w-full sm:w-full">
                    <div className="text-center  py-10 ">
                     <h1 className="text-4xl" >Our Approach</h1>
                     <hr className="w-[100px] mx-auto h-[3px] mt-2 text-black bg-black" />
                     <div className="">
                     <p className="mt-5 text-base text-gray-600">The Modern world has made life easy, but at the same time, it has also has introduced security risks with the unwanted human presence within corporate networks. Defending yourself is by addressing the main problem that is to behave like the adversary who can gain entry and remain undetected.</p>

                     <p className="mt-5 text-base text-gray-600">We believe in helping you be proactive and shift left by adopting security early and help you defend against these unknown adversaries by providing you the knowledge and tools to be proactive with your networks and applications and neutralize them. Like a Jerquer we search for the Jackdaw and help you secure your Cyberspace. This forms the basis of our comprehensive approach to limiting security exposure.</p>
                     </div>
                    </div>
                </div>
            <div className="right lg:w-1/2 max-sm:w-full sm:w-full bg-navbg1 py-14 px-4 " > 
            <h1 className="max-sm:text-4xl text-4xl text-center text-white jersey-25-regular mb-5" >Discovering The Unkown</h1>
            <div className="py-4 text-base text-white">
            <p>
            The greatest threat to any organization or country is the – State-Sponsored Actor, who has all that he needs to take you down. You name a device, a technology and they have it. They use various tools and techniques to discover, extract information of value by exploiting an unknown vulnerability or an unknown hidden exception like a misconfigured application or network elements. All your network and perimeter security devices like NGN-firewalls, security sensors, Application security firewalls, manual testing, and SIEM’s are no match for them.
            </p>

              <p className="mt-6">
              Our approach is to help you be proactive, monitor, and test for the unknown before you deploy. We would help you frame your goals and then identify and map the right tools to enable you to be proactive. These technologies would help you to determine how the adversary is likely to infiltrate and what information can they take away.
              </p>
            </div>

            </div>
            </div>

         </div>
        </>
    )
}
