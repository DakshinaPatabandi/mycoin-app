import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NavbarNew from "./NavbarNew";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8801/login", values)
      .then((res) => {
        if (res.data.status === "Success") {
          navigate(`/AccountHome?username=${res.data.username}`);
        } else {
          toast.error("Invalid Username or password!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        }
      })
      .catch((err) => console.log(err));
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
    <>
      <NavbarNew />
      <div className="container pt-5 justify-content-center align-items-center d-flex  ">
        <div data-aos="zoom-in" className="mt-1 justify-content-center align-items-center rounded-2 p-5 formbox2">
          <h2>Log In</h2>
          <form action="" onSubmit={handleSubmit}>
            <div class="mb-3">
              <label className="form-label">
                <strong>Your name</strong>
              </label>
              <input
                type="text"
                required
                name="username"
                class="form-control rounded-0"
                placeholder="User Name"
                onChange={handleInput}
              />
            </div>
            <div class="mb-3">
              <label className="form-label color-white">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                required
                name="password"
                class="form-control rounded-0"
                placeholder="Password"
                onChange={handleInput}
              />
            </div>

            <button type="submit" className="btn btn-success">
              Log In
            </button>
            <p></p>

            <p>
              <strong>Don't have a account? Create new account</strong>
            </p>
            <NavLink to="/Signup" className="btn btn-primary d-block">
              <strong>Create Account</strong>
            </NavLink>
            <br></br>
            <NavLink
              to="/Register"
              className="mt-3 btn-backlogin btn btn-primary border"
            >
              <strong>Back</strong>
            </NavLink>
          </form>
        </div>
      </div>
    

      <ToastContainer />
    </>
  );
}

export default Login;
