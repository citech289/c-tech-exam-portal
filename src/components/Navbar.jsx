import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-sm text-white w-full">
      <div className="text-center font-medium py-2 bg-gradient-to-r from-[#2e5c84] to-orange-500 transition">
        {/* <p>
          Exclusive Price Drop! Hurry,{" "}
          <span className="underline underline-offset-2">Offer Ends Soon!</span>
        </p> */}
        Ci-STEM Information Technology Services Private Limited
      </div>

      <nav className="relative h-20 md:h-30 w-auto cursor-pointer rounded-md flex items-center justify-between py-4 bg-white text-gray-900 transition-all shadow-sm">
        {/* Left logo with no margin/padding */}
        <Link to="/" className="flex items-center pl-0 ml-2">
          <img
            className="h-20 md:h-25 w-auto rounded-md"
            src="/src/assets/logo.png"
            alt="company-logo"
          />
        </Link>

        {/* Future content (e.g., menu) goes here */}
      </nav>
    </div>
  );
};

export default Navbar;
