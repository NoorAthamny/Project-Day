import "./App.css";
import RecipeForm from "./components/RecipeFrom/RecipeForm";
import RecipeList from "./components/RecipeList/RecipeList";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  function addRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  console.log(recipes);

  return (
    <main>
      <h1>Recipe App</h1>
      <RecipeForm addRecipe={addRecipe} />
      <h1>Recipe Lists</h1>
      <RecipeList />
    </main>
  );
}

export default App;
