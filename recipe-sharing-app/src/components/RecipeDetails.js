import { useParams } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => console.log('Edit functionality pending')}>Edit</button>
      <button onClick={() => useRecipeStore.getState().deleteRecipe(recipe.id)}>Delete</button>
    </div>
  );
};

export default RecipeDetails;