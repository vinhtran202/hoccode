import React from "react";

import amazon from "../../asetts/icon/amazon.svg";
import coinbase from "../../asetts/icon/coinbase.svg";
import google from "../../asetts/icon/google.svg";
import netflix from "../../asetts/icon/netflix.svg";
import pinterest from "../../asetts/icon/pinterest.svg";
import spotify from "../../asetts/icon/spotify.svg";

export default function ClientLogos() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-8">
          My awesome clients
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img
            alt="coinbase"
            loading="lazy"
            width="768"
            height="768"
            decoding="async"
            data-nimg="1"
            className="w-40"
            src={coinbase}
            style={{ color: "transparent" }}
          />
          <img
            alt="spotify"
            loading="lazy"
            width="768"
            height="768"
            decoding="async"
            data-nimg="1"
            className="w-40"
            src={spotify}
            style={{ color: "transparent" }}
          />
          <img
            alt="pinterest"
            loading="lazy"
            width="768"
            height="768"
            decoding="async"
            data-nimg="1"
            className="w-40"
            src={pinterest}
            style={{ color: "transparent" }}
          />
          <img
            alt="google"
            loading="lazy"
            width="768"
            height="768"
            decoding="async"
            data-nimg="1"
            className="w-40"
            src={google}
            style={{ color: "transparent" }}
          />
          <img
            alt="amazon"
            loading="lazy"
            width="768"
            height="768"
            decoding="async"
            data-nimg="1"
            className="w-40"
            src={amazon}
            style={{ color: "transparent" }}
          />
          <img
            alt="netflix"
            loading="lazy"
            width="768"
            height="768"
            decoding="async"
            data-nimg="1"
            className="w-40"
            src={netflix}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
}
