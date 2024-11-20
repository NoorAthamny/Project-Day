import "./item.css";

const RecipeItems = () => {
  return (
    <article className="recipe-items">
      <section className="item-section">
        <li>Recipe Name</li>
        <p>
          <strong>Instruction</strong>: Recipe Instruction will go here
        </p>
        <p>
          <strong>Category</strong>: Lunch
        </p>
      </section>
    </article>
  );
};

export default RecipeItems;
