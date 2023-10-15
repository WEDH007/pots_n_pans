import React from "react";

interface Recipe {
  // Define the type for each recipe object
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipesDataProps {
  recipesData: Recipe[]; // Use the Recipe interface to define the type for recipesData
}

const RecipesData = ({ recipesData }: RecipesDataProps) => {
  return (
    <div>
      {recipesData.map((recipe) => (
        <div key={recipe.name}>
          <h2>{recipe.name}</h2>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default RecipesData;
