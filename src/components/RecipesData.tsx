import React, { Dispatch, SetStateAction } from "react";
import NotEnoughIngredients from "./NotEnoughIngredients";
import SmallRecipe from "./SmallRecipe";

export interface Recipes {
  // Define the type for each recipe object
  delayTime: number;
  executionTime: number;
  id: string;
  output: string[];
  status: string;
}

export interface RecipesDataProps {
  recipesData: Recipes | undefined;
  setIsLoadingDone: Dispatch<SetStateAction<boolean>>;
}

const RecipesData = ({ recipesData, setIsLoadingDone }: RecipesDataProps) => {
  if (!recipesData) return null;
  if (recipesData.output.length === 0)
    return <NotEnoughIngredients onClick={() => setIsLoadingDone(false)} />;
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {recipesData.output.map((recipe, index) => (
        <SmallRecipe key={`${recipesData.id}-${index}`} content={recipe} />
      ))}
    </div>
  );
};

export default RecipesData;
