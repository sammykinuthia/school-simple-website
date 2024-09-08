import React from "react";
import MoreBtn from "./MoreBtn";
import img1 from "../assets/images/rectangle 2.png";
import img2 from "../assets/images/rectangle 3.png";
import img3 from "../assets/images/rectangle 3_1.png";
import stats from "../assets/images/image 2.png";
import singles from "../assets/images/image 10.png";

const VideoSection = () => {
  return (
    <div className="container video-section">
      <div className="">
        <div className="video-grid">
          <div className="video-img1 relative">
            <img src={img1} alt="" />
            <div className="video-stats">
              <img src={stats} />
            </div>
          </div>
          <div className="video-img2 relative">
            <img src={img2} alt="" />
            <div className="video-singles">
              <img src={singles} />
            </div>
          </div>
          <div className="video-img3">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="line-red"></div>
        <h2 className="h2">Video in Live Action</h2>
        <p className="text-secondary">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: <br />
          Newtonian mechanism
        </p>
        <div className="mt-1">
          <MoreBtn path={"#"} text={"Learn More"} />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
