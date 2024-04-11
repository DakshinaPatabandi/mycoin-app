import React from 'react'
import { NavLink } from "react-router-dom"
import "../App.css";
import GoldCup from '../assets/GoldCup.png';
import Navbar from './Navbar';

const Home = () => {
  return (

    <div className="flex-container-home  vh-150">

      <div className="UpNavtitle">
        <p className='pt-5 UpNavtitle1'>MyCoin</p>
        <p className='UpNavtitle2' >Expenses Tracker Web Application</p>
      </div>

      <div className='container pt-2'>

        {/* <Navbar /> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-with-frame">
      <div className="container-fluid">
        <a className="navbar-brand text-black" href="/">
          MyCoin
        </a>
            <NavLink to='/' className="nav-link active " aria-current="page">
              Home
            </NavLink>
            <NavLink className="nav-link  text-black" to="/About">
              About
            </NavLink>
            <NavLink className="nav-link" to="/SignNavbox">
              Signup
            </NavLink>
            <NavLink className="nav-link" to="/SignNavbox">
              My Account
            </NavLink>
            <NavLink className="nav-link" to="/Income">
              Income
            </NavLink>
            <NavLink className="nav-link" to="/Expenses">
              Expenses
            </NavLink>
            <NavLink className="nav-link" to="/SignNavbox">
              MyCoinAI
            </NavLink>
            <NavLink className="nav-link" to="/HomeNew">
            HomeNew
            </NavLink>
      </div>
    </nav>

        <div className="homebox">
          <h1 className='pt-5 hometopic'>My Coin</h1>
          <p className='homesubtopic' >The best expences tracking service.</p>

          <div class="container-boxx">
            {/* <div class="chat-list">
            </div> */}
            <div class="messages">


              <div className="accordionhome00 pt-5 pb-5  paccordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      What is MyCion
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className=" pb-5 accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pb-5">
                      Money is a very important tool we use to buy things. It allows us to fulfill our needs as well as save money and plan for the future. Without money, our economic system would become more complex, and daily transactions would be more difficult. So most people in the world have a bank account to save their money. So dealing with people and banks is well-established. Therefore, having a bank application makes banking very easy.
                      This proposed project is a web-based income and expenses tracking system called “MyCoin”. The system will track the user’s income and expenses efficiently related to the user's inputs and analyze them. This application has an AI system and it can make some suggestions for users to make proper decisions when shopping for the best products.
                    </div>
                    <NavLink className='homebtn mt-4' to="/SignNavbox">Get Started now</NavLink>
                  </div>
                </div>
              </div>

              <img src={GoldCup} alt="GoldCup" className="GoldCup" />





        {/* <nav className="navbar">
            <div className="navdiv">
                <div className="logo"><a href="#">CodingNinja</a></div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <button><a href="#">SignIn</a></button>
                    <button><a href="#">SignUp</a></button>
                </ul>
            </div>
        </nav> */}





            </div>
          </div>

          



          {/* <div className="accordionhome pt-5 pb-5  paccordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What is MyCion
                </button>
              </h2>
              <div id="flush-collapseOne" className=" pb-5 accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body pb-5">
                  Money is a very important tool we use to buy things. It allows us to fulfill our needs as well as save money and plan for the future. Without money, our economic system would become more complex, and daily transactions would be more difficult. So most people in the world have a bank account to save their money. So dealing with people and banks is well-established. Therefore, having a bank application makes banking very easy.
                  This proposed project is a web-based income and expenses tracking system called “MyCoin”. The system will track the user’s income and expenses efficiently related to the user's inputs and analyze them. This application has an AI system and it can make some suggestions for users to make proper decisions when shopping for the best products.
                </div>
                <NavLink className='homebtn mt-4' to="/SignNavbox">Get Started now</NavLink>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      {/* <img src={GoldCup} alt="GoldCup" className="GoldCup" /> */}

    </div>
  )
}

export default Home