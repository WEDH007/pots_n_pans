import React, { useState, Dispatch, SetStateAction } from "react";
import NotEnoughIngredients from "./NotEnoughIngredients";
import SmallRecipe from "./SmallRecipe";
import LargeRecipe from "./LargeRecipe";

export interface Recipes {
  delayTime: number;
  executionTime: number;
  id: string;
  output: { classes: string[]; recipes: string[] };
  status: string;
}

export interface RecipesDataProps {
  recipesData: Recipes | undefined;
  setIsLoadingDone: Dispatch<SetStateAction<boolean>>;
}

const RecipesData = ({ recipesData, setIsLoadingDone }: RecipesDataProps) => {
  const [spotlightId, setSpotlightId] = useState<number | undefined>(0);

  if (!recipesData) return null;
  if (recipesData.output?.recipes?.length === 0)
    return <NotEnoughIngredients onClick={() => setIsLoadingDone(false)} />;

  // function shuffleArray<T>(array: Array<T>): Array<T> {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]] as [T, T];
  //   }
  //   return array;
  // }

  return (
    <div className="z-10 h-screen px-20 py-10">
      <div className=" h-full flex-col items-center rounded-[40px] bg-white pb-20 pt-10 drop-shadow-lg">
        <div className="my-8 flex items-center justify-center font-indie text-4xl font-bold ">
          {recipesData.output.recipes.length} recipes fresh out of the oven!
        </div>
        <div className="flex">
          <div className="max-w-1/2 mx-20 max-h-[460px] w-[50%] overflow-scroll rounded-[15px] bg-white pb-2">
            <LargeRecipe
              key={spotlightId?.toString() ?? "0"}
              content={recipesData.output.recipes[spotlightId ?? 0] ?? ""}
              classes={recipesData.output.classes}
              printId={() => {
                console.log(spotlightId);
              }}
            />
          </div>
          <div className="mb-20 mr-20 flex h-full max-h-[460px] w-1/2 max-w-[30%] flex-row flex-wrap items-start justify-center gap-5 overflow-scroll">
            {recipesData.output.recipes.map((recipe, index) =>
              index < 10 && index !== spotlightId ? (
                <SmallRecipe
                  key={index.toString()}
                  id={index.toString()}
                  content={recipe}
                  setSpotlightId={setSpotlightId}
                  printId={() => {
                    console.log(index);
                  }}
                />
              ) : null,
            )}
          </div>
        </div>
      </div>
      <div className="mx-20 flex flex-col items-start justify-around">
        <button
          onClick={() => {
            setIsLoadingDone(false);
          }}
          className="absolute bottom-20 rounded-full bg-purple-300 px-10 py-4 font-indie text-2xl text-white drop-shadow-lg transition ease-in-out hover:-translate-y-2"
        >
          Upload another
        </button>
        <h1 className="text-md absolute bottom-20 left-1/3 font-indie text-green-900">
          *Green-highlighted ingredients were what our model identified in your
          picture!
        </h1>
      </div>
    </div>
  );
};

export default RecipesData;
