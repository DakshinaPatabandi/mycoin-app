import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import NavbarNew from "./NavbarNew";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8801/signup", values)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavbarNew />

      <div className="container mt-2 justify-content-center align-items-center d-flex  ">
        <div className="mt-5  justify-content-center align-items-center rounded-2 p-5 formbox1">
          <h2>Create your account</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                required
                name="username"
                className="form-control rounded-0"
                onChange={handleInput}
                placeholder="Enter Username"
              />
            </div>
            <div class="mb-3">
              <label className="form-label color-white">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                required
                name="email"
                className="form-control rounded-0"
                onChange={handleInput}
                placeholder="Enter Your Email"
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
                className="form-control rounded-0"
                onChange={handleInput}
                placeholder="Enter Password"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
            {/* <NavLink to='/' className='btn btn-success'>Sign in</NavLink> */}
            <p></p>
            <p>
              <strong>Your are agreed to our teams and policies</strong>
            </p>
            <NavLink
              to="/Register"
              className="mt-3 btn-backlogin btn btn-primary border"
            >
              <strong>Back</strong>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
