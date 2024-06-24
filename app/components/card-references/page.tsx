// components/card-services1/page.jsx
import React from "react";
import Link from "next/link";
import services from "../../../public/Services1.jpg";
import references from "../../../public/References.jpg";

const Cards_Services1 = () => {
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
        <div className="flex flex-col justify-center items-start pl-36 w-1/2">
          <p className="text-sm text-left max-w-96 text-[#f1f1f1] flex justify-center items-center pt-6">
            <ul className=" text-[1rem]">
              <li>
                • Refit management of a +140m Sailing yacht, including 100m mast
                un-stepping
              </li>
              <br />
              <li>
                • 5 years refit / class renewal of a +140m Motor yacht,
                involving full paint job{" "}
              </li>
              <br />
              <li>
                • 10 years class renewal / including tail shafts withdrawal of a
                +140m Motor yacht.
              </li>
              <br />
              <li>
                • Re-engineering of a +140m commercial ship (in board engine
                replacement)
              </li>
              <br />
              <li>
                • Project management, interior refitting and upgrades for
                various motor yachts among which 73m Perini Navi, 66m Oceanco,
                33m Classic Feadship 1973
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="bg-[#f1f1f1] w-full h-[55vh] flex">
        <div className="flex flex-col justify-center items-start pl-36 w-1/2">
          <p className="text-sm text-left max-w-96 text-[#333] flex justify-center items-center pt-6">
            <ul className=" text-[1rem]">
              <li>
                • Conversion follow up (extension / helipad installation / Bow
                and stern conversion){" "}
              </li>
              <br />
              <li>
                • Complete control / command refit on commercial ship
                (machineries, safeties, propulsion)
              </li>
              <br />
              <li>
                • New build construction management of multiple yachts and
                commercial ships
              </li>
              <br />
              <li>
                • New build construction management of a new series of 2 luxury
                sail assisted cruise ships of +200m{" "}
              </li>
            </ul>
          </p>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={references.src}
            alt="references"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards_Services1;
