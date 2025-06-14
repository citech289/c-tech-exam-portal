import React from "react";
import bannerImage from "../assets/Exam-Banner01.png";
const Header = () => {
  return (
    <div
      className="min-h-60 mb-4  flex items-center w-full overflow-hidden bg-cover"
      style={{ backgroundImage: `url(${bannerImage})` }}
      id="Header" 
    ></div>
  );
};

export default Header;
