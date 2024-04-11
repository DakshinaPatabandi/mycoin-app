import React from "react";
import features1 from "../assets/features1.png";
import features2 from "../assets/features2.png";
import features3 from "../assets/features3.png";
import features4 from "../assets/features4.png";
import features5 from "../assets/features5.png";
import { FaStar } from "react-icons/fa6";

const FeaturesData = [
  {
    id: 1,
    img: features1,
    title: "Track income",
    rating: "5.0",
    desc: "Track your income",
    aosDelay: "0",
  },
  {
    id: 2,
    img: features2,
    title: "Track Expenses",
    rating: "5.0",
    desc: "Track your Expenses",
    aosDelay: "200",
  },
  {
    id: 3,
    img: features3,
    title: "Be smart with AI",
    rating: "5.0",
    desc: "Explore Ai Features",
    aosDelay: "400",
  },
  {
    id: 4,
    img: features4,
    title: "Account safe",
    rating: "5.0",
    desc: "Keep your account safe",
    aosDelay: "600",
  },
  {
    id: 5,
    img: features5,
    title: "Enjoy the life",
    rating: "5.0",
    desc: "Let's gooo!!",
    aosDelay: "800",
  },
];

const Features = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-yellow-600">Our Features For You</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Features</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">We are always with you!</p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {FeaturesData.map((data) => (
                    
              <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600"> {data.desc}</p>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400"></FaStar>
                        <span>{data.rating}</span>

                    </div>

                    

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
