"use client";
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import Cards_Emergency from "@/app/components/card-emergency/page";
import Footer from "@/app/components/footer/page";
import { motion } from "framer-motion";
import { Noto_Sans, Poppins } from "next/font/google";
import background from "../../../public/Em_respo.jpg";

const header = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});

const small = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const Emergency_Response = () => {
  return (
    <div data-theme="light" className="overflow-x-hidden">
      <div className="relative bg-[#242323] h-[50vh] sm:h-[70vh] lg:h-[70vh] xl:h-[70vh] flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.8), rgba(26, 25, 25, 0.7), rgba(22, 21, 21, 0.6), rgba(18, 17, 17, 0.5)), url(${background.src})`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: "-150vh" }}
            animate={{ opacity: 1, y: "0vh" }}
            transition={{ duration: 0.8 }}
            className={`text-slate-200 text-center text-4xl sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl ${header.className}`}
          >
            Emergency Response
          </motion.div>
          <div className="w-full absolute top-0 z-20">
            <Navbar />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "70vh" }}
        animate={{ opacity: 1, y: "0vh" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`max-w-4xl flex flex-col flex-grow justify-center items-center mx-auto mt-20 p-4 sm:p-10 ${small.className}`}
      >
        <p className="my-12 text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl rounded-3xl text-center text-slate-black">
          We are committed to ensuring the safety, security, and environmental
          protection of your Yacht also with our emergency response program and
          services. These services provide crucial support in various emergency
          scenarios, helping to protect lives, vessels, and the marine
          environment.
        </p>
        <motion.div
          initial={{ y: "70vh" }}
          animate={{ y: "0vh" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center items-center mb-24 w-44 rounded-full border-2 border-[#242323]"
        />
      </motion.div>
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
