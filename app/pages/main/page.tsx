"use client"
import React from "react";
import background from "../../../public/Header-image.jpg";
import Navbar from "@/app/components/Navbar/page";
import Cards_Services from "@/app/components/card-services/page";
import Footer from "@/app/components/footer/page";
import VEGA from "../../../public/Vega-logo.png";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div data-theme="light" className="min-h-screen flex flex-col">
      <div
        className="hero parallax relative flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.8), rgba(26, 25, 25, 0.7), rgba(22, 21, 21, 0.6), rgba(18, 17, 17, 0.5)), url(${background.src})`,
          height: "50vh", // Set the height to half the viewport height
        }}
      >
        <div className="w-full absolute top-0">
          <Navbar />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p initial={{y:"70vh"}} animate={{y:"0vh"}} transform={{duration:0.8, ease:"easeInOut"}} className="my-32 text-justify text-xl p-4 sm:p-10 rounded-3xl text-slate-200 ">
            With over 20 years of experience and a passion for excellence, we
            bring solid knowledge and offer a wide range of solutions to enhance
            your yacht&apos;s performance, appearance, and functionality. We
            specialize in comprehensive super yacht and ship revitalizing,
            modernizing, customizing, and upgrading solutions, ensuring we cover
            all aspects of the entire refit project, from the initial study and
            assessment throughout its completion and delivery.
          </motion.p>
        </div>
      </div>

      <div className="flex-grow">
        <Cards_Services />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
