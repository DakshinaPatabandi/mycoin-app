import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "SignUp",
    link: "/Register",
  },
  {
    id: 3,
    name: "My Account",
    link: "/AccountHome",
  },
  {
    id: 4,
    name: "Income",
    link: "/Income",
  },
  {
    id: 5,
    name: "Expenses",
    link: "/Expenses",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "MyCoin AI",
    link: "/MyCoinAI",
  },
  {
    id: 2,
    name: "Comming Soon..",
    link: "/#",
  },
];

const NavbarNew = () => {
  const [Auth, setAuth] = useState(false); //New
  const [username, setUsername] = useState(""); //New
  const [message, setMessage] = useState(""); //New

  useEffect(() => {   //New set
    axios.get("http://localhost:8801").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setUsername(res.data.username);
      } else {
        setAuth(false);
        setMessage(res.data.Message);
      }
    });
  }, []);

  const handleLogout = () => {
    axios.post("http://localhost:8801/Register")
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      }else{
        alert("error");
      }
    }).catch(err => console.log(err))
  }

  return (
    <div className="shadow-md bg-white">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-1">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-3xl sm:text-3xl flex gap-2 ">
              <img src={Logo} alt="Logo" className="w-10" />
              MyCion
            </a>
            <a className="pl-12 text-1xl sm:text-1xl">
              Expenses Tracker Web Application
            </a>
          </div>

          {/* Search bar*/}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300
                rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-5" />
            </div>
            {/*Sign In button*/}
            {!Auth ? (
              <Link
                to="/Register"
                className="bg-gradient-to-r from-primary to-secondary transition-all  duration-200 text-white
                   py-1 px-4 rounded-full flex items-center gap-3 group "
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Login
                </span>
                <RiAccountCircleFill className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </Link>
            ) : (
              <Link
                to="/"
                className="bg-gradient-to-r from-red to-red transition-all  duration-200 text-white
          py-1 px-4 rounded-full flex items-center gap-3 group " 
                onClick={handleLogout}
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Log out
                </span>
                <RiAccountCircleFill className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      {!Auth ? null : (
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Dropdown */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Explore with AI
                <span>
                  <FaCaretDown
                    className="transition-all
                duration-200
                group-hover:rotate-180"
                  />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarNew;
