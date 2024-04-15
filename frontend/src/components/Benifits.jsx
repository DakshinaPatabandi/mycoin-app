import React from "react";
import Slider from "react-slick";
import Benifits1 from "../assets/features1.png";
import Benifits2 from "../assets/features2.png";
import Benifits3 from "../assets/features3.png";
import Benifits4 from "../assets/features4.png";

const BenifitsData = [
  {
    id: 1,
    title: "Track Your income",
    text: "By using this web application, you can easily track all your income details as well. Add your monthly income details to the Income page. We will analyze it and tell you how you are currently earning monthly.",
    img: Benifits1,
  },
  {
    id: 2,
    title: "Track Your expences",
    text: "By using this web application, you can easily track all your expenses. Add your monthly expense details to the Expenses page. We will analyze it and tell you how to spend your monthly.",
    img: Benifits2,
  },
  {
    id: 3,
    title: "Be smart with AI",
    text: "You can make your money transactions very accurately and it will be easy for you to make very accurate decisions. Ai technology will give tyou the financial knowledge you need and you will no longer be fooled by scams.",
    img: Benifits3,
  },
  {
    id: 4,
    title: "Your account is safe and protected",
    text: "Join us and experience peace of mind knowing that your personal information and data are safeguarded at every step. With our advanced security measures, you can trust that your account is in good hands. Start exploring today!",
    img: Benifits4,
  },
];

const Benifits = () => {

var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToSroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ]
};

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-yellow-600">
            Benifits about using MyCoin
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Benifits
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            We are always with you!
          </p>
        </div>

        {/* Cards section */}
        <div data-aos="zoom-in">
            <Slider {...settings}>
            {BenifitsData.map((data) => (
                <div className="my-6">
                    <div
                    key= {data.id}
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative" >
                        <div className="mb-4">
                            <img
                            src={data.img}
                            alt=""
                            className="rounded-full w-20 h-20" />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="space-y-3">
                            <p className="text-xs text-gray-500">{data.text}</p>
                            <h1 className="text-xl font-bold text-black/80">{data.title}</h1>
                            </div>
                        </div>
                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>

                    </div>

                </div>
                ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
