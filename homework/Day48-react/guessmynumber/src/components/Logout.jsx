import React from "react";
import { useDispatch } from "../store/hook";
import { useDarkMode } from "../store/actions/DarkModeContext";

export default function Logout() {
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "auth/destroy_user",
    });
    localStorage.removeItem("login_token");
  };
  return (
    <div className={`w-full min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <a
        href="#"
        onClick={handleLogout}
        className="bg-white dark:bg-gray-900 text-black dark:text-white bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
      >
        Logout
      </a>
    </div>
  );
}
