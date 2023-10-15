import React, { useState, useEffect } from "react";
import Image from "next/image";
export interface SmallRecipeProps {
  key: string;
  content: string;
  printId: (id: number) => void;
  classes: string[];
}

type RecipeData = Record<
  string,
  {
    ingredients: string[];
    instructions: string;
    picture_link: string;
  }
>;

const LargeRecipe = ({ key, content, printId, classes }: SmallRecipeProps) => {
  const [data, setData] = useState<RecipeData | undefined>();

  useEffect(() => {
    async function getData() {
      const response = await fetch("/util/recipe_to_ingredients.json");
      const tempData: unknown = await response.json();
      setData(tempData as RecipeData);
    }
    void getData();
  }, []);

  if (data === undefined) return <div></div>;

  return (
    <div
      onMouseEnter={() => printId(Number(key))}
      className="h-full overflow-scroll rounded-[30px] bg-green-100 px-9 py-9 drop-shadow-lg"
    >
      <h1 className="font-indie text-4xl font-bold">{content}</h1>
      <hr className="border-t-2 border-green-500" />
      <h1 className="mt-5 font-indie text-2xl font-bold">Ingredients:</h1>
      <ul>
        {data[content]?.ingredients.map((ingredient, index) => (
          <li key={index.toString()} className="flex items-center">
            <h1
              className={`text-md font-indie font-bold ${
                classes.some((cls) => ingredient.includes(cls))
                  ? "font-bold text-green-900 underline"
                  : ""
              }`}
            >
              {ingredient.substring(0, ingredient.length - 13)}
            </h1>
          </li>
        ))}
      </ul>
      <h1 className="mt-5 font-indie text-2xl font-bold">Instructions:</h1>
      <h1 className="text-md font-indie">{data[content]?.instructions}</h1>
    </div>
  );
};

export default LargeRecipe;
