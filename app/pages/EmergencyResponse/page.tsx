import React from "react";
import Navbar from "@/app/components/Navbar/page";
import Cards_Emergency from "@/app/components/card-emergency/page";
import Footer from "@/app/components/footer/page";

const Emergency_Response = () => {
  return (
    <div data-theme="light">
      <div className="relative bg-[#242323] h-96">
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-center bg-cover">
          {/* <h1 className=" text-3xl">Services</h1> */}
          <div className="w-full absolute top-0">
            <Navbar />
          </div>

          <h1 className=" text-5xl uppercase text-slate-200 mt-16 font-black">
            Emergency Response
          </h1>
        </div>
      </div>

      <div>
        <Cards_Emergency />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Emergency_Response;
