import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";
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
      await axios.delete("http://localhost:8801/Income/" + id);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div>
      <div>
        <NavbarNew />
        {/* Header Section */}
        <div className="text-center my-10 ">
          <p data-aos="" className="text-sm text-yellow-600">
            Hello!!!
          </p>
          <h1 data-aos="" className="text-3xl font-bold">
            Track your income here
          </h1>
          <p data-aos="" className="text-xs text-gray-400">
            We are always with you!
          </p>
        </div>


        <div className="flex-container-accountHome vh-50">
          <div className="d-flex vh-100 bg-yellow-200 justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">
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
                  {income.map((data, i) => (
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
                        <button
                          className="btn btn-danger ms-2"
                          onClick={(e) => handleDelete(data.In_ID)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <div className="container mt-2 justify-content-center align-items-center d-flex  ">
                    <div className="mt-5  justify-content-center align-items-center rounded-2 p-5 formbox-Income">
                        <form action="" >
                            <div class="mb-3">
                                <label className="form-label"><strong>Section 01:</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Add</button>
                        </form>
                    </div>
                </div>

                <div className="container mt-2 justify-content-center align-items-center d-flex  ">
                    <div className="mt-5  justify-content-center align-items-center rounded-2 p-5 formbox-Income">
                        <form action="" >
                            <div class="mb-3">
                                <label className="form-label"><strong>Section 02:</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Add</button>
                        </form>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default Income;
