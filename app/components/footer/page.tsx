import React from "react";
import logo from "../../../public/Vega-logo.png";

const Footer = () => {
  return (
    <footer
      className="text-neutral-content py-10 bg-[#242323]"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 px-4">
        <div className="flex items-center space-x-2 text-white">
          <img src={logo.src} alt="Logo" className="h-20" />
        </div>

        <div className="hidden md:block border-r border-white h-24"></div>

        <div className=" flex flex-col justify-center items-center text-center space-y-1 text-white">
          <a href="#" className=" hover:text-gray-400 text-lg">contact@vega-ns.com</a>
          <a href="#" className=" hover:text-gray-400 text-lg">+33672033403</a>
        </div>

        
      </div>
      <div className=" ml-[35%] mt-7">
        © Copyright 2024 | VEGA Nautical Solutions All rights reserved
        </div>
    </footer>
  );
};

export default Footer;
