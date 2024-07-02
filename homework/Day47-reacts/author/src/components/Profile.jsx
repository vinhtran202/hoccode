import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const keysToDisplay = ["name", "email"];

  return (
    isAuthenticated &&
    user && (
      <article className="items-center space-x-2 text-base">
        {user.picture && (
          <img
            src={user.picture}
            alt={user.name}
            className="w-25 h-25 rounded-full mx-auto mt-10 mb-10 block"
          />
        )}
        <h2 className="text-2xl font-bold mb-4 ">Xin chào {user.name} !</h2>
        <ul className="space-y-2 justify-center">
          {keysToDisplay.map((key, i) => (
            <li key={i} className="flex justify-center">
              <span className="font-bold text-blue-500 mr-2">{key}:</span>
              <span className="text-gray-700">{user[key]}</span>
            </li>
          ))}
        </ul>
      </article>
    )
  );
};

export default Profile;
