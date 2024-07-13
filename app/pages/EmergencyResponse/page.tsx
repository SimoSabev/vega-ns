"use client";
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import Cards_Emergency from "@/app/components/card-emergency/page";
import Footer from "@/app/components/footer/page";
import { motion } from "framer-motion";

const Emergency_Response = () => {
  return (
    <div data-theme="light" className="overflow-x-hidden">
      <div className="relative bg-[#242323] h-auto min-h-[50vh] flex flex-col justify-center items-center">
        <div className="w-full absolute top-0 z-20">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start p-10 max-w-2xl lg:text-left">
          <motion.p
            initial={{ y: "70vh" }}
            animate={{ y: "0vh" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-slate-200 text-xl lg:mt-16 md:mt-20 mt-32 text-left md:text-justify lg:text-justify xl:text-justify 2xl:text-justify flex justify-center items-center"
          >
            We are committed to ensuring the safety, security, and environmental
            protection of your Yacht also with our emergency response program
            and services. These services provide crucial support in various
            emergency scenarios, helping to protect lives, vessels, and the
            marine environment.
          </motion.p>
        </div>
      </div>

      <div>
        <Cards_Emergency />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Emergency_Response;
