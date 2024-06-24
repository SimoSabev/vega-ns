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
          Financial & Legal Support
        </h1>
        <div className=" w-[35vw] border-b-2 border-slate-200"></div>
        <p className=" mt-16 text-justify max-w-xl">Providng financial and legal services for yachts involves a range of specialized offerings tailored to the unique needs of yacht owners and operators. These essential services ensure that the yacht is not only legally compliant but also financially optimized.</p>

        <div className=" flex justify-center items-start gap-36">
          <ul className=" mt-24 max-w-xl">
            <li className=" font-bold">
              • Budget Development and Management
              <p className=" font-normal">
                - Creating from the start a detailed project budgets that
                accurately reflect all anticipated costs and expenses, including
                direct project costs, overheads, and contingencies.
              </p>
            </li>
            <br />
            <li className=" font-bold">
              • Cost Estimation and Forecasting
              <p className=" font-normal">
                - Utilizing our historical data, judgment, and industry
                benchmarks we estimate costs for all project components and
                continuously update the cost forecasts based on actual
                expenditures and changes in project scope.
              </p>
            </li>
            <br />
            <li className=" font-bold">
              • Resource Optimization
              <p className=" font-normal">
                - Carefully manage the allocation of financial resources,
                personnel, and equipment to maximize efficiency and minimize
                waste of your project.
              </p>
            </li>
            <br />
            <li className=" font-bold">
              • Variance Analysis
              <p className=" font-normal">
                - Permanently monitor actual project costs and performance
                metrics against the budget and planned targets, identify
                variations, and investigate the reasons behind discrepancies to
                take immediate corrective actions.
              </p>
            </li>
          </ul>
          <ul className=" mt-24 max-w-xl ">
            <li className=" font-bold">
              • Cost-Effective Procurement and Vendor Management
              <p className=" font-normal">
                - Strategically source goods and services at competitive prices,
                negotiate favourable contracts, and actively manage vendor
                relationships to control procurement costs and minimize cost
                overruns.
              </p>
            </li>
            <br />
            <li className=" font-bold">
              • Change Management and Impact Analysis o Change Management and
              Impact Analysis
              <p className=" font-normal">
                - Systematically evaluate the financial implications of proposed
                changes to the project scope or schedule, and weighing these
                against the potential benefits to make informed decisions that
                minimize cost impacts.
              </p>
            </li>
            <br />
            <li className=" font-bold">
              • Continuous Monitoring and Reporting
              <p className=" font-normal">
                - We establish robust systems for ongoing monitoring of project
                financials, including regular reporting on actual costs
                incurred, budget utilization, and cost performance indicators to
                enable proactive cost control measures.
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
