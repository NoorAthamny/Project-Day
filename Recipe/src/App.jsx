import "./App.css";
import RecipeForm from "./components/RecipeFrom/RecipeForm";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  return (
    <main>
      <h1>Recipe App</h1>
      <RecipeForm />
      <h1>Recipe List</h1>
      <RecipeList />
    </main>
  );
}

export default App;
