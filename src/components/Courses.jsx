import React from "react";
import MoreBtn from "./MoreBtn";
import first from "../assets/icon1.svg";
import second from "../assets/icon2.svg";

const Courses = () => {
  return (
    <div className="courses-section container">
      <div className="flex flex-col gap-1">
        <div className="line-red"></div>
        <h2 className="h2">Watch Our Courses</h2>
        <p className="text-secondary">
          Problems trying to resolve the conflict between the two major realms
          of classical physics:
          <br /> Newtonian Mechanics
        </p>
        <MoreBtn path={"#"} text={"Learn More"} />
      </div>
      <div className="courses-grid">
        <Card
          img={first}
          title={"Lifetime access"}
          text={"The gradual accumulation of information about"}
        />
        <Card
          img={second}
          title={"Training Courses"}
          text={"The gradual accumulation of information about"}
        />
      </div>
    </div>
  );
};

const Card = ({ img, title, text }) => {
  return (
    <div className="courses-card flex flex-col">
      <img src={img} />
      <h3 className="h3">{title}</h3>
      <div className="line-red"></div>
      <p className="text-secondary">{text}</p>
    </div>
  );
};

export default Courses;
