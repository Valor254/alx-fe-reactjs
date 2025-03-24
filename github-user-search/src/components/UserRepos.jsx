import React from "react";

const UserRepos = ({ repos }) => {
  if (!repos || repos.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400 mt-4">No repositories found.</p>;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Repositories</h3>
      <ul className="mt-2 space-y-2">
        {repos.map((repo) => (
          <li key={repo.id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">{repo.description || "No description"}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              ⭐ {repo.stargazers_count} | 🛠 {repo.language || "N/A"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepos;
