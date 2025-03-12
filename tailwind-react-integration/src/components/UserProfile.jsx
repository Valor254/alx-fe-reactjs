import React from 'react';

const UserProfile = () => {
  return (
    <div className="p-4 md:p-8 max-w-xs md:max-w-sm bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">
      <img
        src="/path-to-profile.jpg"
        alt="User Profile"
        className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-4 text-center hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center mt-2">
        Frontend Developer at TechCorp
      </p>
    </div>
  );
};

export default UserProfile;
