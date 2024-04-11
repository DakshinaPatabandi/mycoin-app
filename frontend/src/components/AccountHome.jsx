import React from 'react'
// import { NavLink } from "react-router-dom"
import "../App.css";
import NavbarNew from "./NavbarNew";




const About = () => {
    return (

        <div>
            <div>

            <NavbarNew />

                <div className="aboutbox">
                    <h1 className='pt-5 accountHometopic'>Account Balance:</h1>

                    <p className='accountHomesubtopics1' >User Name:</p>
                    <p className='accountHomesubtopics1' >Email:</p>
                    <p className='accountHomesubtopics1' >Password:</p>

                    <h1 className='pt-5 abouttopic' >Add your Credit card details</h1><br></br>

                </div>


                <div className="container mt-2 justify-content-center align-items-center d-flex  ">
                    <div className="mt-5  justify-content-center align-items-center rounded-2 p-5 formbox-creditcard">
                        <h2>Add your Credit card details</h2>
                        <form action="" >
                            <div class="mb-3">
                                <label className="form-label"><strong>Account number:</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <div class="mb-3">
                                <label className="form-label"><strong>Expire Date:</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <div class="mb-3">
                                <label className="form-label"><strong>Security Code:</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <p><strong>Your are agreed to our teams and policies</strong></p>
                            <button type="submit" className="btn btn-success">Add Card</button>
                            {/* <NavLink to='/' className='btn btn-success'>Sign in</NavLink> */}
                            {/* <NavLink to='/SignNavBox' className='mt-3 btn-backlogin btn btn-primary border'><strong>Back</strong></NavLink> */}
                        </form>

                    </div>
                </div>


            </div>
        </div >






    )
}

export default About