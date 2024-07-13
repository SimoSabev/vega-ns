"use client";
import React from "react";
import { motion } from "framer-motion";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service4 = () => {
  return (
    <div className="bg-dark min-h-screen">
      <div className="mb-10">
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

      <div className="py-8 px-4 sm:py-16 sm:px-8 flex flex-col justify-center items-center sm:text-left text-justify">
        <motion.h1
          className="text-2xl sm:text-3xl pb-2 uppercase text-slate-200 border-b-2 border-slate-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Financial & Legal Support
        </motion.h1>
        <motion.p
          className="mt-8 sm:mt-16 text-justify max-w-xl text-slate-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Providing financial and legal services for yachts involves a range of
          specialized offerings tailored to the unique needs of yacht owners and
          operators. These essential services ensure that the yacht is not only
          legally compliant but also financially optimized.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-36">
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="font-bold text-slate-200">
              • Budget Development and Management
              <p className="font-normal text-slate-200">
                Creating from the start a detailed project budget that
                accurately reflects all anticipated costs and expenses,
                including direct project costs, overheads, and contingencies.
              </p>
            </li>
            <br />
            <li className="font-bold text-slate-200">
              • Cost Estimation and Forecasting
              <p className="font-normal text-slate-200">
                Utilizing our historical data, judgment, and industry
                benchmarks, we estimate costs for all project components and
                continuously update the cost forecasts based on actual
                expenditures and changes in project scope.
              </p>
            </li>
            <br />
            <li className="font-bold text-slate-200">
              • Resource Optimization
              <p className="font-normal text-slate-200">
                Carefully manage the allocation of financial resources,
                personnel, and equipment to maximize efficiency and minimize
                waste of your project.
              </p>
            </li>
            <br />
            <li className="font-bold text-slate-200">
              • Variance Analysis
              <p className="font-normal text-slate-200">
                Permanently monitor actual project costs and performance metrics
                against the budget and planned targets, identify variations, and
                investigate the reasons behind discrepancies to take immediate
                corrective actions.
              </p>
            </li>
          </motion.ul>
          <motion.ul
            className="mt-8 sm:mt-24 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <li className="font-bold text-slate-200">
              • Cost-Effective Procurement and Vendor Management
              <p className="font-normal text-slate-200">
                Strategically source goods and services at competitive prices,
                negotiate favorable contracts, and actively manage vendor
                relationships to control procurement costs and minimize cost
                overruns.
              </p>
            </li>
            <br />
            <li className="font-bold text-slate-200">
              • Change Management and Impact Analysis
              <p className="font-normal text-slate-200">
                Systematically evaluate the financial implications of proposed
                changes to the project scope or schedule, and weigh these
                against the potential benefits to make informed decisions that
                minimize cost impacts.
              </p>
            </li>
            <br />
            <li className="font-bold text-slate-200">
              • Continuous Monitoring and Reporting
              <p className="font-normal text-slate-200">
                We establish robust systems for ongoing monitoring of project
                financials, including regular reporting on actual costs
                incurred, budget utilization, and cost performance indicators to
                enable proactive cost control measures.
              </p>
            </li>
          </motion.ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service4;
