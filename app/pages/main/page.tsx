"use client";
import React from "react";
import background from "../../../public/Header-image.jpg";
import Navbar from "@/app/components/Navbar/page";
import Cards_Services from "@/app/components/card-services/page";
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

const Main = () => {
  return (
    <div
      data-theme="light"
      className="min-h-screen flex flex-col overflow-x-hidden"
    >
      <div
        className="hero flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.8), rgba(26, 25, 25, 0.7), rgba(22, 21, 21, 0.6), rgba(18, 17, 17, 0.5)), url(${background.src})`,
          height: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full absolute top-0 z-20">
          <Navbar />
        </div>
        <div className=" flex flex-col flex-grow justify-center items-center mb-36 gap-10">
          <motion.div
            initial={{ opacity: 0, y: "-150vh" }}
            animate={{ opacity: 1, y: "0vh" }}
            transition={{ duration: 0.8 }}
            className={`text-slate-200 text-center text-2xl sm:text-5xl md:text-5xl xl:text-5xl 2xl:text-5xl  ${header.className}`}
          >
            We Are Here To Assist You
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "150vh" }}
            animate={{ opacity: 1, y: "0vh" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={` max-w-4xl text-slate-200 text-center md:text-center text-2xl sm:text-5xl md:text-5xl xl:text-5xl 2xl:text-5xl ${header.className}`}
          >
            With Your Refit Journey
          </motion.div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: "70vh" }}
          animate={{ opacity: 1, y: "0vh" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center items-center my-28 text-center text-black text-md md:text-lg lg:text-xl xl:text-xl p-4 sm:p-10"
        >
          <p className={small.className}>
            We specialize in comprehensive super yacht and ship revitalizing,
            customizing, and upgrading solutions, ensuring we cover all aspects
            of the entire refit project. With over 20 years of experience and a
            passion for excellence, we bring solid knowledge and offer a wide
            range of solutions to enhance your yacht&apos;s performance,
            appearance, and functionality.
          </p>
          <motion.div
            initial={{ y: "70vh" }}
            animate={{ y: "0vh" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-center items-center mt-10 w-44 rounded-full border-2 border-[#242323]"
          />
        </motion.div>
      </div>
      <div className="flex-grow">
        <Cards_Services />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
