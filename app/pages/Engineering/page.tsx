// components/Service1.jsx
import React from "react";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service2 = () => {
  return (
    <div className=" bg-dark min-h-screen">
      <div>
        <Navbar />
      </div>
      <div
        className="bg-center bg-cover mt-3"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22, 26, 44, 0.8), rgba(50, 58, 88, 0.7), rgba(74, 85, 125, 0.6), rgba(118, 118, 118, 0.5)), url(${services1.src})`,
          height: "55vh", // Set the height to half the viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
      </div>

      <div className=" py-16 flex flex-col justify-center items-center">
        <h1 className="  text-3xl pb-2 uppercase text-slate-200">
          TECHNICAL AND ENGINEERING SERVICES
        </h1>
        <div className=" w-[35vw] border-b-2 border-slate-200"></div>
        <p className=" mt-16 text-justify max-w-xl text-slate-200">
          The technical services and expertise are essential for the successful
          execution of any yacht refit project. Each area requires specialized
          knowledge and experience to ensure that the refit meets the highest
          standards of quality, safety, and innovation. Engaging our team with
          diverse technical capabilities and a track record of successful yacht
          refit projects can help ensure the project&apos;s success.
        </p>

        <div className=" flex justify-center items-start gap-36">
          <ul className=" mt-24 max-w-xl">
            <li className=" text-slate-200">
              • Seasonal Maintenance & Post-Refit Support
              <ul className=" ml-10 mb-10">
                &nbsp;
                <li className=" text-slate-200">o Warranty and Guarantee Services</li>
                <li className=" text-slate-200">o Sea Trials & Follow-up Inspections</li>
                <li className=" text-slate-200">o Regular Maintenance Programs</li>
              </ul>
            </li>

            <br />

            <li className=" text-slate-200">
              • Structural Modification
              <ul className=" ml-10 mb-10">
                &nbsp;
                <li className=" text-slate-200">o Hull Extensions and Modifications </li>
                <li className=" text-slate-200">o Structural Reinforcements </li>
                <li className=" text-slate-200">o Superstructure Modifications</li>
              </ul>
            </li>

            <br />

            <li className=" text-slate-200">
              • Mechanical and Electrical Upgrades
              <ul className=" ml-10 mb-10">
                &nbsp;
                <li className=" text-slate-200">o Engine and Generator Overhauls</li>
                <li className=" text-slate-200">o HVAC System Upgrades</li>
                <li className=" text-slate-200">o Electrical System Rewiring and Upgrades</li>
                <li className=" text-slate-200">o Piping System Enhancements</li>
                <li className=" text-slate-200">
                  o Underwater & Auxiliary Machineries Overhauls & Upgrades
                </li>
                <li className=" text-slate-200">o Advanced Navigation Systems and Electronics</li>
              </ul>
            </li>

            <br />

            <li className=" text-slate-200">
              • Exterior Renovation
              <ul className=" ml-10 mb-10">
                &nbsp;
                <li className=" text-slate-200">o Teak Replacement and Repairs</li>
                <li className=" text-slate-200">o Paint and Coating Application</li>
                <li className=" text-slate-200">o Polishing and Brightwork</li>
                <li className=" text-slate-200">o Custom Metal Fabrication</li>
                <li className=" text-slate-200">o Underwater Hull Maintenance</li>
              </ul>
            </li>
          </ul>

          <ul className=" mt-24 max-w-xl ">
            <li className=" text-slate-200">
              • Interior Design Enhancement and Layout Changes
              <ul className=" ml-10 mb-10">
                &nbsp;
                <li className=" text-slate-200">o High-end Carpentry and Joinery</li>
                <li className=" text-slate-200">o Soft Furnishings and Upholstery</li>
                <li className=" text-slate-200">o Lighting Design and Installation</li>
                <li className=" text-slate-200">o High-End Entertainment Systems</li>
              </ul>
            </li>

            <br />

            <li className=" text-slate-200">
              • Technological Enhancements
              <ul className=" ml-10 mb-10">
                &nbsp;
                <li className=" text-slate-200">o Integration of Smart Yacht Technology</li>
                <li className=" text-slate-200">o Advanced Security Systems</li>
                <li className=" text-slate-200">o High-speed Internet and Communication Systems</li>
                <li className=" text-slate-200">o Audio-Visual Systems</li>
              </ul>
            </li>

            <br />

            <li className=" text-slate-200">
              • Additions
              <ul className=" ml-10 mb-10">
                &nbsp;
                <li className=" text-slate-200">o Pool and Spa Installation</li>
                <li className=" text-slate-200">o Custom Bars and Lounges</li>
                <li className=" text-slate-200">o Gym and Wellness Areas</li>
                <li className=" text-slate-200">o Entertainment Zones </li>
                <li className=" text-slate-200">o Outdoor Living Spaces and Furniture</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Service2;
