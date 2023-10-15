import React from "react";

interface Recipes {
  // Define the type for each recipe object
  delayTime: number;
  executionTime: number;
  id: string;
  output: string[];
  status: string;
}

const RecipesData = ( recipesData : Recipes) => {
  return (
    <div>
      {recipesData.output.map((recipe) => ())}
    </div>
  );
};

export default RecipesData;
