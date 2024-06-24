// components/Service1.jsx
import React from "react";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service4 = () => {
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
        <h1 className="  text-3xl pb-2 uppercase ">
          ISM Support & Maintenance Database Implementation
        </h1>
        <div className=" w-[58vw] border-b-2 border-slate-200"></div>
        <p className=" mt-16 text-justify max-w-xl">
          ISM (International Safety Management) support services for yachts are
          crucial for ensuring safety, environmental protection, and operational
          efficiency. The ISM Code requires Companies and their vessels to
          implement a Safety Management System (SMS) and we at VEGA assist them
          with the best implementation practices.
        </p>

        <div className=" flex justify-center items-start gap-36">
          <ul className=" mt-24 max-w-xl">
            <li className=" font-bold">
              • ISM Support
              <ul className="mt-3">
                <li>&nbsp;&nbsp;&nbsp; o ISM implementation: </li>
              </ul>
              <p className=" font-normal">
                <br /> &nbsp;&nbsp;&nbsp;1. Initial Assessment: Identifying gaps
                between current practices and ISM &nbsp;&nbsp;&nbsp;Code
                requirements.
                <br /> &nbsp;&nbsp;&nbsp;2. Develop and Document SMS: Creation
                of the SMS documentation, &nbsp;&nbsp;&nbsp;including the Safety
                Management Manual.
                <br /> &nbsp;&nbsp;&nbsp;3. Training and Awareness: Training
                crew and shore-based personnel on &nbsp;&nbsp;&nbsp;the ISM Code
                requirements and the SMS.
                <br /> &nbsp;&nbsp;&nbsp;4. Implement Procedures: Putting the
                SMS into practice on board ships &nbsp;&nbsp;&nbsp;and within
                the company.
              </p>
            </li>
            <br />
            <li className=" font-bold">
              • ISM audits We can assist with mandatory audits:
              <p className=" font-normal">
                <br /> • Internal Audits: Conducting internal audits to verify
                compliance and effectiveness.
                <br /> • Corrective Actions: Addressing non-conformities and
                areas for improvement identified during audits.
                <br /> • External Audit and Certification: Undergoing external
                audits by the flag state or recognized organization to obtain
                DOC and SMC.
              </p>
            </li>
            <br />
            <li className=" font-bold">
              • Standard and Specific Operation Procedures elaboration - crucial
              on-board boats for ensuring safety, efficiency, compliance, and
              overall operational effectiveness
            </li>
            <br />
            <li className=" font-bold">
              • Safety and Risk Management
              <p className=" font-normal">
                - Consistent Safety Practices and Emergency Preparedness
              </p>
            </li>
          </ul>
          <ul className=" mt-24 max-w-xl ">
            <li className=" font-bold">
              • Operational Efficiency, Setup Books & Crew Training
              <p className=" font-normal">
                - Streamlined Operations - leading to smoother workflows and
                more efficient use of time and resources, consistency
              </p>
            </li>
            <br />
            <li className=" font-bold">
              • Regulatory Compliance
              <p className=" font-normal">
                - Ensuring compliance with international maritime regulations,
                such as those outlined in the International Safety Management
                (ISM) Code.
              </p>
            </li>
            <br />
            <li className=" font-bold">• Certification and Inspection</li>
            <br />
            <li className=" font-bold">
              • Quality control and continuous improvement
            </li>
            <br />
            <li className=" font-bold">
              • Environment protection & pollution prevention
            </li>
            <br />
            <li className=" font-bold">
              • Sustainable Practices
              <p className=" font-normal">
                Implementing SOPs for energy management, emissions control, and
                resource conservation promotes sustainable practices on board.
              </p>
            </li>
            <br />
            <li className=" font-bold">• Certification and Inspection</li>
            <br />
            <li className=" font-bold">
              • Maintenance Database Implementation
              <p className=" font-normal ">
                - Implementing a Planned Maintenance System (PMS) on boats is
                essential for ensuring the proper and smooth operation of the
                vessel. It helps schedule, track, and document maintenance
                tasks, ensuring compliance with regulatory requirements fand
                extending the lifespan of the equipment.
              </p>
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

export default Service4;
