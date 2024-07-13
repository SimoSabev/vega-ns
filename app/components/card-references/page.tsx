"use client";
import React from "react";
import services from "../../../public/references_main.jpg";
import references from "../../../public/References.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const Cards_Services1 = () => {
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
      className="flex flex-col items-center text-justify overflow-x-hidden"
    >
      {/* Services Section */}
      <motion.div {...animationPropsRight} className="bg-[#242323] w-full flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <motion.div {...animationPropsLeft}
          transition={{ ...animationPropsLeft.transition, delay: 0.2 }} className="flex justify-center items-center w-full md:w-1/2">
          <Image
            src={services.src}
            alt="service"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        {/* Right Section - Text */}
        <div className="flex flex-col justify-center items-center p-6 md:pl-16 w-full md:w-1/2">
          <ul className="list-disc text-slate-200 text-justify text-lg flex flex-col justify-center items-start md:items-start">
            <li className="my-2">
              Refit management of a +140m Sailing yacht, including 100m mast
              un-stepping
            </li>
            <li className="my-2">
              5 years refit / class renewal of a +140m Motor yacht, involving
              full paint job
            </li>
            <li className="my-2">
              10 years class renewal / including tail shafts withdrawal of a
              +140m Motor yacht.
            </li>
            <li className="my-2">
              Re-engineering of a +140m commercial ship (in board engine
              replacement)
            </li>
            <li className="my-2">
              Project management, interior refitting and upgrades for various
              motor yachts among which 73m Perini Navi, 66m Oceanco, 33m Classic
              Feadship 1973
            </li>
          </ul>
        </div>
      </motion.div>

      {/* References Section */}
      <motion.div {...animationPropsLeft} className="bg-[#f1f1f1] w-full flex flex-col md:flex-row">
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center items-center p-6 md:pr-16 w-full md:w-1/2">
          <ul className="list-disc pl-6 text-justify text-lg flex flex-col justify-center items-start md:items-start">
            <li className="my-2">
              Conversion follow up (extension / helipad installation / Bow and
              stern conversion)
            </li>
            <li className="my-2">
              Complete control / command refit on commercial ship (machineries,
              safeties, propulsion)
            </li>
            <li className="my-2">
              New build construction management of multiple yachts and
              commercial ships
            </li>
            <li className="my-2">
              New build construction management of a new series of 2 luxury sail
              assisted cruise ships of +200m
            </li>
          </ul>
        </div>
        {/* Right Section - Image */}
        <motion.div {...animationPropsRight}
          transition={{ ...animationPropsRight.transition, delay: 0.2 }} className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={references.src}
            alt="references"
            className="w-full h-[40vh] md:h-[55vh] object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cards_Services1;
