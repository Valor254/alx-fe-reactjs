const UserProfile = () => {
    return (
      <div className="p-6 sm:p-5 md:p-7 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white shadow-lg rounded-lg text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto rounded-full"
        />
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">John Doe</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
          Frontend Developer & UI/UX Enthusiast
        </p>
      </div>
    );
  };
  
  export default UserProfile;
  