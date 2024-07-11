"use client"
// components/Services.jsx
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import background from "../../../public/Large-yacht.jpeg";
import Cards_Services from "@/app/components/card-category/page";
import Footer from "@/app/components/footer/page";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div data-theme="light">
      <div className="relative h-64 max-sm:h-[80vh] max-md:h-[75vh] lg:h-[70vh]">
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.8), rgba(26, 25, 25, 0.7), rgba(22, 21, 21, 0.6), rgba(18, 17, 17, 0.5)), url(${background.src})`
          }}
        >
          <div className="max-w-4xl mx-auto mt-20 p-4 sm:p-10">
            <motion.p initial={{y:"70vh"}} animate={{y:"0vh"}} transform={{duration:0.8, ease:"easeInOut"}} className="my-24 sm:my-32 text-lg sm:text-lg lg:text-xl rounded-3xl text-justify text-slate-200">
              Our services are specifically tailored to meet the unique needs and
              desires of each owner, enhancing the vessel&apos;s aesthetics, functionality, 
              and value. Our ability to integrate the latest technology and design 
              trends along with the highest level of craftsmanship and attention to 
              detail ensures your yacht is at the forefront of maritime excellence. 
              The adaptability for complete intervention or only partial involvement 
              along with our ability to attend on short notice allows us to offer more 
              flexibility. As an independent entity, we build full-spectrum solutions 
              with selected skilled professionals and trusted industry partners. Our 
              team is committed to delivering your project on time, on budget, and 
              according to your expectations.
            </motion.p>
          </div>
          <div className="w-full absolute top-0">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="">
        <Cards_Services />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Services;
