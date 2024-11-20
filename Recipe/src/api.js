const url = "https://6738bb0d4eb22e24fca8cdd1.mockapi.io/recipe";

export const fetchRecipes = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("erroe");
  }
};

// add to the api ..........

export const postRecipe = async (newRecipe) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
    if (!response.ok) {
      throw new Error("Failed to add recipe");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error adding recipe", error);
    throw new Error(error);
  }
};
