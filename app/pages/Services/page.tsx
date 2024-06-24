import React from "react";
import Navbar from "@/app/components/Navbar/page";
import background from "../../../public/Large-yacht.jpeg";
import Cards_Category from "@/app/components/card-category/page";
import Footer from "@/app/components/footer/page";

const Services = () => {
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
        <p className="my-32 text-center text-xl p-10 rounded-3xl">
          Our serivces are specifically tailored to meet the unique needs and
          desires of each owner, enchansing the vessel’s aestetics,
          functionality and vlaue. Our ability to integrate the latest
          technology and design trends along with the highest level of
          craftmenship and attention to details, ensures your yacht is at the
          forefront of maritime excellence. The adaptability for complete
          intervention or only partial involvement along with our ability to
          attend on a short notice allows us to offer more flexibility. As an
          independent entity, we build full spectrum solutions with selected
          skilled professionals and trusted industry partners. Our team is
          comitted to deliver your project on time, on budget and according to
          your expectations.
        </p>
      </div>
      <div>
        <Cards_Category />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
