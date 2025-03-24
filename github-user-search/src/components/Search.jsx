import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Ensuring it's always an array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    if (!searchTerm.trim()) return; // Prevent empty search

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
      setSearchResults(response.data.items || []); // Ensuring an array is always set
    } catch (error) {
      setError("Looks like we can't find the user");
      setSearchResults([]); // Reset results on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      {/* Search Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchUserData}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Status Messages */}
      {loading && <p className="text-center mt-4 text-gray-500">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Search Results */}
      <div className="mt-4 space-y-4">
        {searchResults.length > 0 ? (
          searchResults.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg flex items-center space-x-4">
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
