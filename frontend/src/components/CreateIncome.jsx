import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import NavbarNew from "./NavbarNew";

function CreateIncome() {
  const [source, setSource] = useState("");
  const [income, setIncome] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8801/CreateIncome", { source, income })
      .then((res) => {
        console.log(res);
        navigate("/Income");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <NavbarNew />
      <div
        className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 justify-center items-center duration-200 */}
      {/* Background patten"
      >
        {/* Background patten */}
        <div className=" h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

        <div className="py-10 mb-10">
          <div className="container">
            {/* Header Section */}
            <div className="text-center my-10 ">
              <p data-aos="fade-up" className="text-sm text-yellow-600">
                Hello!!!
              </p>
              <h1 data-aos="fade-up" className="text-3xl font-bold">
                Add your income here
              </h1>
              <p data-aos="fade-up" className="text-xs text-gray-400">
                We are always with you!
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" className="">
            <div className="d-flex justify-content-center align-items-center">
              <div className="w-75 bg-gray-200 rounded p-3 shadow-xl">
                <form onSubmit={handleSubmit}>
                  <h2>Add Your Income Sources</h2>
                  <div className="mb-2">
                    <label htmlFor="">Source</label>
                    <input
                      type="text"
                      placeholder="Enter Source"
                      className="form-control"
                      onChange={(e) => setSource(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Income</label>
                    <input
                      type="int"
                      placeholder="Enter Income"
                      className="form-control"
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-success">Submit</button>
                  <Link
                    to="/Income"
                    className="btn btn-success bg-gray-500 ms-2"
                  >
                    Back
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateIncome;
