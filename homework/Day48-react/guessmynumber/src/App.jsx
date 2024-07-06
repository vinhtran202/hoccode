import React, { useEffect, useState } from "react";
import Auth from "./components/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WebFont from "webfontloader";
import {
  DarkModeProvider,
  useDarkMode,
} from "./store/actions/DarkModeContext.jsx";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Press Start"],
      },
    });
  }, []);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    toast.success(isDarkMode ? "Light Mode" : "Dark Mode");
  };

  return (
    <div className={`w-full min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="fixed top-4 right-4">
        <button
          onClick={handleToggleDarkMode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isDarkMode ? "🌛" : "🌞"}
        </button>
      </div>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center">
        <Auth />
      </div>
      <ToastContainer />
    </div>
  );
}

export default function RootApp() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}
