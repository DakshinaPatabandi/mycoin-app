import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-with-frame">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MyCoin
        </a>
        {/* <button
          clasName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to='/' className="nav-link active" aria-current="page">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
            <NavLink className="nav-link" to="/SignNavbox">
              Signup
            </NavLink>
            <NavLink className="nav-link" to="#">
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/AccountHome">
              My Account
            </NavLink>
            <NavLink className="nav-link" to="/Income">
              Income
            </NavLink>
            <NavLink className="nav-link" to="/Expenses">
              Expenses
            </NavLink>
            <NavLink className="nav-link" to="/MyCoinAI">
              MyCoinAI
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
