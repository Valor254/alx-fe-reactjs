import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      let query = `q=${searchTerm}`;
      if (location.trim()) query += `+location:${location}`;
      if (minRepos.trim()) query += `+repos:>${minRepos}`;

      const response = await axios.get(`https://api.github.com/search/users?${query}`);
      setSearchResults(response.data.items || []);
    } catch (error) {
      setError("Looks like we can't find the user");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Search Input Fields (Vertically Stacked with More Spacing) */}
      <div className="flex flex-col space-y-6">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by location (optional)..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Min repositories (optional)..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchUserData}
          className="w-full bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Status Messages */}
      {loading && <p className="text-center mt-6 text-gray-500">Loading...</p>}
      {error && <p className="text-center mt-6 text-red-500">{error}</p>}

      {/* Search Results */}
      <div className="mt-6 space-y-6">
        {searchResults.length > 0 ? (
          searchResults.map((user) => (
            <div key={user.id} className="p-4 border border-gray-300 rounded-md flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <p className="text-lg font-semibold">{user.login}</p>
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
          ))
        ) : (
          !loading && !error && <p className="text-center text-gray-500">No users found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
