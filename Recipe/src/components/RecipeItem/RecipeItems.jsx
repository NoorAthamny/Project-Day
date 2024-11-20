/* eslint-disable react/prop-types */
import "./item.css";

const RecipeItems = ({ recipe }) => {
  return (
    <article className="recipe-items">
      <section className="item-section">
        <li>{recipe.name}</li>
        <p>
          <strong>Instruction</strong>: {recipe.instruction}
        </p>
        <p>
          <strong>Category</strong>: {recipe.category}
        </p>
      </section>
    </article>
  );
};

export default RecipeItems;
