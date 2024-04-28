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

        </div>
        <Benifits />
        <Features />
      </div>
    </div>
  );
};

export default About;




//Data fetching.....................................................................................................................

// import React, { useEffect, useState } from "react";
// import "../App.css";
// import NavbarNew from "./NavbarNew";
// import Features from "./Features";
// import Slider from "react-slick";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Simulating fetching user data from backend
//     fetchUserData().then((data) => {
//       setUserData(data);
//       AOS.init({
//         offset: 100,
//         duration: 800,
//         easing: "ease-in-sine",
//         delay: 100,
//       });
//       AOS.refresh();
//     });
//   }, []);

//   const fetchUserData = async () => {
//     // Replace this with actual API call to fetch user data
//     // For demonstration, returning mock user data
//     return {
//       userName: "John Doe",
//       email: "john@example.com",
//       password: "********",
//       // Add more fields as needed
//     };
//   };

//   return (
//     <div>
//       <NavbarNew />
//       <div className="aboutbox">
//         <h1 className="pt-5 accountHometopic">Account Balance:</h1>
//         {/* Display user account details */}
//         {userData && (
//           <>
//             <p className="accountHomesubtopics1">User Name: {userData.userName}</p>
//             <p className="accountHomesubtopics1">Email: {userData.email}</p>
//             <p className="accountHomesubtopics1">Password: {userData.password}</p>
//           </>
//         )}
//         <h1 className="pt-5 abouttopic">Add your Credit card details</h1>
//         <br></br>
//       </div>
//       <Features />
//     </div>
//   );
// };

// export default About;

