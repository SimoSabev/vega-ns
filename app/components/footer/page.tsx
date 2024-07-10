"use client"
import React from "react";
import logo from "../../../public/Vega-logo.png";
import { motion } from "framer-motion";

const fromBottom = {
  initial: {  opacity: 0 },
  whileInView: {  opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut", delay:0.2 },
  viewport: { once: true },
}

const Footer = () => {
  return (
    <motion.footer {...fromBottom} className="text-neutral-content py-10 bg-[#242323]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 px-4">
        <motion.div className="flex items-center space-x-2 text-white">
          <img src={logo.src} alt="Logo" className="h-20" />
        </motion.div>

        <div className="hidden md:block border-r border-white h-24"></div>

        <motion.div className="flex flex-col justify-center items-center text-center space-y-1 text-white">
          <a href="mailto:contact@vega-ns.com" className="hover:text-gray-400 text-lg">contact@vega-ns.com</a>
          <a href="tel:+33672033403" className="hover:text-gray-400 text-lg">+33672033403</a>
        </motion.div>
      </div>
      <motion.div className="text-center mt-7 text-white">
        © Copyright 2024 | VEGA Nautical Solutions All rights reserved
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
