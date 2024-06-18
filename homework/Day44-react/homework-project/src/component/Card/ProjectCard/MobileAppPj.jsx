import React from "react";
import mobileapp from "../../../asetts/image/mobileapp.jpg";

export default function MobileAppPj() {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg mx-0 mt-0 mb-6 h-48">
        <img
          alt="Mobile App Development"
          loading="lazy"
          width="768"
          height="768"
          decoding="async"
          data-nimg="1"
          className="h-full w-full object-cover"
          src={mobileapp}
          style={{ color: "transparent" }}
        />
      </div>
      <div className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit mb-2">
            Mobile App Development
          </h5>
        </a>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-6 font-normal !text-gray-500">
          Mobile app designed to help users discover and explore local
          restaurants and cuisines.
        </p>
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          see details
        </button>
      </div>
    </div>
  );
}
