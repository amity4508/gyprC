import React from "react";
import img1 from "../../Components/assets/images/hero1.jpg";

const expertiseData = [
  {
    id: 1,
    image: img1,
    title: "Digital Marketing",
    content:
      "We are top digital marketing agency in Delhi. The company's marketing services are aimed at delivering measurable Transformational Growth to enterprises.",
  },
  {
    id: 1,
    image: img1,
    title: "Educational Services",
    content:
      "We are one-stop destination for academic excellence and support. We are passionate about empowering students to achieve their educational goals and reach their full potential.",
  },
  {
    id: 1,
    image: img1,
    title: "Web Development",
    content:
      "We offer full-cycle technology solutions that streamline your digital transformation journey. With cutting-edge technical expertise.",
  },
  { id: 1, image: img1, title: "Web Development", content: "Web Development" },

  { id: 1, image: img1, title: "Web Development", content: "Web Development" },
];

export const ExpertArea = () => {
  return (
    <div className="container mx-auto experArea py-5 lg:px-8">
      <h1 className="text-4xl max-sm:text-3xl max-sm:text-center font-bold text-gray-600">
        Our Areas Of Expertise
      </h1>
      <div className="container mx-auto grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-5">
        {expertiseData.map((expertise) => (
          <ExpertCard
            key={expertise.id}
            title={expertise.title}
            image={expertise.image}
            content={expertise.content}
          />
        ))}
      </div>
    </div>
  );
};

export const ExpertCard = ({ title, image, content }) => {
  return (
    <>
      {/* ----Company left img---- */}
      <div class=" h-full max-sm:w-full relative group">
        <img className="h-[300px] w-full" src={image} alt="companyImage" />
        <h1 className=" text-2xl  font-bold text-gray-700">{title}</h1>

        {/* <!-- companyLink --> */}
        <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center">
          <div className=" text-white p-2">
            <h1 className="text-lg">{content}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
