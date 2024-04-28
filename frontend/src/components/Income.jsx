import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import NavbarNew from "./NavbarNew";

const Income = () => {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8801/Income")
      .then((res) => setIncome(res.data))
      .catch((err) => console.log(err));
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8801/Income/${id}`);
      setIncome(income.filter(income => income.In_ID !== id));
    } catch (err) {
      console.error('Error deleting income:', err);
      
    }
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

      <div>
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 justify-center items-center duration-200 */}
        {/* Background patten"        >
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
                  Track your income here
                </h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">
                  We are always with you!
                </p>
              </div>
            </div>

            <div data-aos="zoom-in" className="">
              <div className="d-flex justify-content-center align-items-center ">
                <div className="w-75 bg-gray-200 rounded p-3 shadow-xl">
                  <Link to="/CreateIncome" className="btn btn-success">
                    Add +
                  </Link>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Income</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {income.length > 0 ? (
                      income.map((data, i) => (
                        <tr key={i}>
                          <td>{data.Source}</td>
                          <td>{data.Income}</td>
                          <td>
                            <Link
                              to={`/UpdateIncome/${data.In_ID}`}
                              className="btn btn-primary"
                            >
                              Update
                            </Link>
                            <Link
                              className="btn btn-danger ms-2"
                              onClick={(e) => handleDelete(data.In_ID)}
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3">No income available</td>
                      </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
