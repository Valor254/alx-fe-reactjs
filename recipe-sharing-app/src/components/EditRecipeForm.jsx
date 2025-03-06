import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(id, { title, description });
    navigate(`/recipe/${id}`); // Redirect to RecipeDetails after editing
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />

      <label>Description:</label>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
