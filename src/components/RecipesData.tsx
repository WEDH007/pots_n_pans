import React, { useState, Dispatch, SetStateAction } from "react";
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
  const [spotlightId, setSpotlightId] = useState<number | undefined>(0);

  if (!recipesData) return null;
  if (recipesData.output.length === 0)
    return <NotEnoughIngredients onClick={() => setIsLoadingDone(false)} />;
  return (
    <div className="z-10 h-screen px-20 py-10">
      <div className=" h-full flex-col items-center justify-around rounded-[40px] bg-white pb-20 pt-10 drop-shadow-lg">
        <div className="my-4 flex items-center justify-center font-indie text-4xl font-bold ">
          {recipesData.output.length} recipes fresh out of the oven!
        </div>
        <div className="mb-20 flex w-full flex-row items-center justify-center">
          {recipesData.output.map(
            (recipe, index) =>
              index < 9 &&
              Number(recipesData.id) != spotlightId && (
                <SmallRecipe
                  key={`${recipesData.id}-${index}`}
                  content={recipe}
                  setSpotlightId={setSpotlightId}
                />
              ),
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-around">
        <button
          onClick={() => {
            setIsLoadingDone(false);
          }}
          className="absolute bottom-20 rounded-full bg-purple-300 px-10 py-4 font-indie text-2xl text-white drop-shadow-lg transition ease-in-out hover:-translate-y-2"
        >
          Upload another
        </button>
      </div>
    </div>
  );
};

export default RecipesData;
