import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white shadow-md rounded-lg sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
      />
      <h2 className="text-lg sm:text-lg md:text-xl font-semibold mt-4">John Doe</h2>
      <p className="text-sm sm:text-sm md:text-base text-gray-600">Software Engineer | Tech Enthusiast</p>
    </div>
  );
};

export default UserProfile;
