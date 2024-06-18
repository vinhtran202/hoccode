import React from "react";
import amazon from "../../asetts/icon/amazon.svg";
import coinbase from "../../asetts/icon/coinbase.svg";
import google from "../../asetts/icon/google.svg";
import netflix from "../../asetts/icon/netflix.svg";
import pinterest from "../../asetts/icon/pinterest.svg";
import spotify from "../../asetts/icon/spotify.svg";

const PopularClients = () => {
  return (
    <div className="container mx-auto grid items-center place-items-center">
      <div className="text-center">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit mb-4 uppercase !text-gray-500">
          POPULAR CLIENTS
        </h6>
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          Trusted by over 10,000+ <br /> clients
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
        <img
          alt="coinbase"
          loading="lazy"
          width="480"
          height="480"
          decoding="async"
          data-nimg="1"
          className="w-40 grayscale opacity-75"
          src={coinbase}
          style={{ color: "transparent" }}
        />
        <img
          alt="spotify"
          loading="lazy"
          width="480"
          height="480"
          decoding="async"
          data-nimg="1"
          className="w-40 grayscale opacity-75"
          src={spotify}
          style={{ color: "transparent" }}
        />
        <img
          alt="pinterest"
          loading="lazy"
          width="480"
          height="480"
          decoding="async"
          data-nimg="1"
          className="w-40 grayscale opacity-75"
          src={pinterest}
          style={{ color: "transparent" }}
        />
        <img
          alt="google"
          loading="lazy"
          width="480"
          height="480"
          decoding="async"
          data-nimg="1"
          className="w-40 grayscale opacity-75"
          src={google}
          style={{ color: "transparent" }}
        />
        <img
          alt="amazon"
          loading="lazy"
          width="480"
          height="480"
          decoding="async"
          data-nimg="1"
          className="w-40 grayscale opacity-75"
          src={amazon}
          style={{ color: "transparent" }}
        />
        <img
          alt="netflix"
          loading="lazy"
          width="480"
          height="480"
          decoding="async"
          data-nimg="1"
          className="w-40 grayscale opacity-75"
          src={netflix}
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
};

export default PopularClients;
