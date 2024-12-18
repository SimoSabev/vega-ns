"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import services from "../../../public/services_main.jpg";
import references from "../../../public/References.jpg";
import emergency_response from "../../../public/Emergency-response.jpg";
import about_us from "../../../public/About-us.jpg";
import { motion } from "framer-motion";

const Cards_Services = () => {
  const animationPropsLeft = {
    initial: { x: "-80%", opacity: 0 },
    whileInView: { x: "0vh", opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true },
  };

  const animationPropsRight = {
    initial: { x: "80%", opacity: 0 },
    whileInView: { x: "0vh", opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <div
      data-theme="light"
      className="w-full flex flex-col items-center text-justify overflow-x-hidden"
    >
      {/* Services Section */}
      <motion.div
        {...animationPropsRight}
        className="bg-[#242323] w-full flex flex-col md:flex-row lg:flex-row h-auto min-h-[50vh]"
      >
        <motion.div
          {...animationPropsLeft}
          transition={{ ...animationPropsLeft.transition, delay: 0.2 }}
          className="flex justify-center items-center w-full md:w-1/2 lg:w-1/2"
        >
          <img
            src={services.src}
            alt="services"
            className="w-full h-[50vh] object-cover"
          />
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center p-6 w-full md:w-1/2 lg:w-1/2 order-2 md:order-1 lg:order-1">
          <motion.h1
            transition={{ ...animationPropsRight.transition, delay: 0.1 }}
            className="text-4xl text-[#f1f1f1] font-bold border-b-2 border-[#f1f1f1] pb-4 px-3"
          >
            SERVICES
          </motion.h1>
          <motion.p
            transition={{ ...animationPropsRight.transition, delay: 0.2 }}
            className="text-sm max-w-xl text-[#f1f1f1] pt-6"
          >
            Our services are specifically tailored to meet the unique needs and
            desires of each owner, enhancing the vessel’s aesthetics,
            functionality, and value. Our adaptability for complete intervention
            or only partial involvement along with our ability to integrate the
            latest technology and attend on short notice allows us to offer
            more flexibility.
          </motion.p>
          <Link href="/pages/Services">
            <button className="btn bg-[#f1f1f1] text-[#242323] px-16 py-2 rounded-full mt-8 uppercase hover:bg-[#b6b6b6]">
              More
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* References Section */}
      <motion.div
        {...animationPropsLeft}
        className="bg-[#f1f1f1] w-full flex flex-col md:flex-row lg:flex-row h-auto min-h-[50vh]"
      >
        <motion.div
          {...animationPropsRight}
          transition={{ ...animationPropsRight.transition, delay: 0.2 }}
          className="flex justify-center items-center w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 lg:order-2"
        >
          <img
            src={references.src}
            alt="references"
            className="w-full h-[50vh] object-cover"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center p-6 w-full md:w-1/2 lg:w-1/2 order-2 md:order-1 lg:order-1">
          <motion.h1
            transition={{ ...animationPropsLeft.transition, delay: 0.1 }}
            className="text-4xl text-[#333] font-bold border-b-2 border-[#333] pb-4 px-3"
          >
            REFERENCES
          </motion.h1>
          <motion.p
            transition={{ ...animationPropsLeft.transition, delay: 0.2 }}
            className="text-sm max-w-xl text-[#333] pt-6"
          >
            Selecting a trusted and reliable partner for your superyacht refit
            is crucial for ensuring high-quality work, compliance with
            regulations, and adherence to timelines and budgets. With a proven
            history of multiple successfully completed projects, we pride
            ourselves on our capability and reliability.
          </motion.p>
          <Link href="/pages/References">
            <button className="btn bg-[#333] text-slate-200 px-16 py-2 rounded-full mt-8 uppercase hover:bg-[#4b4b4b]">
              More
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Emergency Response Section */}
      <motion.div
        {...animationPropsRight}
        className="bg-[#242323] w-full flex flex-col md:flex-row lg:flex-row h-auto min-h-[50vh]"
      >
        <motion.div
          {...animationPropsLeft}
          transition={{ ...animationPropsLeft.transition, delay: 0.2 }}
          className="flex justify-center items-center w-full md:w-1/2 lg:w-1/2"
        >
          <img
            src={emergency_response.src}
            alt="emergency response"
            className="w-full h-[50vh] object-cover"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center p-6 w-full md:w-1/2 lg:w-1/2">
          <motion.h1
            transition={{ ...animationPropsRight.transition, delay: 0.1 }}
            className="text-4xl text-[#f1f1f1] font-bold border-b-2 border-[#f1f1f1] pb-4 px-3"
          >
            EMERGENCY RESPONSE
          </motion.h1>
          <motion.p
            transition={{ ...animationPropsRight.transition, delay: 0.2 }}
            className="text-sm max-w-xl text-[#f1f1f1] pt-6"
          >
            We are committed to ensuring the safety, security, and environmental
            protection of your Yacht also with our emergency response program
            and services. These services provide crucial support in various
            emergency scenarios, helping to protect lives, vessels, and the
            marine environment.
          </motion.p>
          <Link href="/pages/EmergencyResponse">
            <button className="btn bg-[#f1f1f1] text-[#242323] px-16 py-2 rounded-full mt-8 uppercase hover:bg-[#b6b6b6]">
              More
            </button>
          </Link>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        {...animationPropsLeft}
        className="bg-[#f1f1f1] w-full flex flex-col md:flex-row lg:flex-row h-auto min-h-[50vh]"
      >
        <motion.div
          {...animationPropsRight}
          transition={{ ...animationPropsRight.transition, delay: 0.2 }}
          className="flex justify-center items-center w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 lg:order-2"
        >
          <img
            src={about_us.src}
            alt="about us"
            className="w-full h-[50vh] object-cover"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center p-6 w-full md:w-1/2 lg:w-1/2 order-2 md:order-1 lg:order-1">
          <motion.h1
            transition={{ ...animationPropsLeft.transition, delay: 0.1 }}
            className="text-4xl text-[#333] font-bold border-b-2 border-[#333] pb-4 px-3"
          >
            ABOUT US
          </motion.h1>
          <motion.p
            transition={{ ...animationPropsLeft.transition, delay: 0.2 }}
            className="text-sm max-w-xl text-[#333] pt-6"
          >
            Our team is composed of highly qualified and experienced
            professionals with a solid technical and project management
            background acquired during the past +20 years. We have a proven
            record of managing and delivering complex refit projects for yachts
            along with commercial, passengers, and service vessels.
          </motion.p>
          <Link href="/pages/AboutUs">
            <button className="btn bg-[#333] text-slate-200 px-16 py-2 rounded-full mt-8 uppercase hover:bg-[#4b4b4b]">
              More
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards_Services;