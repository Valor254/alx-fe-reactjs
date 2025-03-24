import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUserData(null);

    const data = await fetchUserData(username);
    if (data) {
      setUserData(data);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display loading message */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {error && <p>Looks like we can't find the user.</p>}

      {/* Display user info when found */}
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
