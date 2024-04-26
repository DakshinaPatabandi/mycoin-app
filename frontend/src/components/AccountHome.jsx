import React from "react";
// import { NavLink } from "react-router-dom"
import "../App.css";
import NavbarNew from "./NavbarNew";
import Features from "./Features";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <div>
        <NavbarNew />

        <div className="aboutbox">
          <h1 className="pt-5 accountHometopic">Account Balance:</h1>

          <p className="accountHomesubtopics1">User Name:</p>
          <p className="accountHomesubtopics1">Email:</p>
          <p className="accountHomesubtopics1">Password:</p>

          <h1 className="pt-5 abouttopic">Add your Credit card details</h1>
          <br></br>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default About;
