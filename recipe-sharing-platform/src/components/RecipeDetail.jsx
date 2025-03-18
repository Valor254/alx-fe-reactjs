import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500 mt-6">Recipe not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 underline">← Back to Home</Link>
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md mt-4" />
      <p className="mt-4 text-gray-700">{recipe.summary}</p>

      <div className="mt-6 bg-gray-100 p-4 rounded-md">
        <h2 className="text-2xl font-semibold">Ingredients:</h2>
        <ul className="list-disc pl-6 mt-2">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-md">
        <h2 className="text-2xl font-semibold">Instructions:</h2>
        <ol className="list-decimal pl-6 mt-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mt-1">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
