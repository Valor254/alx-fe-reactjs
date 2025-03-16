import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 my-20 shadow-lg p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 text-center transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-sm sm:text-sm md:text-base text-gray-600 text-center mt-2">
        Frontend Developer at TechCorp
      </p>
    </div>
  );
};

export default UserProfile;
