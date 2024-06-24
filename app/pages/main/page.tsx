import React from "react";
import background from "../../../public/Header-image.jpg";
import Navbar from "@/app/components/Navbar/page";
import Cards_Services from "@/app/components/card-services/page";
import Footer from "@/app/components/footer/page";
import VEGA from "../../../public/Vega-logo.png";

const Main = () => {
  return (
    <div data-theme="light" className=" ">
      <div
        className="hero parallax relative flex flex-col justify-center items-center "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22, 26, 44, 0.8), rgba(50, 58, 88, 0.7), rgba(74, 85, 125, 0.6), rgba(118, 118, 118, 0.5)), url(${background.src})`,
          height: "50vh", // Set the height to half the viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="w-full absolute top-0">
          <Navbar />
        </div>

        <img src={VEGA.src} width="500vw" alt="VEGA" />
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="my-32 text-center text-xl p-10 rounded-3xl">
          With over 20 years of experience and a passion for excellence, we
          bring solid knowledge and offer a wide range of solutions to enhance
          your yacht&apos;s performance, appearance, and functionality. We specialize
          in comprehensive super yacht and ship revitalizing, modernizing,
          customizing, and upgrading solutions, ensuring we cover all aspects of
          the entire refit project, from the initial study and assessment
          throughout its completion and delivery.
        </p>
      </div>
      <div className=" ">
        <Cards_Services/>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
