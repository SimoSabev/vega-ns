"use client";
import React from "react";
import { motion } from "framer-motion";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service2 = () => {
  return (
    <div className="bg-dark min-h-screen">
      <div className="mb-10 z-20">
        <Navbar />
      </div>
      <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 1.2, ease:"easeInOut" }}
        className="bg-center bg-cover mt-3"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22, 26, 44, 0.8), rgba(50, 58, 88, 0.7), rgba(74, 85, 125, 0.6), rgba(118, 118, 118, 0.5)), url(${services1.src})`,
          height: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
      </motion.div>

      <div className="py-8 px-4 sm:py-16 sm:px-8 flex flex-col justify-center items-center sm:text-left text-justify">
        <motion.h1
          className="text-2xl sm:text-3xl pb-2 uppercase text-slate-200 border-b-2 border-slate-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Technical, Engineering & Interior Services
        </motion.h1>

        <motion.p
          className="mt-8 sm:mt-16 text-justify max-w-xl text-slate-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The technical services and expertise are essential for the successful
          execution of any yacht refit project. Each area requires specialized
          knowledge and experience to ensure that the refit meets the highest
          standards of quality, safety, and innovation. Engaging our team with
          diverse technical capabilities and a track record of successful yacht
          refit projects can help ensure the project&apos;s success.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-36">
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="text-slate-200">
              • Seasonal Maintenance & Post-Refit Support
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  Warranty and Guarantee Services
                </li>
                <li className="text-slate-200">
                  Sea Trials & Follow-up Inspections
                </li>
                <li className="text-slate-200">Regular Maintenance Programs</li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Structural Modification
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  Hull Extensions and Modifications
                </li>
                <li className="text-slate-200">Structural Reinforcements</li>
                <li className="text-slate-200">Superstructure Modifications</li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Mechanical and Electrical Upgrades
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  Engine and Generator Overhauls
                </li>
                <li className="text-slate-200">HVAC System Upgrades</li>
                <li className="text-slate-200">
                  Electrical System Rewiring and Upgrades
                </li>
                <li className="text-slate-200">Piping System Enhancements</li>
                <li className="text-slate-200">
                  Underwater & Auxiliary Machineries Overhauls & Upgrades
                </li>
                <li className="text-slate-200">
                  Advanced Navigation Systems and Electronics
                </li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Exterior Renovation
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">Teak Replacement and Repairs</li>
                <li className="text-slate-200">
                  Paint and Coating Application
                </li>
                <li className="text-slate-200">Polishing and Brightwork</li>
                <li className="text-slate-200">Custom Metal Fabrication</li>
                <li className="text-slate-200">Underwater Hull Maintenance</li>
              </ul>
            </li>
          </motion.ul>

          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <li className="text-slate-200">
              • Interior Design and Layout Changes
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">Design Concept development</li>
                <li className="text-slate-200">
                  Space reconfiguration and layout optimization
                </li>
                <li className="text-slate-200">
                  Material and colour selection
                </li>
                <li className="text-slate-200">Furniture and Fixtures</li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Interior Enhancement
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">Carpentry and Varnishing</li>
                <li className="text-slate-200">
                  Soft Furnishings and Upholstery
                </li>
                <li className="text-slate-200">
                  Lighting Modification and Installation
                </li>
                <li className="text-slate-200">Storage solutions</li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Technological Enhancements
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  Integration of Smart Yacht Technology
                </li>
                <li className="text-slate-200">Advanced Security Systems</li>
                <li className="text-slate-200">
                  High-speed Internet and Communication Systems
                </li>
                <li className="text-slate-200">Audio-Visual Systems</li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Additions
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">Pool and Spa Installation</li>
                <li className="text-slate-200">Custom Bars and Lounges</li>
                <li className="text-slate-200">Gym and Wellness Areas</li>
                <li className="text-slate-200">Entertainment Zones</li>
                <li className="text-slate-200">
                  Outdoor Living Spaces and Furniture
                </li>
              </ul>
            </li>
          </motion.ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service2;
