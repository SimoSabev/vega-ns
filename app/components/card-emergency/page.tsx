"use client";
import React from "react";
import emergency_response from "../../../public/Emergency-response.jpg";
import daily from "../../../public/24-7.png";
import group from "../../../public/multiple-users-silhouette.png";
import danger from "../../../public/danger.png";
import location from "../../../public/location1.png";
import eco from "../../../public/environmental-protection.png";
import secure from "../../../public/secure-shield.png";
import about_us from "../../../public/Emergency Response Opt.webp";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Cards_Emergency = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const animationPropsLeft = isSmallScreen
    ? {
        initial: { y: "0vh", opacity: 0 },
        whileInView: { y: "0vh", opacity: 1 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true },
      }
    : {
        initial: { x: "-150vh", opacity: 0 },
        whileInView: { x: "0vh", opacity: 1 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true },
      };

  const animationPropsRight = isSmallScreen
    ? {
        initial: { y: "0vh", opacity: 0 },
        whileInView: { y: "0vh", opacity: 1 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true },
      }
    : {
        initial: { x: "150vh", opacity: 0 },
        whileInView: { x: "0vh", opacity: 1 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true },
      };

  return (
    <div
      data-theme="light"
      className="flex flex-col items-center overflow-x-hidden"
    >
      {/* First Section */}
      <motion.div
        {...animationPropsRight}
        className="flex flex-col lg:flex-row w-full h-auto lg:h-[55vh]"
      >
        {/* Left Section - Image */}
        <motion.div
          {...animationPropsLeft}
          transition={{ ...animationPropsLeft.transition, delay: 0.2 }}
          className="flex justify-center items-center w-full lg:w-1/2 order-1 md:order-2 lg:order-2"
        >
          <img
            src={emergency_response.src}
            alt="service"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Right Section - Divided into Two */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 order-1 md:order-2 lg:order-2">
          {/* Upper Half - White */}
          <div className="flex flex-col justify-center items-start p-6 lg:p-10 h-auto lg:h-1/2 bg-white">
            <ul className="text-[#242323] flex flex-col justify-center items-center lg:items-start">
              <li className="flex mb-8 lg:mb-0">
                <img
                  src={daily.src}
                  alt="24/7 Emergency Hotline"
                  className="w-12 h-12 mr-6"
                />
                <span>
                  24/7 Emergency Hotline - Our team is available around the
                  clock to provide immediate support and guidance in case of an
                  emergency.
                </span>
              </li>
              <li className="flex mb-8 lg:mb-0 mt-12">
                <img
                  src={group.src}
                  alt="On-Site Response Teams"
                  className="w-12 h-12 mr-6"
                />
                <span>
                  On-Site Response Teams - We have highly trained and
                  experienced personnel ready to deploy to the scene of an
                  incident and provide on-site assistance.
                </span>
              </li>
              <li className="flex mt-12">
                <img
                  src={location.src}
                  alt="Coordination with Local Authorities"
                  className="w-12 h-12 mr-6"
                />
                <span>
                  Coordination with Local Authorities - Working closely with
                  local authorities and Administrations to ensure a coordinated
                  and effective response to any emergency situation.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        {...animationPropsLeft}
        className="flex flex-col lg:flex-row w-full h-auto lg:h-[55vh]"
      >
        <div className="flex flex-col justify-center items-start p-6 lg:pl-36 lg:pr-16 w-full lg:w-1/2 order-2 md:order-1 lg:order-1">
          <ul className="text-[#242323] flex flex-col justify-center items-center lg:items-start">
            <li className="flex mb-8 lg:mb-0">
              <img
                src={danger.src}
                alt="Technical Breakdown Support"
                className="w-12 h-12 mr-6"
              />
              <span>
                Technical Breakdown Support - Our expertise extends to
                addressing immediate non-vital issues, such as technical
                breakdowns, to reinstate vessel operations promptly.
              </span>
            </li>
            <li className="flex mb-8 lg:mb-0 mt-12">
              <img
                src={eco.src}
                alt="Environmental Protection"
                className="w-12 h-12 mr-6"
              />
              <span>
                Environmental Protection - Our services include strategies to
                minimize environmental impact and comply with all relevant
                regulations.
              </span>
            </li>
            <li className="flex mt-12">
              <img
                src={secure.src}
                alt="Safety and Compliance"
                className="w-12 h-12 mr-6"
              />
              <span>
                Safety and Compliance - We prioritize safety and ensure
                compliance with industry regulations to mitigate risks and
                protect personnel and assets.
              </span>
            </li>
          </ul>
        </div>
        <motion.div
          {...animationPropsRight}
          transition={{ ...animationPropsRight.transition, delay: 0.2 }}
          className="flex justify-center items-center w-full lg:w-1/2 order-1 md:order-2 lg:order-2"
        >
          <img
            src={about_us.src}
            alt="references"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cards_Emergency;
