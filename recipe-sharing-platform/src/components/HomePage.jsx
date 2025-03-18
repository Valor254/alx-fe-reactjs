import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load recipes");
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading recipes:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center my-6">Recipe Sharing Platform</h1>

      {/* Add New Recipe Button */}
      <div className="flex justify-center mb-6">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
        >
          ➕ Add New Recipe
        </Link>
      </div>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-600">Loading recipes...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className="bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl hover:scale-105 border border-gray-200">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold text-gray-800 mt-3">{recipe.title}</h2>
                <p className="text-gray-600 mt-1">{recipe.summary}</p>
              </div>
            </Link>
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No recipes available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
