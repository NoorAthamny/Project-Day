import "./form.css";
const RecipeForm = () => {
  return (
    <form className="recipe-form">
      <section>
        <label htmlFor="Name">Recipe Name</label>
        <input type="text" />
      </section>
      <section>
        <label htmlFor="element">Instructions</label>
        <textarea rows="10" cols="100%" type="text" />
      </section>
      <section>
        <label htmlFor="element">Select Caregory</label>
        <select name="category" id="category">
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
        </select>
      </section>
      <button type="button">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
