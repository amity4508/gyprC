import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import gypr from '../../Components/assets/images/GYPR 729x1064.jpg'
import teachercool from '../../Components/assets/images/teacher cool 729x1064.jpg'
import Bitbee from '../../Components/assets/images/Bitbee 729x1064.jpg'
import tingletaste from '../../Components/assets/images/tingle taste729x1064.jpg'
import nimmin from '../../Components/assets/images/nimmin 729x1064.jpg'


import { NavLink } from 'react-router-dom';
import { Nimmin } from '../CompanyInfo/Nimmin';
export const slides = [
  {
    title: '“GYPRC - Empowering innovation, collaboration, and sustainability for a brighter future”',
    title2: '“GYPRC - Fostering excellence, growth, and positive impact through synergy and innovation”',
    buttonText: 'Talk to an Expert',
    image: gypr,
  },
  {
    title: 'GYPRC - Education (TeacherCool.com) - Empowering Minds, Shaping Futures',
    subtitle: 'Explore a vast array of information and prospects with GYPRC - Education. Our primary platform, TeacherCool.com, provides a vast array of IT-related courses. Our courses, which cover everything from cybersecurity to programming languages, are meant to give you the skills and knowledge you need to thrive in the digital world. TeacherCool.com is your doorway to a more promising future in IT, offering flexible study options, engaging learning tools, and expert teachers.',
    buttonText: 'Talk to an Expert',
    image: teachercool,
  },
  {
    title: 'GYPRC - Digital Marketing (BitBeeMedia.com) - Digital Solutions for a Digital World',
    subtitle: 'GYPRC - Digital Marketing, through BitBeeMedia.Com, gives comprehensive digital advertising solutions to help businesses thrive online. From search engine optimization and PPC to social media advertising and content material advertising and marketing, we have the expertise and resources that will help you attain your target audience and attain your commercial enterprise goals.',
    buttonText: 'Talk to an Expert',
    image: Bitbee,
  },
  {
    title:'GYPRC - Foods (Tingletaste.com) - Savor the Flavor of India',
    subtitle: 'Tingletaste.Com, part of GYPRC, brings the true flavors of India to your plate. Our numerous menu of Indian delicacies, organized with care and expertise, offers a culinary revel in like no other. We provide a vibrant and authentic eating experience, showcasing the rich and various flavors of Indian delicacies. From conventional favorites to fashionable creations, each dish at Tingletaste.com is ready with passion and expertise, making sure a memorable dining experience for our visitors.',
    buttonText: 'Talk to an Expert',
    image: tingletaste,
  },
  {
    title: 'GYPRC - Sustainable Products (Nimmin) - Sustainability Meets Innovation',
    subtitle: 'Nimmin, part of GYPRC, is leading the way in sustainable product production. Our green products, including vermicompost and housekeeping brushes, are made from natural waste materials, reducing waste and promoting sustainability. With a focal point on best and environmental responsibility, Nimmin is committed to creating a greener, greater sustainable future for all.',
    buttonText: 'Talk to an Expert',
    image: nimmin,
  },
  // Add more slide objects as needed
];

export const Hero = () => {
  return <HeroSlider slides={slides} />;
};



