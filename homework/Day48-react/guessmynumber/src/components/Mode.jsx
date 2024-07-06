import React, { useState } from "react";

export default function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <div className={isDarkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <h1 className="text-3xl font-bold">
            Chế độ {isDarkMode ? "Tối" : "Sáng"}
          </h1>
          <button
            onClick={toggleDarkMode}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {isDarkMode ? "🌛" : "🌞"}
          </button>

          <p className="mt-4">Nội dung văn bản</p>
        </div>
      </div>
    </div>
  );
}
