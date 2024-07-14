"use client";
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import background from "../../../public/Reffferencess.jpg"; // Corrected import path
import Cards_Services1 from "@/app/components/card-references/page";
import Footer from "@/app/components/footer/page";
import { motion } from "framer-motion";
import { Noto_Sans, Poppins } from "next/font/google";

const header = Noto_Sans({
  weight: "600",
  subsets: ["latin"],
});

const small = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const References = () => {
  return (
    <div data-theme="light" className="overflow-x-hidden">
      <div className="relative h-[50vh] sm:h-[70vh] md:h-[75vh] lg:h-[70vh] xl:h-[70vh]">
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
            className={`text-slate-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl ${header.className}`}
          >
            References
          </motion.div>
          <div className="w-full absolute top-0 z-20">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: "70vh" }}
          whileInView={{ opacity: 1, y: "0vh" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`max-w-4xl flex flex-col flex-grow justify-center items-center mx-auto mt-20 p-4 sm:p-10 ${small.className}`}
        >
          <p className="my-12 text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl rounded-3xl text-center text-slate-black">
            Selecting a trusted and reliable partner for your superyacht refit
            is crucial for ensuring high-quality work, compliance with
            regulations, and adherence to timelines and budgets. With a proven
            history of multiple successfully completed projects, we pride
            ourselves on our capability and reliability.
          </p>
          <motion.div
            initial={{ y: "70vh" }}
            animate={{ y: "0vh" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-center items-center mb-24 w-44 rounded-full border-2 border-[#242323]"
          />
        </motion.div>
      </div>
      <div>
        <Cards_Services1 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default References;
