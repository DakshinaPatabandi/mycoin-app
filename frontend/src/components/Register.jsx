import React from "react";
import NavbarNew from "./NavbarNew";
import Reg1 from "../assets/Reg1.png";
import Reg2 from "../assets/Reg2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const RegisterData = [
  {
    id: 1,
    img: Reg1,
    title: "Create your MyCoin Account",
    description: "Start your journey with MyCoin.",
  },
  {
    id: 2,
    img: Reg2,
    title: "Login to the account",
    description: "Welcome back!!",
  },
];

const Register = () => {

    function handleOrderPopup(id) {
        if(id == 1) {

        }
    }

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
      <div className="container">
        {/* Header Section */}
        <div className="text-center my-10 ">
          <p data-aos="fade-up" className="text-sm text-yellow-600">
            Signup or Login
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Let's start your journey
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            We are always with you!
          </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-5 place-items-center">
          {RegisterData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl p-12 bg-gray-1 hover:bg-gray-700 hover:text-white relative shadow-xl
            duration-300 group"
            >
              {/* Image Section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details Section */}
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-4">
                  {data.description}
                </p>
                <NavLink
                  className="bg-primary/100 hover:scale-105 duration-300 text-white py-1 mt-5 px-4 rounded-full hover:bg-black
                   hover:text-white" 
                    to={data.id == 1 ? `/signup` : `/login`}
                  >
                    GO
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
