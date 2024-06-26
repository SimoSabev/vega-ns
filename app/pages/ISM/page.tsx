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
        <h1 className="  text-3xl pb-2 uppercase text-slate-200 ">
          ISM Support & Maintenance Database Implementation
        </h1>
        <div className=" w-[58vw] border-b-2 border-slate-200"></div>
        <p className=" mt-16 text-justify max-w-xl text-slate-200">
          ISM (International Safety Management) support services for yachts are
          crucial for ensuring safety, environmental protection, and operational
          efficiency. The ISM Code requires Companies and their vessels to
          implement a Safety Management System (SMS) and we at VEGA assist them
          with the best implementation practices.
        </p>

        <div className=" flex justify-center items-start gap-36">
          <ul className=" mt-24 max-w-xl">
            <li className=" font-bold text-slate-200">
              • ISM Support
              <ul className="mt-3">
                <li className=" text-slate-200">
                  &nbsp;&nbsp;&nbsp; o ISM implementation:{" "}
                </li>
              </ul>
              <p className=" font-normal text-slate-200"></p>
              <ul className=" list-square">
                <br />
                <li className=" text-justify ml-12 text-slate-200">
                   Initial Assessment: Identifying gaps
                  between current practices and ISM Code
                  requirements.
                </li>
                <br />
                <li className=" text-justify ml-12 text-slate-200">
                   Develop and Document SMS: Creation of the
                  SMS documentation,including the Safety
                  Management Manual.
                </li>
                <br />
                <li className=" text-justify ml-12 text-slate-200">
                  Training and Awareness: Training crew and
                  shore-based personnel onthe ISM Code
                  requirements and the SMS.
                </li>
                <br />
                <li className=" text-justify ml-12 text-slate-200">
                  Implement Procedures: Putting the SMS into
                  practice on board ships and within the
                  company.
                </li>{" "}
                <br />
              </ul>
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • ISM audits We can assist with mandatory audits:
                <ul className=" list-square">
                  <li className="text-justify ml-12 text-slate-200">Internal Audits: Conducting internal audits to verify
                  compliance and effectiveness.</li>
                  <li className="text-justify ml-12 text-slate-200">Corrective Actions: Addressing non-conformities and
                  areas for improvement identified during audits.</li>
                  <li className="text-justify ml-12 text-slate-200">External Audit and Certification: Undergoing external
                audits by the flag state or recognized organization to obtain
                DOC and SMC.</li>
                </ul>
                  
                  
                  
              
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Standard and Specific Operation Procedures elaboration - crucial
              on-board boats for ensuring safety, efficiency, compliance, and
              overall operational effectiveness
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Safety and Risk Management
              <p className=" font-normal text-slate-200">
                Consistent Safety Practices and Emergency Preparedness
              </p>
            </li>
          </ul>
          <ul className=" mt-24 max-w-xl ">
            <li className=" font-bold text-slate-200">
              • Operational Efficiency, Setup Books & Crew Training
              <p className=" font-normal text-slate-200">
                Streamlined Operations - leading to smoother workflows and more
                efficient use of time and resources, consistency
              </p>
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Regulatory Compliance
              <p className=" font-normal text-slate-200">
                Ensuring compliance with international maritime regulations,
                such as those outlined in the International Safety Management
                (ISM) Code.
              </p>
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Certification and Inspection
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Quality control and continuous improvement
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Environment protection & pollution prevention
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Sustainable Practices
              <p className=" font-normal text-slate-200">
                Implementing SOPs for energy management, emissions control, and
                resource conservation promotes sustainable practices on board.
              </p>
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Certification and Inspection
            </li>
            <br />
            <li className=" font-bold text-slate-200">
              • Maintenance Database Implementation
              <p className=" font-normal text-slate-200">
                Implementing a Planned Maintenance System (PMS) on boats is
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
