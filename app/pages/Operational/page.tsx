// components/Service1.jsx
import React from "react";
import services1 from "../../../public/1_Operational_.jpg";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/footer/page";

const Service1 = () => {
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
        <h1 className="  text-3xl pb-2 uppercase text-slate-200">
          Organizational & Operational support
        </h1>
        <div className=" w-[35vw] border-b-2 border-slate-200"></div>
        <p className=" mt-16 text-justify max-w-xl text-slate-200">
          The careful planning, effective communication br and a well-organized
          approach play a crucial role in ensuring that the refit process is
          well-managed, according to the Owner’s expectations and delivered on
          time.
        </p>

        <div className=" flex justify-center items-start gap-36">
          <ul className=" mt-24 max-w-xl">
            <li className=" text-slate-200">
              • Defining specifications, developing a comprehensive refit plan
              that outlines all aspects of the project, Owner’s preferences,
              along with detailed schedule, worklist, timeline and budget.
            </li>
            <br />
            <li className=" text-slate-200">
              • Building the team of highly qualified professionals and
              maintaining open lines of communication with the project team.{" "}
            </li>
            <br />
            <li className=" text-slate-200">
              • Documentation of refit activities, cost control, compliance
              documentation, manuals.
            </li>
            <br />
            <li className=" text-slate-200">
              • Implementation of quality control measures at various stages and
              conduction of regular inspections to ensure work meets
              specifications.
            </li>
          </ul>
          <ul className=" mt-24 max-w-xl ">
            <li className=" text-slate-200">
              • Monitoring the progress, quality assurance, overseeing the
              logistics and the supply chain, procurement of materials and
              equipment.
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
              • Meticulous consistency planning and execution of every activity,
              allowing to better anticipate any possible deviation and implement
              immediate corrective actions to reach the deadline.
            </li>
          </ul>
        </div>
        <p className=" mt-20 text-justify max-w-xl text-slate-200">
          Regular communication, attention to detail, and adaptability to
          changing circumstances are key factors in effective planning and
          organization.
        </p>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Service1;
