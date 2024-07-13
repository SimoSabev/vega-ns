"use client"
import React from "react";
import { motion } from "framer-motion";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service1 = () => {
  return (
    <div className="bg-dark min-h-screen">
      <div className="mb-10">
        <Navbar />
      </div>
      <motion.div
        className="bg-center bg-cover mt-3"
        initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 1.2, ease:"easeInOut" }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22, 26, 44, 0.8), rgba(50, 58, 88, 0.7), rgba(74, 85, 125, 0.6), rgba(118, 118, 118, 0.5)), url(${services1.src})`,
          height: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      ></motion.div>

      <div className="py-8 px-4 sm:py-16 sm:px-8 flex flex-col justify-center items-center sm:text-left text-justify">
        <motion.h1
          className="text-2xl sm:text-3xl pb-2 uppercase text-slate-200 border-b-2 border-slate-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Organizational & Operational Support
        </motion.h1>
        <motion.p
          className="mt-8 sm:mt-16 text-justify max-w-xl text-slate-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The careful planning, effective communication and a well-organized
          approach play a crucial role in ensuring that the refit process is
          well-managed, according to the Owner’s expectations and delivered on
          time.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-36">
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="text-slate-200">
              • Defining specifications, developing a comprehensive refit plan
              that outlines all aspects of the project, Owner’s preferences,
              along with a detailed schedule, worklist, timeline, and budget.
            </li>
            <br />
            <li className="text-slate-200">
              • Building the team of highly qualified professionals and
              maintaining open lines of communication with the project team.
            </li>
            <br />
            <li className="text-slate-200">
              • Documentation of refit activities, cost control, compliance
              documentation, manuals.
            </li>
            <br />
            <li className="text-slate-200">
              • Implementation of quality control measures at various stages and
              conduction of regular inspections to ensure work meets
              specifications.
            </li>
          </motion.ul>
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <li className="text-slate-200">
              • Monitoring the progress, quality assurance, overseeing the
              logistics and the supply chain, procurement of materials and
              equipment.
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
              • Meticulous consistency planning and execution of every activity,
              allowing to better anticipate any possible deviation and implement
              immediate corrective actions to reach the deadline.
            </li>
          </motion.ul>
        </div>
        <motion.p
          className="mt-12 sm:mt-20 text-justify max-w-xl text-slate-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Regular communication, attention to detail, and adaptability to
          changing circumstances are key factors in effective planning and
          organization.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
};

export default Service1;
