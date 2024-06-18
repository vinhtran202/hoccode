import React from "react";

export default function UserCentric() {
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
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
          User-Centric Design
        </h5>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
          My development goes hand-in-hand with an eye for design. I create user
          interfaces that are not only functional but also aesthetically
          pleasing, providing a seamless and enjoyable user journey.
        </p>
      </div>
    </div>
  );
}
