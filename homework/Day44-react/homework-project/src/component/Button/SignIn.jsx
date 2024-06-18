import React from "react";

export default function SignIn() {
  return (
    <div>
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button"
      >
        Sign In
      </button>
    </div>
  );
}
