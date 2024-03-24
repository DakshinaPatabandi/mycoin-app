import React from 'react'
import { NavLink } from "react-router-dom"
import "../App.css";
import Navbar from './Navbar';

const SignNavbox = () => {
    return (
        <div className="flex-container-SignNavBox  vh-100">

            <div className="UpNavtitle">
                <p className='pt-5 UpNavtitle1'>MyCoin</p>
                <p className='UpNavtitle2' >Expences Tracker Web Application</p>
            </div>

            <div className='container pt-2'>


                <div class="navbar-frame">
                    <Navbar />
                </div>

                <div className="flex">

                    <div className="flex-leftbox">
                        <div className="accordionleft pt-5 pb-5 paccordion-flush" id="accordionFlushExample1"> <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-1" aria-expanded="false" aria-controls="flush-collapseOne-1">
                                    Are you new to here?
                                </button>
                            </h2>
                            <div id="flush-collapseOne-1" className="pb-5 accordion-collapse collapse" data-bs-parent="#accordionFlushExample1"> <div className="accordion-body pb-5">
                            </div>
                                <NavLink className='playbtn mt-4' to="/Signup">Create your account</NavLink>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="flex-rightbox ">
                        <div className="accordionleft pt-5 pb-5 paccordion-flush" id="accordionFlushExample1">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-2" aria-expanded="false" aria-controls="flush-collapseOne-2">
                                        Already have a account?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne-2" className="pb-5 accordion-collapse collapse" data-bs-parent="#accordionFlushExample2"> <div className="accordion-body pb-5">
                                </div>
                                    <NavLink className='playbtn mt-4' to="/Login">Log In</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div >
    )
}




export default SignNavbox;
