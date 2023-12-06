import React from 'react'
import { NavLink, useLocation } from "react-router-dom"
import "../App.css";

const Home = () => {
  return (
    <div className="flex-container  vh-100">
      <div className='container pt-5'>
        <div className="homebox">
          <h1 className='pt-5 huntertopic' >Tomato Hunter</h1>
          <p className='hello' >Hello gamers. Welcome to the tomato hunter math game.</p>
          <div className="accordion pt-5 pb-5  paccordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                How to play
                </button>
              </h2>
              <div id="flush-collapseOne" className=" pb-5 accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body pb-5">First you need to login to the game.  If you are a new player, go to create account and create an account.  In this game you have to solve math problems.  A hidden value is shown by a tomato, and you have to solve the corresponding value of that tomato and give the answer.  The number of times you give answers will be recorded, so try to get the correct answer in the least number of times. Happy gaming.
                </div>
                <NavLink className='playbtn mt-4' to="/login">Let's Play</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home