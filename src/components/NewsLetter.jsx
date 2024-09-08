import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full newsletter-section flex flex-col items-center">
      <p className="font-bold text-accent text-center">Practice Advice</p>
      <h3 className="h3">Our Popular Courses</h3>
      <p className="text-secondary">
        problems tying to resolve the conflicts between the major realms of
        classical Physics: Newtonian Mechanics
      </p>
      <div className="flex ">
        <input placeholder="Your Email" type="email"/>
        <button className="bg-accent text-white">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
