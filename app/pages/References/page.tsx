"use client"
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import background from "../../../public/Reffferencess.jpg";
import Cards_Services1 from "@/app/components/card-references/page";
import Footer from "@/app/components/footer/page";
import { motion } from "framer-motion";


const References = () => {
  return (
    <div data-theme="light" className=" overflow-x-hidden">
      <div className="relative h-[70vh] text-left md:text-justify lg:text-justify xl:text-justify 2xl:text-justify">
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.8), rgba(26, 25, 25, 0.7), rgba(22, 21, 21, 0.6), rgba(18, 17, 17, 0.5)), url(${background.src})`,
          }}
        >
          {/* <h1 className=" text-3xl">Services</h1> */}
          <div className="w-full absolute top-0">
            <Navbar />
          </div>
          <div className="max-w-3xl  mx-auto">
            <motion.p initial={{y:"70vh"}} animate={{y:"0vh"}} transform={{duration:0.8, ease:"easeInOut"}} className=" text-md md:text-xl lg:text-xl xl:text-2xl text-left md:text-justify lg:text-justify xl:text-justify 2xl:text-justify text-slate-200 p-10 mt-36 md:mt-28 lg:mt-24 xl:mt-20 rounded-3xl">
              Selecting a trusted and reliable partner for your superyacht refit
              is crucial for ensuring high-quality work, compliance with
              regulations, and adherence to timelines and budgets. With a proven
              history of multiple successfully completed projects, we pride
              ourselves of our capability and reliability.
            </motion.p>
          </div>
        </div>
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
