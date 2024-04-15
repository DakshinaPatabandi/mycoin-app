import React from 'react'
import FooterLogo from "../assets/Logo.png";
import Banner from "../assets/Banner2.png";

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "SignUp",
        link: "/Register",
    },
    {
        title: "Account",
        link: "/AccountHome",
    },
    {
        title: "MyCoin AI",
        link: "/MyCoinAI",
    },
]

const SocialMediaLinks = [
    {
        title: "Facebook",
        link: "/",
    },
    {
        title: "Instagram",
        link: "/",
    },
    {
        title: "YouTube",
        link: "/",
    },
    {
        title: "Whatsapp",
        link: "/",
    },
    {
        title: "Linkedin",
        link: "/",
    },
]


const Footer = () => {
  return (
    <div style= {BannerImg} className='text-white'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-40 pt-5'>
                {/* Company Details */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                        <img src={FooterLogo} alt="" className='max-w-[50px]'/>
                        My Coin</h1>
                    <p>Discover effortless expense tracking with MyCoin. Simplify your finances, track spending, and stay on budget effortlessly. Join thousands of satisfied users today!</p>

                </div>
                {/* Footer Links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 '>
                            Important Links </h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li
                                    className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                    key= {link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>  

                    {/* Social media Links */}
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 '>
                            Social Media Links </h1>
                            <ul className='flex flex-col gap-3'>
                                {SocialMediaLinks.map((link) => (
                                    <li
                                    className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                    key= {link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>  

                    {/* Social media Icons */}
                    <div>
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#">
                                <FaFacebook className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaInstagram className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaYoutube className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaWhatsapp className="text-3xl"/>
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl"/>
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaLocationArrow />
                                <p>3/115, Polgahawela, Srilanka</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt />
                                <p>+94 718522907</p>
                            </div>

                        </div>
                    </div>


                </div>  
            </div>
        </div>
    </div>
  )
}

export default Footer