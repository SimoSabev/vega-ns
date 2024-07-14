"use client";
import React from "react";
import Navbar from "@/app/components/Navbar/page";
import background from "../../../public/Services23333.jpg"; // Corrected import path
import Cards_Services from "@/app/components/card-category/page";
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

const Services = () => {
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
            Services
          </motion.div>
          <div className="w-full absolute top-0 z-20">
            <Navbar />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "70vh" }}
        whileInView={{ opacity: 1, y: "0vh" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`max-w-4xl flex flex-col flex-grow justify-center items-center mx-auto mt-20 p-4 sm:p-10 ${small.className}`}
      >
        <p className="my-12 text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl rounded-3xl text-center text-slate-black">
          Our services are specifically tailored to meet the unique needs and
          desires of each owner, enhancing the vessel’s aesthetics,
          functionality and value. Our ability to integrate the latest
          technology and design trends along with the highest level of
          craftsmanship and attention to details, ensures your yacht is at the
          forefront of maritime excellence. The adaptability for complete
          intervention or only partial involvement along with our ability to
          attend on a short notice allows us to offer more flexibility. As an
          independent entity, we build full spectrum solutions with selected
          skilled professionals and trusted industry partners. Our team is
          committed to deliver your project on time, on budget and according to
          your expectations.
        </p>
        <motion.div
          initial={{ y: "70vh" }}
          animate={{ y: "0vh" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center items-center mb-24 w-44 rounded-full border-2 border-[#242323]"
        />
      </motion.div>
      <div>
        <Cards_Services />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Services;
