import React from "react";
import Navbar from "@/app/components/Navbar/page";
import background from "../../../public/Refre.jpg";
import Cards_Services1 from "@/app/components/card-references/page";
import Footer from "@/app/components/footer/page";

const References = () => {
  return (
    <div data-theme="light">
      <div className="relative h-96">
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(22, 26, 44, 0.8), rgba(50, 58, 88, 0.7), rgba(74, 85, 125, 0.6), rgba(118, 118, 118, 0.5)), url(${background.src})`,
          }}
        >
          {/* <h1 className=" text-3xl">Services</h1> */}
          <div className="w-full absolute top-0">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="my-32 text-center text-xl bg-[#242323] text-slate-200 p-10 rounded-3xl">
          Selecting a trusted and reliable partner for your superyacht refit is
          crucial for ensuring high-quality work, compliance with regulations,
          and adherence to timelines and budgets. With a proven history of
          multiple successfully completed projects, we pride ourselves of our
          capability and reliability.
        </p>
      </div>
      <div>
        <Cards_Services1 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default References;
