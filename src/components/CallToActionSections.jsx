import React from "react";
import heroImage from "../assets/images/technology 2.png";
import heroChart from '../assets/images/image 3.png'
const CallToActionSections = () => {
  return (
    <div className="hero-section container">
      <div className="flex flex-col">
        <p className="text-accent">Welcome</p>
        <h1 className="h1">HIGH QUALITY COURSES</h1>
        <p className="text-secondary">
          For the right instructor for you from over 10,000 teachers
        </p>
        <div className="flex gap-1 mt-1">
          <a href="#" className="bg-accent btn text-white">
            Join Us
          </a>
          <a href="#" className="border-accent btn text-accent">
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-end relative">
        <div className="hero-green-bg"></div>
        <svg className="hero-orange-bg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="#ffac70" d="M12 2h-1v20h1a10 10 0 0 0 0-20"/></svg>
        <img className="hero-chart" src={heroChart}/>
        <img className="hero-img" src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default CallToActionSections;
