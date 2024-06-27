import React from "react";
import Navbar from "@/app/components/Navbar/page";
import Cards_Emergency from "@/app/components/card-emergency/page";
import Footer from "@/app/components/footer/page";

const Emergency_Response = () => {
  return (
    <div data-theme="light">
      <div className="relative bg-[#242323] h-auto min-h-[60vh] flex flex-col justify-center items-center">
        <div className="w-full absolute top-0">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start p-10 max-w-xl text-justify lg:text-left">
          <p className="text-slate-200 text-xl">
            We are committed to ensuring the safety, security, and
            environmental protection of your Yacht also with our emergency
            response program and services. These services provide crucial
            support in various emergency scenarios, helping to protect lives,
            vessels, and the marine environment.
          </p>
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
