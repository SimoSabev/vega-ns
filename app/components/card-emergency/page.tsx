import React from "react";
import emergency_response from "../../../public/Emergency-response.jpg";
import daily from "../../../public/24-7.png";
import group from "../../../public/multiple-users-silhouette.png";
import danger from "../../../public/danger.png";
import location from "../../../public/location1.png";
import eco from "../../../public/environmental-protection.png";
import secure from "../../../public/verified.png";
import about_us from "../../../public/Emergency Response Opt.webp";
import image from "../../../public/About-us22.jpg";

const Cards_Emergency = () => {
  return (
    <div
      data-theme="light"
      className="flex flex-col justify-center items-center overflow-x-hidden"
    >
      <div className="flex w-full h-[55vh]">
        {/* Left Section - Image */}
        <div className="flex justify-center items-center w-1/2">
          <img
            src={emergency_response.src}
            alt="service"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Section - Divided into Two */}
        <div className="flex flex-col w-1/2">
          <div className="bg-[#242323] flex flex-col justify-center items-start pl-10 pr-10 h-1/4">
            <p className="text-[#f1f1f1]">
              We are committed to ensuring the safety, security, and
              environmental protection of your yacht also with our emergency
              response program and services.
            </p>
          </div>
          {/* Upper Half - White */}
          <div className="flex flex-col justify-center items-start pl-10 pr-10 h-1/2 bg-white">
            <div className=" w-full ">
              <ul className=" pl-6 text-[#242323] flex flex-col justify-center items-center">
                <li className="flex">
                  <img src={daily.src} alt="" width="50vw" className=" mr-6"/>
                  24/7 Emergency Hotline - Our team is available around the
                  clock to provide immediate support and guidance in case of an
                  emergency.
                </li>
                <br />
                <br />
                <br />
                <li className="mt-2 flex">
                  <img src={group.src} alt="" width="50vw" className=" mr-6"/>
                  On-Site Response Teams - We have highly trained and
                  experienced personnel ready to deploy to the scene of an
                  incident and provide on-site assistance.
                </li>
              </ul>
            </div>
          </div>
          {/* Lower Half - Black */}
        </div>
      </div>

      <div className="bg-[#f1f1f1] w-full h-[55vh] flex">
        <div className="flex flex-col justify-center items-start pl-36 w-1/2">
          <ul className="pr-16 text-[#242323] flex flex-col justify-center items-center">
            <li className=" flex items-center justify-center text-right">Technical Breakdown Support - Our expertise extends to addressing immediate non-vital issues, such as technical breakdowns, to reinstate vessel operations promptly. <img src={danger.src} alt="" width="55vh" className=" ml-6"/></li>
            <br />
            <br />
            <br />
            <li className=" flex text-right">Coordination with Local Authorities - Working closely with local authorities and Administrations to ensure a coordinated and effective response to any emergency situation. <img src={location.src} alt="" width="55vh" className=" ml-6"/></li>
            <br />
            <br />
            <br />
            <li className=" flex text-right">Environmental Protection: Our services include strategies to minimize environmental impact and comply with all relevant regulations. <img src={eco.src} alt="" width="55vh" className=" ml-6"/></li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={about_us.src}
            alt="references"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" bg-[#242323] w-screen h-36  flex justify-center items-center">
        <p className=" text-slate-200 max-w-lg text-right">Safety and Compliance: We prioritize safety and ensure compliance with industry regulations to mitigate risks and protect personnel and assets.</p>
        <img src={secure.src} alt="" width="65vw" className=" ml-6 "/>
      </div>
    </div>
  );
};

export default Cards_Emergency;
