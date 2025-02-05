import React from "react";
import Logo from "/img/logo.png";

const Superheader = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#F5F5F5] h-[36px] px-10 flex justify-between items-center z-50">
      <img src={Logo.src} alt="Logo" className="h-6" />
      <div className="text-black text-sm font-light">
        <a href="#" className="mr-2 px-2 hover:text-gray-600 transition-colors duration-200 helvetica-neue">
          Find a Store
        </a>
        |
        <a href="/contactus" className="mr-2 px-2 hover:text-gray-600 transition-colors duration-200 helvetica-neue">
          Help
        </a>
        |
        <a href="/joinus" className="mr-2 px-2 hover:text-gray-600 transition-colors duration-200 helvetica-neue">
          Join Us
        </a>
        |
        <a href="/signup" className="mr-2 px-2 hover:text-gray-600 transition-colors duration-200 helvetica-neue">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Superheader;
