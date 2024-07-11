"use client"
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import background from "../../../public/About-us22.jpg";
import Footer from "@/app/components/footer/page";
import { motion } from "framer-motion";
const About_us = () => {
  return (
    <div data-theme="light">
      <div className="relative h-96">
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.8), rgba(26, 25, 25, 0.7), rgba(22, 21, 21, 0.6), rgba(18, 17, 17, 0.5)), url(${background.src})`,
          }}
        >
          {/* <h1 className=" text-3xl">Services</h1> */}
          <div className="w-full absolute top-0">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.p initial={{y:"70vh"}} animate={{y:"0vh"}} transform={{duration:0.8, ease:"easeInOut"}} className="my-32 text-justify sm:text-lg md:text-xl p-10  rounded-3xl">
          Our team is composed of highly qualified and experienced professionals
          with a solid technical and project management background acquired
          during the past +20 years. We have a proven record of managing and
          delivering complex refit projects for yachts along with commercial,
          passengers and service vessels. Our experts have been part of leading
          yacht brokerage and management firms, shipyards, trusted Owner
          representatives for superyachts over 100m and reliable project
          managers. We have been overseeing all technical aspects of interior
          vessel refit and upgrade, dry-docking, technical assessment and
          survey, full vessel painting along with interior outfitting, carpentry
          works and all AV IT solutions. We are based in South of France,
          Monaco, Dubai and operating globally.
        </motion.p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About_us;
