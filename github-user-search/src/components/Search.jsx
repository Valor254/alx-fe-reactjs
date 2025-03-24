import React, { useState } from "react";
import { fetchUserData, fetchUserRepos } from "../services/githubService";
import UserProfile from "./UserProfile";
import UserRepos from "./UserRepos";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const userData = await fetchUserData(username);
      if (!userData) {
        setError("Looks like we can't find the user");
      } else {
        setUser(userData);
        const userRepos = await fetchUserRepos(username);
        setRepos(userRepos);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-grow p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {user && <UserProfile user={user} />}
      {repos.length > 0 && <UserRepos repos={repos} />}
    </div>
  );
};

export default Search;
