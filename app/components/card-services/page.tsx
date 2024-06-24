import React from "react";
import Link from "next/link";
import services from "../../../public/Services1.jpg";
import references from "../../../public/References.jpg";
import emergency_response from "../../../public/Emergency-response.jpg";
import about_us from "../../../public/About-us.jpg";

const Cards_Services = () => {
  return (
    <div
      data-theme="light"
      className="flex flex-col justify-center items-center overflow-x-hidden"
    >
      <div className="bg-[#242323] w-full h-[55vh] flex">
        <div className="flex justify-center items-center w-1/2">
          <img
            src={services.src}
            alt="service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start pl-40 mr-10 w-1/2">
          <h1 className="text-5xl text-[#f1f1f1] font-bold border-b-[2.7px] border-[#f1f1f1] pb-4 px-6">
            SERVICES
          </h1>
          <p className="text-sm text-justify text-[#f1f1f1] flex justify-center items-center pt-6">
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
          <Link href="/pages/Services">
            <button className="btn bg-[#f1f1f1] text-[#242323] px-16 rounded-full mt-8 uppercase hover:bg-[#b6b6b6]">
              More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#f1f1f1] w-full h-[55vh] mr-11 flex">
        <div className="flex flex-col justify-center items-start pl-36 w-1/2">
          <h1 className="text-5xl text-[#333] font-bold border-b-[2.7px] border-[#333] pb-4 px-6">
            REFERENCES
          </h1>
          <p className="text-sm text-left max-w-96 text-[#333] flex justify-center items-center pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            faucibus libero ut augue auctor efficitur. Cras ultricies tellus
            est, id pellentesque purus eleifend vel. Nullam ac volutpat augue.
            Nam porttitor volutpat purus, at elementum risus sodales non.
          </p>
          <Link href="/pages/References">
            <button className="btn bg-[#333] text-slate-200 px-16 rounded-full mt-8 uppercase hover:bg-[#4b4b4b]">
              More
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center  w-1/2">
          <img
            src={references.src}
            alt="references"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#242323] w-full h-[55vh] flex">
        <div className="flex justify-center items-center w-1/2">
          <img
            src={emergency_response.src}
            alt="service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start pl-36 mr-10 w-1/2">
          <h1 className="text-[2.5rem] text-[#f1f1f1] font-bold border-b-[2.7px] border-[#f1f1f1] pb-4 px-6">
            EMERGENCY RESPONSE
          </h1>
          <p className="text-sm text-left max-w-96 text-[#f1f1f1] flex justify-center items-center pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            faucibus libero ut augue auctor efficitur. Cras ultricies tellus
            est, id pellentesque purus eleifend vel. Nullam ac volutpat augue.
            Nam porttitor volutpat purus, at elementum risus sodales non.
          </p>
          <Link href="/pages/EmergencyResponse">
          <button className="btn bg-[#f1f1f1] text-[#242323] px-16 rounded-full mt-8 uppercase hover:bg-[#b6b6b6]">
            More
          </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#f1f1f1] w-full h-[55vh] mr-11 flex">
        <div className="flex flex-col justify-center items-start pl-36 w-1/2">
          <h1 className="text-5xl text-[#333] font-bold border-b-[2.7px] border-[#333] pb-4 px-6">
            ABOUT US
          </h1>
          <p className="text-sm text-left max-w-96 text-[#333] flex justify-center items-center pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            faucibus libero ut augue auctor efficitur. Cras ultricies tellus
            est, id pellentesque purus eleifend vel. Nullam ac volutpat augue.
            Nam porttitor volutpat purus, at elementum risus sodales non.
          </p>
          <Link href="/pages/AboutUs">
          <button className="btn bg-[#333] text-slate-200 px-16 rounded-full mt-8 uppercase hover:bg-[#4b4b4b]">
            More
          </button>
          </Link>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={about_us.src}
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards_Services;
