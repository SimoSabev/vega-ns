// components/Service1.jsx
import React from "react";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service2 = () => {
  return (
    <div className="bg-dark min-h-screen">
      <div className="mb-10">
        <Navbar />
      </div>
      <div
        className="bg-center bg-cover mt-3"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22, 26, 44, 0.8), rgba(50, 58, 88, 0.7), rgba(74, 85, 125, 0.6), rgba(118, 118, 118, 0.5)), url(${services1.src})`,
          height: "55vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
      </div>

      <div className="py-8 px-4 sm:py-16 sm:px-8 flex flex-col justify-center items-center sm:text-left text-justify">
        <h1 className="text-2xl sm:text-3xl pb-2 uppercase text-slate-200 border-b-2 border-slate-200">
          TECHNICAL AND ENGINEERING SERVICES
        </h1>

        <p className="mt-8 sm:mt-16 text-justify max-w-xl text-slate-200">
          The technical services and expertise are essential for the successful
          execution of any yacht refit project. Each area requires specialized
          knowledge and experience to ensure that the refit meets the highest
          standards of quality, safety, and innovation. Engaging our team with
          diverse technical capabilities and a track record of successful yacht
          refit projects can help ensure the project&apos;s success.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-36 mt-16">
          <ul className="mt-8 sm:mt-24 max-w-xl">
            <li className="text-slate-200">
              • Seasonal Maintenance & Post-Refit Support
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  Warranty and Guarantee Services
                </li>
                <li className="text-slate-200">
                  Sea Trials & Follow-up Inspections
                </li>
                <li className="text-slate-200">Regular Maintenance Programs</li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Structural Modification
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  Hull Extensions and Modifications
                </li>
                <li className="text-slate-200">Structural Reinforcements</li>
                <li className="text-slate-200">Superstructure Modifications</li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Mechanical and Electrical Upgrades
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  Engine and Generator Overhauls
                </li>
                <li className="text-slate-200">HVAC System Upgrades</li>
                <li className="text-slate-200">
                  Electrical System Rewiring and Upgrades
                </li>
                <li className="text-slate-200">Piping System Enhancements</li>
                <li className="text-slate-200">
                  Underwater & Auxiliary Machineries Overhauls & Upgrades
                </li>
                <li className="text-slate-200">
                  Advanced Navigation Systems and Electronics
                </li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Exterior Renovation
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">Teak Replacement and Repairs</li>
                <li className="text-slate-200">
                  Paint and Coating Application
                </li>
                <li className="text-slate-200">Polishing and Brightwork</li>
                <li className="text-slate-200">Custom Metal Fabrication</li>
                <li className="text-slate-200">Underwater Hull Maintenance</li>
              </ul>
            </li>
          </ul>

          <ul className="mt-8 sm:mt-24 max-w-xl">
            <li className="text-slate-200">
              • Interior Design Enhancement and Layout Changes
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  High-end Carpentry and Joinery
                </li>
                <li className="text-slate-200">
                  Soft Furnishings and Upholstery
                </li>
                <li className="text-slate-200">
                  Lighting Design and Installation
                </li>
                <li className="text-slate-200">
                  High-End Entertainment Systems
                </li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Technological Enhancements
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">
                  Integration of Smart Yacht Technology
                </li>
                <li className="text-slate-200">Advanced Security Systems</li>
                <li className="text-slate-200">
                  High-speed Internet and Communication Systems
                </li>
                <li className="text-slate-200">Audio-Visual Systems</li>
              </ul>
            </li>

            <li className="text-slate-200">
              • Additions
              <ul className="ml-6 mb-6 list-disc list-inside">
                <li className="text-slate-200">Pool and Spa Installation</li>
                <li className="text-slate-200">Custom Bars and Lounges</li>
                <li className="text-slate-200">Gym and Wellness Areas</li>
                <li className="text-slate-200">Entertainment Zones</li>
                <li className="text-slate-200">
                  Outdoor Living Spaces and Furniture
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service2;
