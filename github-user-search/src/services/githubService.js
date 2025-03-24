import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com";

/**
 * Fetch GitHub users based on search query and optional filters
 * @param {string} username - GitHub username to search
 * @param {string} location - (Optional) Filter by location
 * @param {number} minRepos - (Optional) Minimum number of repositories
 * @returns {Promise<object>} - GitHub user data
 */
export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // Construct query string for advanced search
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    // Make request to GitHub API
    const response = await axios.get(`${BASE_URL}/search/users?${query}`);

    // Return user data
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
};
