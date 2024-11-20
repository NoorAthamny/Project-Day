import { useState } from "react";
import "./form.css";

const RecipeForm = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    instruction: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
    // console.log(`${name}: ${value}`);
  };

  const handleSubmit = (e) => {
    const newRecipe = { name: "", instructions: "", category: "" };
    e.preventDefault();
    addRecipe(newRecipe);
    setRecipe({ name: "", instructions: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <section>
        <label htmlFor="Name">Recipe Name</label>
        <input
          name="name"
          value={recipe.name}
          onChange={handleChange}
          type="text"
        />
      </section>
      <section>
        <label htmlFor="element">Instructions</label>
        <textarea
          name="instructions"
          value={recipe.instruction}
          onChange={handleChange}
          type="text"
        />
      </section>
      <section>
        <label htmlFor="element">Select Caregory</label>
        <select
          value={recipe.category}
          onChange={handleChange}
          name="category"
          id="category">
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
        </select>
      </section>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