export const HeroSlider = ({ slides }) => {
  // const swiperRef = useRef(null);

  const swiperRef = useRef(null);
  const [showFullSubtitle, setShowFullSubtitle] = useState(false);


  const handleClickPaginationBullet = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  const handleReadMore = () => {
    setShowFullSubtitle(true);
  };

  return (
    <div className='bg-white pb-10 relative  '>
      <div className='left-[-79px] z-10 top-[40%] fixed  '>
        <button className='text-white text-lg bg-orange-500 px-[50px] py-[6px] rotate-[-90deg] '>
          Enquire Now
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper'
      >
        {slides && slides.map((slide, index) => (
          <SwiperSlide key={index}>
        <div className='bg-navbg1 sm:pb-[200px] lg:pb-0  sm:mt-20'>
        <div className='container  mx-auto  flex justify-between max-sm:flex-col sm:flex-col lg:flex-row gap-30 lg:mt-[90px] relative max-sm:bg-navbg1 max-sm:pb-[200px]'>
              <div className='w-1/2 lg:h-[82vh]  py-2 sm:w-full max-sm:w-full bg-navbg1  justify-center items-center relative'>
                {/* slider left  */}
                <div className='flex justify-center container mx-auto max-sm:mt-10 px-8 max-sm:ml-6 sm:ml-10'>
                  <div>
                    <h1 className='sm:text-4xl max-sm:text-3xl font-extrabold text-start leading-[60px]  jersey-25-regular text-white '>{slide.title}</h1>
                    <h1 className='sm:text-4xl max-sm:text-3xl mt-4 font-extrabold text-start leading-[60px] jersey-25-regular text-white '>{slide.title2}</h1>

                    <div className='text-start mt-4 relative '>
                {slide.subtitle && slide.subtitle.length > 20 && !showFullSubtitle ? (
                  <>
                    <p className='mt-3 max-sm:mt-8 text-base max-sm:text-base  font-medium text-start text-white'>
                      {slide.subtitle.slice(0, 200)}..
                      <span onClick={handleReadMore}
                      className=' text-lg font-bold text-orange-500 cursor-pointer ' > read more...</span>
                    </p>
                
                  </>
                ) : (
                  <p className='mt-3 max-sm:mt-8 text-base max-sm:text-base  font-medium text-start text-white'>
                    {slide.subtitle}
                  </p>
                )}
                {showFullSubtitle && (
                 <span  onClick={() => setShowFullSubtitle(false)}
                 className=' text-lg font-bold text-orange-500 cursor-pointer '>less more</span>
                )}
              </div>
                    <div className='text-start mt-16 max-sm:mt-0 relative'>
                      <div className='fixed bottom-24 max-sm:bottom-32 lg:left-[200px] max-sm:left-[100px]'>
                      <button className='text-white text-lg font-bold bg-orange-500 px-[30px] py-[8px] rounded '>
                        <NavLink to="/contact-us">Talk to an Expert</NavLink>
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
               {/* animation */}
               <div class=" animate-linear-move">
                <div class="absolute -z-1 w-3 h-3 top-14 border-2 opacity-30 border-white rotate-square"></div>
                <div class="absolute -z-1 w-3 h-3 bottom-8 border-2 opacity-30 border-white rounded-full rotate-circle1"></div>
                <div class="absolute -z-1 w-3 h-3 top-14 right-6 border-2 opacity-30 border-white rounded-full rotate-circle2"></div>
                <div class="absolute -z-1 w-3 h-3 bottom-10 right-0 border-2 opacity-30 border-white  rotate-circle3"></div>
                          </div>

              <div class="absolute w-4 h-4 top-[180px] right-24 border-2 opacity-30 border-blue-500 rotate-square"></div>
              <div class="absolute w-4 h-4 bottom-[50px] left-10 border-2 opacity-30 border-blue-500 rotate-square"></div>
               {/* end animation  */}
              </div>

              {/* slider rightside */}
              <div className='relative max-sm:top-[-0px] lg:right-[-40px] sm:w-full lg:w-auto  max-sm:px-6 '>
                <img className=' sm:h-[320px] lg:h-[520px] max-sm:h-[200px] lg:w-[1800px] sm:w-full max-sm:w-full rounded shadow-lg shadow-gray-700 ' src={slide.image} alt='' />
              </div>
            </div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className='relative top-[-40px]  sm:bottom-[200px] lg:right-[400px] max-sm:right-0 '>
        <div className='swiper-pagination mt-5 flex justify-center space-x-2'>
          {slides && slides.map((_, index) => (
            <div
              key={index}
              className='swiper-pagination-bullet bg-blue-800 w-3 h-3 rounded-full cursor-pointer'
              onClick={() => handleClickPaginationBullet(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};



// export const HeroSlider = ({ slides }) => {
//   const swiperRef = useRef(null);
//   const [showFullSubtitle, setShowFullSubtitle] = useState(false);

//   const handleClickPaginationBullet = (index) => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideTo(index);
//     }
//   };

//   const handleReadMore = () => {
//     setShowFullSubtitle(true);
//   };

//   return (
//     <div className='bg-white pb-10 relative'>
//       {/* Your existing JSX */}
//       <Swiper
//         ref={swiperRef}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 7500,
//           disableOnInteraction: false,
//         }}
//         effect={'fade'}
//         pagination={{
//           clickable: true,
//           el: '.swiper-pagination',
//         }}
//         navigation={{
//           nextEl: '.button-next',
//           prevEl: '.button-prev',
//         }}
//         className='mySwiper'
//       >
//         {slides &&
//           slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               {/* Your existing JSX */}
//               <div className='text-start mt-16 relative'>
//                 {slide.subtitle && slide.subtitle.length > 20 && !showFullSubtitle ? (
//                   <>
//                     <p className='mt-3 max-sm:mt-8 text-base max-sm:text-base  font-medium text-start text-white'>
//                       {slide.subtitle.slice(0, 20)}...
//                     </p>
//                     <button
//                       onClick={handleReadMore}
//                       className='text-white text-lg font-bold bg-orange-500 px-[30px] py-[8px] rounded'
//                     >
//                       Read More
//                     </button>
//                   </>
//                 ) : (
//                   <p className='mt-3 max-sm:mt-8 text-base max-sm:text-base  font-medium text-start text-white'>
//                     {slide.subtitle}
//                   </p>
//                 )}
//               </div>
//               {/* Your existing JSX */}
//             </SwiperSlide>
//           ))}
//       </Swiper>
//       {/* Your existing JSX */}
//     </div>
//   );
// };
