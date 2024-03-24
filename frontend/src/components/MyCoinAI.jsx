import React from 'react'
import { NavLink } from "react-router-dom"
import "../App.css";
import Navbar from './Navbar';




const MyCoinAI = () => {
    return (

        <div className="flex-container-accountHome  vh-50">

            <div className="UpNavtitle">
                <p className='pt-5 UpNavtitle1'>MyCoin</p>
                <p className='UpNavtitle2' >Expenses Tracker Web Application</p>
            </div>

            <div className='container pt-2'>

                <Navbar />


                <div className="aboutbox">
                    <h1 className='pt-5 MyCoinAiText'>What is MyCoin AI?</h1>

                    <p className='MyCoinAiSubText' >Description: You can use this application and make your money transactions very accurately and it will be easy for you to make very accurate decisions.
                    Ai technology will give tyou the financial knowledge you need and you will no longer be fooled by scams. Use MyCion AI technology now.</p>


                </div>

                
                <div className="container mt-2 justify-content-center align-items-center d-flex  ">
                    <div className="mt-5  justify-content-center align-items-center rounded-2 p-5 formbox-Expences">
                    <h5>MyCoin AI</h5>
                        <form action="" >
                            <div class="mb-3">
                                <label className="form-label"><strong>Product Price</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <div class="mb-3">
                                <label className="form-label"><strong>Your Budget</strong></label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    class="form-control rounded-0"
                                />
                            </div>
                            <p className='MyCoinAiSubText' >Recomended Price:</p>
                            <button type="submit" className="btn-AI-worth">Worth</button>
                            {/* <h5>OR</h5> */}
                            <button type="submit" className="btn-AI-Notworth">Not Worth</button>
                        </form>
                    </div>
                </div>


            </div>
        </div >






    )
}

export default MyCoinAI