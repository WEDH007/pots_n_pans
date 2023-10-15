import React, { useState, useEffect } from "react";

export interface SmallRecipeProps {
  key: string;
  content: string;
}

type RecipeData = Record<
  string,
  {
    ingredients: string[];
    instructions: string;
    picture_link: string;
  }
>;

const LargeRecipe = ({ key, content }: SmallRecipeProps) => {
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
    <div>
      <h1>{data[content]?.picture_link}</h1>
    </div>
  );
};

export default LargeRecipe;
