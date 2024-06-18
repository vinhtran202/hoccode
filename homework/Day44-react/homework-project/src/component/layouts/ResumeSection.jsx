import React from "react";

export default function ResumeSection() {
  return (
    <div className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900">
            My Resume
          </h2>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </p>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 flex items-center gap-2"
            type="button"
          >
            view more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          <div className="flex items-start gap-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={2}
              >
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
