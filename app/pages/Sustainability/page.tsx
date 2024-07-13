"use client"
import React from "react";
import { motion } from "framer-motion";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service3 = () => {
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
      ></motion.div>

      <div className="py-8 px-4 sm:py-16 sm:px-8 flex flex-col justify-center sm:text-left items-center text-justify">
        <motion.h1
          className="text-2xl sm:text-3xl pb-2 uppercase text-slate-200 border-b-2 border-slate-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Regulatory Compliance & Sustainability Upgrades
        </motion.h1>
        <motion.p
          className="mt-8 sm:mt-16 text-justify max-w-xl text-slate-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Ensuring a yacht meets all regulatory requirements and incorporates
          sustainability practices is crucial for its operation and
          environmental impact. We have deep expertise in regulatory
          compliance, classification society rules, and flag state requirements
          to ensure the yacht meets all safety and operational standards.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-36">
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="text-slate-200">
              • Ensuring Compliance with International Maritime Regulations –
              Managing and updating all necessary paperwork and certifications
            </li>
            <br />
            <li className="text-slate-200">• Class Society Approvals</li>
            <br />
            <li className="text-slate-200">
              • Flag State Inspections and Certifications
            </li>
            <br />
            <li className="text-slate-200">
              • Safety Equipment Servicing and Certification – Implementing
              safety systems and protocols to meet or exceed international
              maritime safety standards, including fire safety, life-saving
              appliances, and emergency response procedures.
            </li>
          </motion.ul>
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <li className="text-slate-200">
              • Fuel Efficiency Improvements – Implementing compliant fuel
              systems
            </li>
            <br />
            <li className="text-slate-200">
              • Fostering direct communication and transparency, reporting,
              liaising effectively with all the parties involved, obtaining
              rapid responses, involving, and providing regular progress updates
              to the Owner’s team.
            </li>
            <br />
            <li className="text-slate-200">
              • Energy Efficiency – Upgrading to more efficient engines,
              propulsion systems, and generators to reduce fuel consumption and
              emissions
            </li>
            <br />
            <li className="text-slate-200">
              • Eco-friendly Materials and Practices – Including waste
              management, emissions control, and ballast water treatment
            </li>
          </motion.ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service3;
