import React from "react";
import Link from "next/link";
import services from "../../../public/Services1.jpg";
import references from "../../../public/References.jpg";

const Cards_Services1 = () => {
  return (
    <div
      data-theme="light"
      className="flex flex-col items-center text-justify overflow-x-hidden"
    >
      {/* Services Section */}
      <div className="bg-[#242323] w-full h-[55vh] flex flex-col lg:flex-row">
        {/* Left Section - Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={services.src}
            alt="service"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Section - Text */}
        <div className="flex flex-col justify-center items-start p-6 lg:pl-36 w-full lg:w-1/2">
          <h1 className="text-4xl text-[#f1f1f1] font-bold border-b-2 border-[#f1f1f1] pb-4 px-3">
            SERVICES
          </h1>
          <p className="text-sm max-w-xl text-[#f1f1f1] pt-6">
            <ul className="list-disc pl-6">
              <li>
                Refit management of a +140m Sailing yacht, including 100m mast
                un-stepping
              </li>
              <li>
                5 years refit / class renewal of a +140m Motor yacht, involving
                full paint job
              </li>
              <li>
                10 years class renewal / including tail shafts withdrawal of a
                +140m Motor yacht.
              </li>
              <li>
                Re-engineering of a +140m commercial ship (in board engine
                replacement)
              </li>
              <li>
                Project management, interior refitting and upgrades for various
                motor yachts among which 73m Perini Navi, 66m Oceanco, 33m
                Classic Feadship 1973
              </li>
            </ul>
          </p>
        </div>
      </div>

      {/* References Section */}
      <div className="bg-[#f1f1f1] w-full h-[55vh] flex flex-col lg:flex-row">
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center items-start p-6 lg:pr-36 w-full lg:w-1/2">
          <h1 className="text-4xl text-[#333] font-bold border-b-2 border-[#333] pb-4 px-3">
            REFERENCES
          </h1>
          <p className="text-sm max-w-xl text-[#333] pt-6">
            <ul className="list-disc pl-6">
              <li>
                Conversion follow up (extension / helipad installation / Bow
                and stern conversion)
              </li>
              <li>
                Complete control / command refit on commercial ship (machineries,
                safeties, propulsion)
              </li>
              <li>New build construction management of multiple yachts and commercial ships</li>
              <li>
                New build construction management of a new series of 2 luxury
                sail assisted cruise ships of +200m
              </li>
            </ul>
          </p>
        </div>
        {/* Right Section - Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={references.src}
            alt="references"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards_Services1;
