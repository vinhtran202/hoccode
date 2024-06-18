import React from "react";

export default function ContactSection() {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md container mx-auto border border-gray/50">
      <div className="p-6 grid grid-cols-1 lg:grid-cols-7 md:gap-10">
        <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mb-2">
            Contact Information
          </h4>
          <p className="block antialiased font-sans font-normal text-inherit mx-auto mb-8 text-base !text-gray-500">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <div className="flex gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">
              +1(424) 535 3523
            </h6>
          </div>
          <div className="flex my-2 gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6 text-white"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">
              hello@mail.com
            </h6>
          </div>
          <div className="flex mb-10 gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                clipRule="evenodd"
              />
            </svg>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">
              Open Support Ticket
            </h6>
          </div>
          <div className="flex items-center gap-5">
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <i className="fa-brands fa-facebook text-lg"></i>
              </span>
            </button>
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <i className="fa-brands fa-instagram text-lg"></i>
              </span>
            </button>
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <i className="fa-brands fa-twitter text-lg"></i>
              </span>
            </button>
            <button
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="w-full col-span-4">
          <form className="w-full">
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="block w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
