import React from "react";
import Navbar from "@/app/components/Navbar/page";
import Cards_Emergency from "@/app/components/card-emergency/page";
import Footer from "@/app/components/footer/page";

const Emergency_Response = () => {
  return (
    <div data-theme="light">
      <div className="relative bg-[#242323] h-[60vh]">
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-center bg-cover">
          {/* <h1 className=" text-3xl">Services</h1> */}
          <div className="w-full absolute top-0">
            <Navbar />
          </div>
          <div className="flex flex-col justify-center items-start pl-10 pr-10 h-1/4">
            <p className="text-slate-200 max-w-xl text-justify text-xl">
              We are committed to ensuring the safety, security, and
              environmental protection of your Yacht also with our emergency
              response program and services. These services provide crucial
              support in various emergency scenarios, helping to protect lives,
              vessels, and the marine environment.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Cards_Emergency />
        <Footer />
      </div>
    </div>
  );
};

export default Emergency_Response;
