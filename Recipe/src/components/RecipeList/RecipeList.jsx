import "./list.css";

import RecipeItems from "../RecipeItem/RecipeItems";

const RecipeList = () => {
  return (
    <section className="recipe-list">
      <ul>
        <RecipeItems />
      </ul>
    </section>
  );
};

export default RecipeList;
