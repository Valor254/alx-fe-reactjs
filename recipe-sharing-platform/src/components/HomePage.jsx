import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="bg-background min-h-screen p-6">
      <h1 className="text-4xl font-bold text-primary text-center my-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl hover:scale-105 border border-gray-200">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-xl font-semibold text-secondary mt-3">{recipe.title}</h2>
              <p className="text-textPrimary mt-1">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
