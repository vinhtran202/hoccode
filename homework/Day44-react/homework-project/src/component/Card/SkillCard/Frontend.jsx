import React from "react";

export default function CardSecond() {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="p-6 grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
            strokeWidth="2"
          >
            <path
              fillRule="evenodd"
              d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
          Frontend Web Development:
        </h5>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
          Creating beautiful and functional web experiences is my forte. Using
          the latest technologies and best practices, I design and build
          websites that captivate and engage users.
        </p>
      </div>
    </div>
  );
}
