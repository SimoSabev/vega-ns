// components/Service1.jsx
import React from "react";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service3 = () => {
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

      <div className=" py-16 flex flex-col justify-center items-center text-justify">
        <h1 className="  text-3xl pb-2 uppercase text-slate-200 border-b-2 border-slate-200">
          Regulatory Compliance & Sustainability Upgrades
        </h1>
        <p className=" mt-16 text-justify max-w-xl text-slate-200">
          Ensuring a yacht meets all regulatory requirements and incorporates
          sustainability practices is crucial for its operation and
          environmental impact. We have a deep expertise in regulatory
          compliance, classification society rules, and flag state requirements
          to ensure the yacht meets all safety and operational standards.
        </p>

        <div className=" flex justify-center items-start gap-36">
          <ul className=" mt-24 max-w-xl">
            <li className=" text-slate-200">
              • Ensuring Compliance with International Maritime Regulations –
              Managing and updating all necessaty paperwork an certifications
            </li>
            <br />
            <li className=" text-slate-200">• Class Society Approvals</li>
            <br />
            <li className=" text-slate-200">
              • Flag State Inspections and Certifications
            </li>
            <br />
            <li className=" text-slate-200">
              • Safety Equipment Servicing and Certification – Implementing
              safety systems and protocos to meet or exceed international
              maritime safety standards, inclduing fire safety, life-saving
              appliances, emergency response procedures.
            </li>
          </ul>
          <ul className=" mt-24 max-w-xl ">
            <li className=" text-slate-200">
              • Fuel Efficiency Improvements – Implementing compliant fuel
              systems
            </li>
            <br />
            <li className=" text-slate-200">
              • Fostering direct communication and transparency, reporting,
              liaising effectively with all the parties involved, obtaining
              rapid responses, involving, and providing regular progress updates
              to the Owner’s team.
            </li>
            <br />
            <li className=" text-slate-200">
              • Energy Efficiency – Upgrading to more efficient engines,
              propulsion systems, and generators to reduce fuel consumption and
              emissions
            </li>
            <br />
            <li className=" text-slate-200">
              <li className=" text-slate-200">
                • Eco-friendly Materials and Practices – Including waste
                management, emissions control, ballast water treatment
              </li>
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

export default Service3;
