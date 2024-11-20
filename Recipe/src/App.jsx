import "./App.css";
import RecipeForm from "./components/RecipeFrom/RecipeForm";
import RecipeList from "./components/RecipeList/RecipeList";
import { useState, useEffect } from "react";
import { fetchRecipes, postRecipe } from "./api";

function App() {
  const [recipes, setRecipes] = useState([]);

  // function addRecipe(newRecipe) {
  //   setRecipes([...recipes, newRecipe]);
  // }

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (error) {
        console.error("Error loading recipes:", error);
      }
    };
    loadRecipes();
  }, []);

  function addRecipe(newRecipe) {
    postRecipe(newRecipe)
      .then((data) => {
        setRecipes((prevRecipes) => [...prevRecipes, data]);
      })
      .catch((error) => console.error("Error adding recipe:", error));
  }

  console.log(recipes);

  return (
    <main>
      <h1>Recipe App</h1>
      <RecipeForm addRecipe={addRecipe} />
      <h1>Recipe Lists</h1>
      <RecipeList recipes={recipes} />
    </main>
  );
}

export default App;
