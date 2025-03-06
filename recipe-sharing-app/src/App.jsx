import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import Recipe Components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div>
      <header>
        <h1>Recipe Sharing App</h1>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </header>

      {/* Recipe Form */}
      <AddRecipeForm />

      {/* Recipe List */}
      <RecipeList />
    </div>
  );
}

export default App;
