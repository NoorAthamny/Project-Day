/* eslint-disable react/prop-types */
import "./list.css";

import RecipeItems from "../RecipeItem/RecipeItems";

const RecipeList = ({ recipes }) => {
  return (
    <section className="recipe-list">
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeItems key={index} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
};

export default RecipeList;
