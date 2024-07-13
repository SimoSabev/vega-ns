import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import servicesImage from "../../../public/references_main.jpg";
import referencesImage from "../../../public/References.jpg";

const Cards_Services1 = () => {
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
        transition: { duration: 0.7, ease: "easeOut" },
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
      className="flex flex-col items-center text-justify overflow-x-hidden"
    >
      {/* Services Section */}
      <motion.div {...animationPropsRight} className="bg-[#242323] w-full flex flex-col md:flex-row">
        {/* Left Section - Image */}
        <motion.div {...animationPropsLeft} transition={{ ...animationPropsLeft.transition, delay: 0.2 }} className="flex justify-center items-center w-full md:w-1/2">
          <Image
            src={servicesImage}
            alt="service"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        {/* Right Section - Text */}
        <div className="flex flex-col justify-center items-center p-6 md:pl-16 w-full md:w-1/2">
          <ul className="list-disc text-slate-200 text-justify text-lg flex flex-col justify-center items-start md:items-start">
            <li className="my-2">
              Refit management of a +140m Sailing yacht, including 100m mast un-stepping
            </li>
            {/* Other list items */}
          </ul>
        </div>
      </motion.div>

      {/* References Section */}
      <motion.div {...animationPropsLeft} className="bg-[#f1f1f1] w-full flex flex-col md:flex-row">
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center items-center p-6 md:pr-16 w-full md:w-1/2">
          <ul className="list-disc pl-6 text-justify text-lg flex flex-col justify-center items-start md:items-start">
            <li className="my-2">
              Conversion follow up (extension / helipad installation / Bow and stern conversion)
            </li>
            {/* Other list items */}
          </ul>
        </div>
        {/* Right Section - Image */}
        <motion.div {...animationPropsRight} transition={{ ...animationPropsRight.transition, delay: 0.2 }} className="flex justify-center items-center w-full md:w-1/2">
          <Image
            src={referencesImage}
            alt="references"
            layout="responsive"
            width={1200}
            height={800}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cards_Services1;
