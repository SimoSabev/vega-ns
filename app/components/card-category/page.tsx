// components/Cards_Services.jsx
import React from "react";
import Link from "next/link";
import services from "../../../public/Technical_Services_page1.jpg";
import references from "../../../public/Technical_Services_page2.jpg";
import emergency_response from "../../../public/Technical_Services_page3.jpg";
import about_us from "../../../public/Technical_Services_page4.jpg";
import photo from "../../../public/1_Operational_.jpg";

const Cards_Services = () => {
  return (
    <div data-theme="light" className="flex flex-col justify-center items-center overflow-x-hidden space-y-8 mt-8">
      {/* Organizational & Operational Support Card */}
      <div className="bg-[#242323] w-11/12 sm:w-8/12 md:w-11/12 lg:w-10/12 xl:w-11/12 h-[40vh] sm:h-[55vh] flex flex-col sm:flex-row rounded-2xl shadow-lg">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={photo.src}
            alt="Organizational & Operational Support"
            className="w-full h-auto sm:h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center items-center p-6 w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl text-[#f1f1f1] font-bold border-b-2 border-[#f1f1f1] pb-2 uppercase">
            Organizational & Operational Support
          </h1>
          <p className="text-sm sm:text-base text-[#f1f1f1]">
            The careful planning, effective communication and a well-organized approach play a crucial role in ensuring that the refit process is well-managed, according to the Owner&apos;s expectations and delivered on time.
          </p>
          <Link href="/pages/Operational">
            <button className="btn bg-[#f1f1f1] text-[#242323] px-8 sm:px-16 rounded-full uppercase hover:bg-[#afafaf]">
              More
            </button>
          </Link>
        </div>
      </div>

      {/* Technical and Engineering Services Card */}
      <div className="bg-[#f1f1f1] w-11/12 sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-11/12 h-[40vh] sm:h-[55vh] flex flex-col md:flex-row rounded-2xl shadow-lg">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={services.src}
            alt="Technical and Engineering Services"
            className="w-full h-auto sm:h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center  items-center p-6 w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl text-[#242323] font-bold border-b-2 border-[#242323] pb-2 uppercase">
            Technical and Engineering Services
          </h1>
          <p className="text-sm sm:text-base text-[#333]">
            The technical services and expertise are essential for the successful execution of any yacht refit project. Each area requires specialized knowledge and experience to ensure that the refit meets the highest standards of quality, safety, and innovation. Engaging our team with diverse technical capabilities and a track record of successful yacht refit projects can help ensure the project&apos;s success.
          </p>
          <Link href="#">
            <button className="btn bg-[#333] text-slate-200 px-8 sm:px-16 rounded-full uppercase hover:bg-[#4b4b4b]">
              More
            </button>
          </Link>
        </div>
      </div>

      {/* Regulatory Compliance & Sustainability Upgrades Card */}
      <div className="bg-[#242323] w-11/12 sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-11/12 h-[40vh] sm:h-[55vh] flex flex-col md:flex-row rounded-2xl shadow-lg">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={references.src}
            alt="Regulatory Compliance & Sustainability Upgrades"
            className="w-full h-auto sm:h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center  items-center p-6 w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl text-[#f1f1f1] font-bold border-b-2 border-[#f1f1f1] pb-2 uppercase">
            Regulatory Compliance & Sustainability Upgrades
          </h1>
          <p className="text-sm sm:text-base text-[#f1f1f1]">
            Ensuring a yacht meets all regulatory requirements and incorporates sustainability practices is crucial for its operation and environmental impact. We have a deep expertise in regulatory compliance, classification society rules, and flag state requirements to ensure the yacht meets all safety and operational standards.
          </p>
          <Link href="#">
            <button className="btn bg-[#f1f1f1] text-[#242323] px-8 sm:px-16 rounded-full uppercase hover:bg-[#afafaf]">
              More
            </button>
          </Link>
        </div>
      </div>

      {/* Financial & Legal Support Card */}
      <div className="bg-[#f1f1f1] w-11/12 sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-11/12 h-[40vh] sm:h-[55vh] flex flex-col md:flex-row rounded-2xl shadow-lg">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={emergency_response.src}
            alt="Financial & Legal Support"
            className="w-full h-auto sm:h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center  items-center p-6 w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl text-[#242323] font-bold border-b-2 border-[#242323] pb-2 uppercase">
            Financial & Legal Support
          </h1>
          <p className="text-sm sm:text-base text-[#333]">
            Providing financial and legal services for yachts involves a range of specialized offerings tailored to the unique needs of yacht owners and operators. These essential services ensure that the yacht is not only legally compliant but also financially optimized.
          </p>
          <Link href="#">
            <button className="btn bg-[#333] text-slate-200 px-8 sm:px-16 rounded-full uppercase hover:bg-[#4b4b4b]">
              More
            </button>
          </Link>
        </div>
      </div>

      {/* IMS Support & Maintenance Card */}
      <div className="bg-[#242323] w-11/12 sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-11/12 h-[40vh] sm:h-[55vh] flex flex-col md:flex-row rounded-2xl shadow-lg mb-8">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img
            src={about_us.src}
            alt="IMS Support & Maintenance"
            className="w-full h-auto sm:h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center  items-center p-6 w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl text-[#f1f1f1] font-bold border-b-2 border-[#f1f1f1] pb-2 uppercase">
            IMS Support & Maintenance
          </h1>
          <p className="text-sm sm:text-base text-[#f1f1f1]">
            ISM (International Safety Management) support services for yachts are crucial for ensuring safety, environmental protection, and operational efficiency. The ISM Code requires Companies and their vessels to implement a Safety Management System (SMS) and we at VEGA assist them with the best implementation practices.
          </p>
          <Link href="#">
            <button className="btn bg-[#f1f1f1] text-[#242323] px-8 sm:px-16 rounded-full uppercase hover:bg-[#afafaf]">
              More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards_Services;
