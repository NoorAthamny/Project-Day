/* eslint-disable react/prop-types */
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
    e.preventDefault();
    if (!recipe.name || !recipe.instruction || !recipe.category) {
      alert("Please fill out all fields!");
      return;
    }
    addRecipe(recipe);
    setRecipe({ name: "", instruction: "", category: "" });
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
        <label htmlFor="element">instruction</label>
        <textarea
          name="instruction"
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
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">breakfast</option>
        </select>
      </section>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
