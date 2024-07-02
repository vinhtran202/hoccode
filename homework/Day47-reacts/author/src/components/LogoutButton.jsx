import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalState } from "../GlobalStateProvider"; // Import hook global state

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const { state } = useGlobalState();

  return (
    isAuthenticated && (
      <div>
        <button
          onClick={() => logout()}
          className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white hover:from-pink-500 hover:to-yellow-500"
        >
          Sign Out
        </button>
        <p>{state.contactInfo}</p>
      </div>
    )
  );
};

export default LogoutButton;
