import React from 'react'
// import { NavLink } from "react-router-dom"
import facebookLogo from '../assets/facebook.png'; 
import instagramLogo from '../assets/instagram.png'; 
import whatsappLogo from '../assets/whatsapp.png'; 
import linkedinLogo from '../assets/linkedin.png'; 
import youtubeLogo from '../assets/youtube.png';
import "../App.css";
import Navbar from './Navbar';




const About = () => {
    return (

        <div className="flex-container-about  vh-150">

            <div className="UpNavtitle">
                <p className='pt-5 UpNavtitle1'>MyCoin</p>
                <p className='UpNavtitle2' >Expenses Tracker Web Application</p>
            </div>

            <div className='container pt-2'>

                <Navbar />

                <div className="aboutbox">
                    <h1 className='pt-5 abouttopic'>Benifits about using MyCoin</h1>
                    <p className='aboutsubtopics1' >Track your money expences.</p>
                    <p className='aboutdetails' >By using this web application, you can easily track all your expenses. 
                    Add your monthly expense details to the Expenses page. We will analyze it and tell you how to spend your monthly.</p>


                    <p className='aboutsubtopics1' >Track your income details.</p>
                    <p className='aboutdetails' >By using this web application, you can easily track all your income details as well. 
                    Add your monthly income details to the Income page. We will analyze it and tell you how you are currently earning monthly.</p>


                    <p className='aboutsubtopics1' >Get recomendation from AI.</p>
                    <p className='aboutdetails' >You can use this application and make your money transactions very accurately and it will be easy for you to make very accurate decisions.
                    Ai technology will give tyou the financial knowledge you need and you will no longer be fooled by scams. Use MyCion AI technology now.</p>

                    <h1 className='pt-5 abouttopic' >Contact US.</h1><br></br>

                    <img src={facebookLogo} alt="Dakshina Patabandi" className="facebook-logo" />
                    <span>Dakshina Patabandi</span><br></br>

                    <img src={instagramLogo} alt="dakshina_k.p" className="instagram-logo" />
                    <span>dakshina_k.p</span><br></br>

                    <img src={whatsappLogo} alt="0718522907" className="whatsapp-logo" />
                    <span>0718522907</span><br></br>

                    <img src={linkedinLogo} alt="Dakshina Patabandi" className="linkedin-logo" />
                    <span>Dakshina Patabandi</span><br></br>

                    <img src={youtubeLogo} alt="Dakshina Patabandi" className="youtube-logo" />
                    <span>Dakshina Patabandi</span><br></br>

                    {/* <h3 className='aboutsubtopics2'>Facebook - Dakshina Patabandi</h3>
                    <h3 className='aboutsubtopics2' >Instagram - dakshina_k.p</h3>
                    <h3 className='aboutsubtopics2' >Whatsapp - 0718522907</h3>
                    <h3 className='aboutsubtopics2' >Linkedin - Dakshina Patabandi</h3>
                    <h3 className='aboutsubtopics2' >You Tube - Dakshina Patabandi</h3><br></br> */}


                    {/* <img src="frontend\src\assets\facebook.png" alt="Dakshina Patabandi" className="facebook-logo" /><br></br>
                    <img src="frontend\src\assets\instagram.png" alt="dakshina_k.p" className="instagram-logo" /><br></br>
                    <img src="frontend\src\assets\whatsapp.png" alt="0718522907" className="whatsapp-logo" /><br></br>
                    <img src="frontend\src\assets\linkedin.png" alt="Dakshina Patabandi" className="linkedin-logo" /><br></br>
                    <img src="frontend\src\assets\youtube.png" alt="Dakshina Patabandi" className="youtube-logo" /><br></br> */}





                </div>
            </div>
        </div>
    )
}

export default About