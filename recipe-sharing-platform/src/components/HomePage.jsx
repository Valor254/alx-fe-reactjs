import { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Fetch from public directory
      .then((response) => response.json())
      .then((data) => {
        console.log("Recipe Data Loaded:", data); // Debugging
        setRecipes(data);
      })
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
              <p className="text-gray-600 mt-1">{recipe.summary}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500">No recipes found!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
