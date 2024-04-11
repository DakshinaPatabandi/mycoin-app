import React from "react";
import NavbarNew from "./NavbarNew";
import Features from "./Features";
import HomePic1 from "../assets/HomePic1.png";
import HomePic2 from "../assets/HomePic2.png";
import HomePic3 from "../assets/HomePic3.png";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const ImageList = [
  {
    id: 1,
    img: HomePic1,
    title: "The best expences tracking service",
    description:
      "Discover effortless expense tracking with MyCoin. Simplify your finances, track spending, and stay on budget effortlessly. Join thousands of satisfied users today!",
  },
  {
    id: 2,
    img: HomePic2,
    title: "Save your money",
    description:
      "Start saving smarter with our intuitive platform. Track expenses, set budgets, and reach your financial goals easily. Join today!",
  },
  {
    id: 3,
    img: HomePic3,
    title: "You can trust us",
    description:
      "Trust in our proven track record. Join countless satisfied users who rely on our secure platform for their financial needs. Experience peace of mind – sign up now!",
  },
];

const HomeNew = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  });

  return (
    <div>
      <NavbarNew />

      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200">
        {/* Background patten */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/* Character section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      {/* <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105
                       duration-200 text-white py-2 px-4 rounded-full ">
                        Get Started
                      </button> */}

                      <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105
                      duration-200 text-white py-2 px-4 rounded-full">
                        <Link to="/Register">Get Started</Link>
                      </button>

                    </div>
                  </div>
                  {/* Image section */}
                  <div className="order-2 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg-scale-125 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Features />
    </div>
  );
};

export default HomeNew;
