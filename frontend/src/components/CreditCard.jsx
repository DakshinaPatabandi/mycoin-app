import React from "react";
// import { Link } from "react-router-dom"
import "../App.css";
import NavbarNew from "./NavbarNew";
import Features from "./Features";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const CreditCard = () => {
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

        {/* Credit card section - comming soon */}
        <div className="container mt-2 justify-content-center align-items-center d-flex  ">
          <div className="mt-5  justify-content-center align-items-center rounded-2 p-5 formbox-creditcard">
            <h2>Add your Credit card details</h2>
            <form action="">
              <div class="mb-3">
                <label className="form-label">
                  <strong>Account number:</strong>
                </label>
                <input
                  type="text"
                  required
                  name="username"
                  class="form-control rounded-0"
                />
              </div>
              <div class="mb-3">
                <label className="form-label">
                  <strong>Expire Date:</strong>
                </label>
                <input
                  type="text"
                  required
                  name="username"
                  class="form-control rounded-0"
                />
              </div>
              <div class="mb-3">
                <label className="form-label">
                  <strong>Security Code:</strong>
                </label>
                <input
                  type="text"
                  required
                  name="username"
                  class="form-control rounded-0"
                />
              </div>
              <p>
                <strong>Your are agreed to our teams and policies</strong>
              </p>
              <button type="submit" className="btn btn-success">
                Add Card
              </button>
              {/* <NavLink to='/' className='btn btn-success'>Sign in</NavLink> */}
              {/* <NavLink to='/SignNavBox' className='mt-3 btn-backlogin btn btn-primary border'><strong>Back</strong></NavLink> */}
              <Link to="/" className="btn btn-success bg-gray-500 ms-2">
                Home
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
