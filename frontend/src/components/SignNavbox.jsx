import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
// import Navbar from "./Navbar";

const SignNavbox = () => {
  return (
    <div className="flex-container-SignNavBox  vh-100">
      <div className="UpNavtitle">
        <p className="pt-5 UpNavtitle1">MyCoin</p>
        <p className="UpNavtitle2">Expenses Tracker Web Application</p>
      </div>

      <div className="container pt-2">
        <div class="navbar-frame">

          {/* <Navbar /> */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-with-frame">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                MyCoin
              </a>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                  <NavLink className="nav-link" to="/SignNavbox">
                    Signup
                  </NavLink>
                  <NavLink className="nav-link" to="/SignNavbox">
                    My Account
                  </NavLink>
                  <NavLink className="nav-link" to="/SignNavbox">
                    Income
                  </NavLink>
                  <NavLink className="nav-link" to="/SignNavbox">
                    Expenses
                  </NavLink>
                  <NavLink className="nav-link" to="/SignNavbox">
                    MyCoinAI
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>


        <div className="flex">
          <div className="flex-leftbox">
            <div
              className="accordionleft pt-5 pb-5 paccordion-flush"
              id="accordionFlushExample1"
            >
              {" "}
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne-1"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne-1"
                  >
                    Are you new to here?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne-1"
                  className="pb-5 accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample1"
                >
                  {" "}
                  <div className="accordion-body pb-5"></div>
                  <NavLink className="playbtn mt-4" to="/signup">
                    Create your account
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-rightbox ">
            <div
              className="accordionleft pt-5 pb-5 paccordion-flush"
              id="accordionFlushExample1"
            >
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne-2"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne-2"
                  >
                    Already have a account?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne-2"
                  className="pb-5 accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample2"
                >
                  {" "}
                  <div className="accordion-body pb-5"></div>
                  <NavLink className="playbtn mt-4" to="/login">
                    Log In
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignNavbox;
