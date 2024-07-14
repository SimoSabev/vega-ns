"use client";
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import background from "../../../public/About-us22.jpg";
import Footer from "@/app/components/footer/page";
import { motion } from "framer-motion";
import { Noto_Sans, Poppins } from "next/font/google";

const header = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});

const small = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const About_us = () => {
  return (
    <div data-theme="light" className="overflow-x-hidden">
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-[70vh] xl:h-[70vh]">
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.8), rgba(26, 25, 25, 0.7), rgba(22, 21, 21, 0.6), rgba(18, 17, 17, 0.5)), url(${background.src})`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: "-150vh" }}
            animate={{ opacity: 1, y: "0vh" }}
            transition={{ duration: 0.8 }}
            className={`text-slate-200 text-4xl sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl ${header.className}`}
          >
            About Us
          </motion.div>
          <div className="w-full absolute top-0 z-20">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: "70vh" }}
          animate={{ opacity: 1, x: "0vh" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`flex flex-col flex-grow justify-center items-center p-4 sm:p-10 ${small.className}`}
        >
          <p className="my-12 text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl rounded-3xl text-center text-slate-black">
            Our team is composed of highly qualified and experienced
            professionals with a solid technical and project management
            background acquired during the past +20 years. We have a proven
            record of managing and delivering complex refit projects for yachts
            along with commercial, passengers and service vessels. Our experts
            have been part of leading yacht brokerage and management firms,
            shipyards, trusted Owner representatives for superyachts over 100m
            and reliable project managers. We have been overseeing all technical
            aspects of interior vessel refit and upgrade, dry-docking, technical
            assessment and survey, full vessel painting along with interior
            outfitting, carpentry works and all AV IT solutions. We are based in
            South of France, Monaco, Dubai and operating globally.
          </p>
          <motion.div
            initial={{ x: "70vh" }}
            animate={{ x: "0vh" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-center items-center mb-24 w-44 rounded-full border-2 border-[#242323]"
          />
        </motion.div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About_us;
