import React from "react";
import emergency_response from "../../../public/Emergency-response.jpg";
import daily from "../../../public/24-7.png";
import group from "../../../public/multiple-users-silhouette.png";
import danger from "../../../public/danger.png";
import location from "../../../public/location1.png";
import eco from "../../../public/environmental-protection.png";
import secure from "../../../public/secure-shield.png";
import about_us from "../../../public/Emergency Response Opt.webp";

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
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Right Section - Divided into Two */}
        <div className="flex flex-col justify-center items-center text-justify w-1/2">
          {/* Upper Half - White */}
          <div className="flex flex-col justify-center items-start pl-10 pr-10 h-1/2 bg-white">
            <div className=" w-full ">
              <ul className=" pl-6 text-[#242323] flex flex-col justify-center items-center">
                <li className="flex">
                  <img
                    src={daily.src}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className=" mr-6"
                  />
                  24/7 Emergency Hotline - Our team is available around the
                  clock to provide immediate support and guidance in case of an
                  emergency.
                </li>
                <li className="mt-16 flex">
                  <img
                    src={group.src}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className=" mr-6"
                  />
                  On-Site Response Teams - We have highly trained and
                  experienced personnel ready to deploy to the scene of an
                  incident and provide on-site assistance.
                </li>
                <li className="mt-16 flex">
                  <img
                    src={location.src}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className=" mr-6"
                  />
                  Coordination with Local Authorities - Working closely with
                  local authorities and Administrations to ensure a coordinated
                  and effective response to any emergency situation.
                </li>
              </ul>
            </div>
          </div>
          {/* Lower Half - Black */}
        </div>
      </div>

      <div className="w-full h-[55vh] flex">
        <div className="flex flex-col justify-center items-start text-justify pl-36 w-1/2">
          <ul className="pr-16 text-[#242323] flex flex-col justify-center items-center">
            <li className=" flex items-center justify-center ">
              <img
                src={danger.src}
                alt=""
                style={{ width: "50px", height: "50px" }}
                className=" mr-6"
              />
              Technical Breakdown Support - Our expertise extends to addressing
              immediate non-vital issues, such as technical breakdowns, to
              reinstate vessel operations promptly.{" "}
            </li>
            <li className=" mt-12 flex">
              <img
                src={eco.src}
                alt=""
                style={{ width: "50px", height: "50px" }}
                className=" mr-6"
              />
              Environmental Protection: Our services include strategies to
              minimize environmental impact and comply with all relevant
              regulations.{" "}
            </li>
            <li className=" mt-12 flex">
              <img
                src={secure.src}
                alt=""
                style={{ width: "50px", height: "50px" }}
                className=" mr-6"
              />
              Safety and Compliance: We prioritize safety and ensure compliance
              with industry regulations to mitigate risks and protect personnel
              and assets.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={about_us.src}
            alt="references"
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards_Emergency;
