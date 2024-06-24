import React from "react";
import Link from "next/link";
import services from "../../../public/Technical_Services_page1.jpg";
import references from "../../../public/Technical_Services_page2.jpg";
import emergency_response from "../../../public/Technical_Services_page3.jpg";
import about_us from "../../../public/Technical_Services_page4.jpg";
import photo from "../../../public/1_Operational_.jpg";

const Cards_Services = () => {
  return (
    <div
      data-theme="light"
      className="flex flex-col justify-center items-center overflow-x-hidden"
    >
      <div className="bg-[#242323] w-11/12 h-[55vh] flex mb-8 mt-16 rounded-2xl">
        <div className="flex justify-center items-center w-1/2">
          <img
            src={photo.src}
            alt="references"
            className="w-3/4 mr-44 h-full object-cover rounded-s-2xl"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center items-start mr-16 w-1/2">
          <h1 className="text-4xl text-[#f1f1f1] text-left font-bold border-b-[2px] border-[#f1f1f1] pb-4 uppercase w-full">
            Organizational & Operational support
          </h1>
          <p className="text-sm text-left max-w-96 text-[#f1f1f1] flex justify-center items-center pt-6">
          The careful planning, effective communication and a well-organized approach play a crucial role in ensuring that the refit process is well-managed, according to the Owner&apos;s expectations and delivered on time.
          </p>
          <Link href="/pages/Operational">
            <button className="btn bg-[#f1f1f1] text-[#242323] px-16 rounded-full mt-8 uppercase hover:bg-[#afafaf]">
             More
           </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#f1f1f1] w-11/12 h-[55vh] flex my-8 rounded-2xl">
        <div className="flex justify-center items-center w-1/2">
          <img
            src={services.src}
            className="w-3/4 mr-44 h-full object-cover rounded-s-2xl"
            alt="references"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center items-start mr-16 w-1/2">
          <h1 className="text-4xl text-[#242323] text-left font-bold border-b-[2px] border-[#242323] pb-4 uppercase w-11/12">
            Technical and Engineering Services
          </h1>
          <p className="text-sm text-left max-w-96 text-[#333] flex justify-center items-center pt-6">
            The technical services and expertise are essential for the
            successful execution of any yacht refit project. Each area requires
            specialized knowledge and experience to ensure that the refit meets
            the highest standards of quality, safety, and innovation. Engaging
            our team with diverse technical capabilities and a track record of
            successful yacht refit projects can help ensure the project&apos;s
            success.
          </p>
          <button className="btn bg-[#333] text-slate-200 px-16 rounded-full mt-8 uppercase hover:bg-[#4b4b4b]">
            More
          </button>
        </div>
      </div>

      <div className="bg-[#242323] w-11/12 h-[55vh] flex mb-8 mt-16 rounded-2xl">
        <div className="flex justify-center items-center w-1/2">
          <img
            src={references.src}
            alt="references"
            className="w-3/4 mr-44 h-full object-cover rounded-s-2xl"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center items-start mr-16 w-1/2">
          <h1 className="text-4xl text-[#f1f1f1] text-left font-bold border-b-[2px] border-[#f1f1f1] pb-4 uppercase w-10/12">
            Regulatory Compliance & Sustainability Upgrades
          </h1>
          <p className="text-sm text-left max-w-96 text-[#f1f1f1] flex justify-center items-center pt-6">
            Ensuring a yacht meets all regulatory requirements and incorporates
            sustainability practices is crucial for its operation and
            environmental impact. We have a deep expertise in regulatory
            compliance, classification society rules, and flag state
            requirements to ensure the yacht meets all safety and operational
            standards.
          </p>
          <button className="btn bg-[#f1f1f1] text-[#242323] px-16 rounded-full mt-8 uppercase hover:bg-[#afafaf]">
            More
          </button>
        </div>
      </div>

      <div className="bg-[#f1f1f1] w-11/12 h-[55vh] flex mt-8 mb-16 rounded-2xl">
        <div className="flex justify-center items-center w-1/2">
          <img
            src={emergency_response.src}
            alt="about"
            className="w-3/4 mr-44 h-full object-cover rounded-s-2xl"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center items-start mr-16 w-1/2">
          <h1 className="text-4xl text-[#242323] text-left font-bold border-b-[2px] border-[#242323] pb-4 uppercase w-8/12">
            Financial & Legal Support
          </h1>
          <p className="text-sm text-left max-w-96 text-[#333] flex justify-center items-center pt-6">
          Providng financial and legal services for yachts involves a range of specialized offerings tailored to the unique needs of yacht owners and operators. These essential services ensure that the yacht is not only legally compliant but also financially optimized.
          </p>
          <button className="btn bg-[#333] text-slate-200 px-16 rounded-full mt-8 uppercase hover:bg-[#4b4b4b]">
            More
          </button>
        </div>
      </div>

      <div className="bg-[#242323] w-11/12 h-[55vh] flex mb-28 mt-16 rounded-2xl">
        <div className="flex justify-center items-center w-1/2">
          <img
            src={about_us.src}
            alt="references"
            className="w-3/4 mr-44 h-full object-cover rounded-s-2xl"
            style={{ filter: "brightness(0.7)" }}
          />
        </div>
        <div className="flex flex-col justify-center items-start mr-16 w-1/2">
          <h1 className="text-4xl text-[#f1f1f1] text-left font-bold border-b-[2px] border-[#f1f1f1] pb-4 uppercase w-11/12">
           IMS Support & Maintenance
          </h1>
          <p className="text-sm text-left max-w-96 text-[#f1f1f1] flex justify-center items-center pt-6">
            
          ISM (International Safety Management) support services for yachts are crucial for ensuring safety, environmental protection, and operational efficiency. The ISM Code requires Companies and their vessels to implement a Safety Management System (SMS) and we at VEGA assist them with the best implementation practices.
          </p>
          <button className="btn bg-[#f1f1f1] text-[#242323] px-16 rounded-full mt-8 uppercase hover:bg-[#afafaf]">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards_Services;
