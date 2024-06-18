import React, { Component } from "react";

export default class Technology extends Component {
  render() {
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
                d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                clipRule="evenodd"
              ></path>
              <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z"></path>
            </svg>
          </div>
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
            Technology Stack
          </h5>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
            I'm well-versed in the industry's most popular frontend
            technologies, including HTML5, CSS3, JavaScript, and frameworks like
            React and React Native.
          </p>
        </div>
      </div>
    );
  }
}
