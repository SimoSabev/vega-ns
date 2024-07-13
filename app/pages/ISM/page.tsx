"use client";
import React from "react";
import { motion } from "framer-motion";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service5 = () => {
  return (
    <div className="bg-dark min-h-screen">
      <div className="mb-10">
        <Navbar />
      </div>
      <motion.div
        className="bg-center bg-cover mt-3"
        style={{
          height: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 1.2, ease:"easeInOut" }}
      >
        <motion.div
          className="bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(22, 26, 44, 0.8), rgba(50, 58, 88, 0.7), rgba(74, 85, 125, 0.6), rgba(118, 118, 118, 0.5)), url(${services1.src})`,
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: -1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      <div className="py-8 px-4 sm:py-16 sm:px-8 flex flex-col justify-center sm:text-left items-center text-left md:text-justify lg:text-justify xl:text-justify 2xl:text-justify">
        <motion.h1
          className="text-2xl sm:text-3xl pb-2 uppercase text-slate-200 border-b-2 border-slate-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ISM Support & Maintenance Database Implementation
        </motion.h1>
        <motion.p
          className="mt-8 sm:mt-16 text-left md:text-justify lg:text-justify xl:text-justify 2xl:text-justify max-w-xl text-slate-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          ISM (International Safety Management) support services for yachts are
          crucial for ensuring safety, environmental protection, and operational
          efficiency. The ISM Code requires Companies and their vessels to
          implement a Safety Management System (SMS) and we at VEGA assist them
          with the best implementation practices.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-36 ">
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="text-slate-200">
              • ISM Support & Implementation
              <ul className="list-disc ml-5">
                <li className="text-justify ml-5 text-slate-200">
                  Initial Assessment: Identifying gaps between current practices
                  and ISM Code requirements.
                </li>
                <li className="text-justify ml-5 text-slate-200">
                  Develop and Document SMS: Creation of the SMS documentation,
                  including the Safety Management Manual.
                </li>
                <li className="text-justify ml-5 text-slate-200">
                  Training and Awareness: Training crew and shore-based
                  personnel on the ISM Code requirements and the SMS.
                </li>
                <li className="text-justify ml-5 text-slate-200">
                  Implement Procedures: Putting the SMS into practice on board
                  ships and within the company.
                </li>
              </ul>
            </li>
            <br />
            <li className="text-slate-200">
              • ISM Audits Assistance
              <ul className="list-disc ml-5">
                <li className="text-justify ml-5 text-slate-200">
                  Internal Audits: Conducting internal audits to verify
                  compliance and effectiveness.
                </li>
                <li className="text-justify ml-5 text-slate-200">
                  Corrective Actions: Addressing non-conformities and areas for
                  improvement identified during audits.
                </li>
                <li className="text-justify ml-5 text-slate-200">
                  External Audit and Certification: Undergoing external audits
                  by the flag state or recognized organization to obtain DOC and
                  SMC.
                </li>
              </ul>
            </li>
            <br />
            <li className="text-slate-200">
              • Standard and Specific Operation Procedures elaboration - crucial
              on-board boats for ensuring safety, efficiency, compliance, and
              overall operational effectiveness
            </li>
            <br />
            <li className="text-slate-200">
              • Safety and Risk Management
              <p className="font-normal text-slate-200">
                Consistent Safety Practices and Emergency Preparedness
              </p>
            </li>
            <br />
          </motion.ul>
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <br />
            <li className="text-slate-200">
              • Operational Efficiency, Setup Books & Crew Training
              <p className="font-normal text-slate-200">
                Streamlined Operations - leading to smoother workflows and more
                efficient use of time and resources, consistency
              </p>
            </li>
            <br />
            <li className="text-slate-200">
              • Regulatory Compliance
              <p className="font-normal text-slate-200">
                Ensuring compliance with international maritime regulations,
                such as those outlined in the International Safety Management
                (ISM) Code.
              </p>
            </li>
            <br />
            <li className="text-slate-200">• Certification and Inspection</li>
            <br />
            <li className="text-slate-200">
              • Quality control and continuous improvement
            </li>
            <br />
            <li className="text-slate-200">
              • Environment protection & pollution prevention
            </li>
            <br />
            <li className="text-slate-200">
              • Sustainable Practices
              <p className="font-normal text-slate-200">
                Implementing SOPs for energy management, emissions control, and
                resource conservation promotes sustainable practices on board.
              </p>
            </li>
            <br />
            <li className="text-slate-200">• Certification and Inspection</li>
            <br />
            <li className="text-slate-200">
              • Maintenance Database Implementation
              <p className="font-normal text-slate-200">
                Implementing a Planned Maintenance System (PMS) on boats is
                essential for ensuring the proper and smooth operation of the
                vessel. It helps schedule, track, and document maintenance
                tasks, ensuring compliance with regulatory requirements and
                extending the lifespan of the equipment.
              </p>
            </li>
          </motion.ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service5;
