import React, { useEffect, useState } from "react";

interface SmallRecipeProps {
  id: string;
  content: string;
  setSpotlightId: React.Dispatch<React.SetStateAction<number | undefined>>;
  printId: (id: number) => void;
}

type RecipeData = Record<
  string,
  {
    ingredients: string[];
    instructions: string;
    picture_link: string;
  }
>;

const SmallRecipe: React.FC<SmallRecipeProps> = ({
  id,
  content,
  setSpotlightId,
  printId,
}) => {
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

  // Assuming 'data' contains the JSON data
  return (
    <div className="mb-4 mr-2 flex h-[20%] w-full min-w-[200px] items-start justify-center overflow-scroll rounded-[15px] bg-green-300 px-4 py-3 text-left drop-shadow-lg transition ease-in-out hover:translate-x-2 ">
      <button
        className="h-full w-full"
        onClick={() => {
          setSpotlightId(Number(id));
          printId(Number(id));
        }}
      >
        <h1 className="font-indie text-2xl text-black">{content}</h1>
      </button>
    </div>
  );
};

export default SmallRecipe;
