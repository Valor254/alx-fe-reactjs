import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user repositories:", error);
    return [];
  }
};
