import React from "react";

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
          <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
          <p className="text-gray-500 dark:text-gray-400">📍 {user.location}</p>
          <p className="text-gray-500 dark:text-gray-400">
            Followers: {user.followers} | Following: {user.following}
          </p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
