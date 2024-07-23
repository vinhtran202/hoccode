import React from "react";
import ContactInfo from "./components/contactInfo/page";
import ProjectList from "./components/project/page";
import PersonalInterests from "./components/personalInterests/page";
import Sidebar from "./components/sidebar/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";

import "./globals.css";

export default function HomePage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large">
        <div className="w-full pt-2">
          <h1 className="text-2xl text-default-700 text-center">
            Fullstack.edu.vn F8
          </h1>
        </div>
      </div>
      <main className="w-full flex gap-5 justify-center relative flex-auto p-4">
        <Sidebar />

        <div className="max-w-4xl flex-1">
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
              <div className="flex flex-auto flex-col gap-4 w-full">
                <ContactInfo />
                <ProjectList />
                <PersonalInterests />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
