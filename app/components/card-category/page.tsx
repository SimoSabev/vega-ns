"use client"
// components/Cards_Services.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import services from "../../../public/Servicess.jpg";
import references from "../../../public/Technical_Services_page2.jpg";
import emergency_response from "../../../public/Technical_Services_page3.jpg";
import about_us from "../../../public/Technical_Services_page4.jpg";
import photo from "../../../public/1_Operational_.jpg";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const imageStyle = {
  borderRadius: "4%",
  height: "48vh",
  filter: "brightness(0.7)",
};

const Cards_Services = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const animationPropsLeft = isSmallScreen
    ? {
        initial: { y: "0vh", opacity: 0 },
        whileInView: { y: "0vh", opacity: 1 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true },
      }
    : {
        initial: { x: "-150vh", opacity: 0 },
        whileInView: { x: "0vh", opacity: 1 },
        transition: { duration: 0.5, ease: "easeOut" },
        viewport: { once: true },
      };

  const animationPropsRight = isSmallScreen
    ? {
        initial: { y: "0vh", opacity: 0 },
        whileInView: { y: "0vh", opacity: 1 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true },
      }
    : {
        initial: { x: "150vh", opacity: 0 },
        whileInView: { x: "0vh", opacity: 1 },
        transition: { duration: 0.7, ease: "easeOut" },
        viewport: { once: true },
      };

  return (
    <div
      data-theme="light"
      className="flex flex-col justify-center items-center lg:text-justify overflow-x-hidden space-y-8 mt-8"
    >
      {/* Organizational & Operational Support Card */}
      <motion.div {...animationPropsRight} className="relative my-auto bg-[#242323] w-11/12 md:w-3/4 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl shadow-lg">
        <motion.div {...animationPropsLeft} transition={{ ...animationPropsLeft.transition, delay: 0.2 }} className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={photo.src}
            alt="Organizational & Operational Support"
            className="w-full"
            style={imageStyle}
            width={500}
            height={400}
          />
        </motion.div>
        <div className="flex flex-col justify-center  items-center p-6 w-full lg:w-10/12 space-y-4">
          <h1 className="text-2xl lg:text-3xl  text-slate-200 font-bold border-b-2 border-slate-200 pb-2 uppercase">
            Organizational & Operational Support
          </h1>
          <p className="text-sm text-slate-200 lg:max-w-xl  lg:text-base ">
            The careful planning, effective communication and a well-organized
            approach play a crucial role in ensuring that the refit process is
            well-managed, according to the Owner&apos;s expectations and
            delivered on time.
          </p>
          <Link href="/pages/Operational">
            <button className="btn bg-slate-200 text-[#242323] px-8 rounded-full uppercase hover:bg-[#afafaf]">
              More
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div {...animationPropsRight} className="relative my-auto bg-[#242323] w-11/12 md:w-3/4 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl shadow-lg">
        <motion.div {...animationPropsLeft} transition={{ ...animationPropsLeft.transition, delay: 0.2 }} className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={services.src}
            alt="Technical and Engineering Services"
            className="w-full"
            style={imageStyle}
            width={800}
            height={20}
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center p-6 w-full lg:w-10/12 bg-slate-200 space-y-4">
          <h1 className="text-2xl lg:text-3xl text-[#242323] font-bold border-b-2 border-[#242323] pb-2 uppercase">
            Technical & Engineering Services
          </h1>
          <p className="text-sm text-[#242323] lg:max-w-xl  lg:text-base">
            The technical services and expertise are essential for the
            successful execution of any yacht refit project. Each area requires
            specialized knowledge and experience to ensure that the refit meets
            the highest standards of quality, safety, and innovation. Engaging
            our team with diverse technical capabilities and a track record of
            successful yacht refit projects can help ensure the project&apos;s
            success.
          </p>
          <Link href="/pages/Operational">
            <button className="btn bg-[#242323] text-slate-200 px-8 rounded-full uppercase hover:bg-[#afafaf]">
              More
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div {...animationPropsRight} className="relative my-auto bg-[#242323] w-11/12 md:w-3/4 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl shadow-lg">
        <motion.div {...animationPropsLeft} transition={{ ...animationPropsLeft.transition, delay: 0.2 }} className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={references.src}
            alt="Regulatory Compliance & Sustainability Upgrades"
            className="w-full"
            style={imageStyle}
            width={500}
            height={400}
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center p-6 w-full sm:text-left lg:w-10/12 space-y-4">
          <h1 className="text-2xl lg:text-3xl lg: max-w-xl text-slate-200 font-bold border-b-2 border-slate-200 pb-2 uppercase">
            Regulatory Compliance & Sustainability Upgrades
          </h1>
          <p className="text-sm text-slate-200 lg:max-w-xl  lg:text-base">
            Ensuring a yacht meets all regulatory requirements and incorporates
            sustainability practices is crucial for its operation and
            environmental impact. We have a deep expertise in regulatory
            compliance, classification society rules, and flag state
            requirements to ensure the yacht meets all safety and operational
            standards.
          </p>
          <Link href="/pages/Operational">
            <button className="btn bg-slate-200 text-[#242323] px-8 rounded-full uppercase hover:bg-[#afafaf]">
              More
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div {...animationPropsRight} className="relative my-auto bg-slate-200 w-11/12 md:w-3/4 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl shadow-lg">
        <motion.div {...animationPropsLeft} transition={{ ...animationPropsLeft.transition, delay: 0.2 }} className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={emergency_response.src}
            alt="Financial & Legal Support"
            className="w-full"
            style={imageStyle}
            width={500}
            height={400}
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center p-6 w-full lg:w-10/12 space-y-4">
          <h1 className="text-2xl lg:text-3xl text-[#242323] font-bold border-b-2 border-[#242323] pb-2 uppercase">
            Financial & Legal Support
          </h1>
          <p className="text-sm text-[#242323] lg:max-w-xl  lg:text-base">
            Providing financial and legal services for yachts involves a range
            of specialized offerings tailored to the unique needs of yacht
            owners and operators. These essential services ensure that the yacht
            is not only legally compliant but also financially optimized.
          </p>
          <Link href="/pages/Operational">
            <button className="btn bg-[#242323] text-slate-200 px-8 rounded-full uppercase hover:bg-[#afafaf]">
              More
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div {...animationPropsRight} className="relative my-auto bg-[#242323] w-11/12 md:w-3/4 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl shadow-lg">
        <motion.div {...animationPropsLeft} transition={{ ...animationPropsLeft.transition, delay: 0.2 }} className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={about_us.src}
            alt="ISM Support & Maintenance"
            className="w-full"
            style={imageStyle}
            width={500}
            height={400}
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center p-6 w-full lg:w-10/12 space-y-4">
          <h1 className="text-2xl lg:text-3xl text-slate-200 font-bold border-b-2 border-slate-200 pb-2 uppercase">
            ISM Support & Maintenance
          </h1>
          <p className="text-sm text-slate-200 lg:max-w-xl  lg:text-base">
            ISM (International Safety Management) support services for yachts
            are crucial for ensuring safety, environmental protection, and
            operational efficiency. The ISM Code requires Companies and their
            vessels to implement a Safety Management System (SMS) and we at VEGA
            assist them with the best implementation practices.
          </p>
          <Link href="/pages/Operational">
            <button className="btn bg-slate-200 text-[#242323] px-8 rounded-full uppercase hover:bg-[#afafaf]">
              More
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards_Services;
