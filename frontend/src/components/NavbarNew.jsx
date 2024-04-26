import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

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
    name: "Coming Soon..",
    link: "/#",
  },
];

const NavbarNew = () => {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth === "true") {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []); // Empty dependency array to run only once when component mounts

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8801");
        if (res.data.Status === "Success") {
          setAuth(true);
          setUsername(res.data.username);
          localStorage.setItem("auth", "true");
        } else {
          setAuth(false);
          setMessage(res.data.Message);
          localStorage.setItem("auth", "false");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [auth]); // Added auth as a dependency

  const handleLogout = () => {
    axios.post("http://localhost:8801/Register")
      .then(res => {
        if (res.data.Status === "Success") {
          localStorage.setItem("auth", "false");
          setAuth(false);
          window.location.reload(true);
        } else {
          alert("error");
        }
      })
      .catch(err => console.log(err));
  };

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
            {!auth ? (
              <Link
                to="/Register"
                className="bg-gradient-to-r from-primary to-secondary transition-all  duration-200 text-white
                   py-1 px-4 rounded-full flex items-center gap-3 group "
              >
                <span className="">
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
                <span className=""> 
                  Log out
                </span>
                {/* <span className="group-hover:block hidden transition-all duration-200"></span> */}

                <RiAccountCircleFill className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      {!auth ? null : (
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </Link>
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
                      <Link
                        to={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </Link>
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

