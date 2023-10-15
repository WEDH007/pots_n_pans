import React from "react";

export interface SmallRecipeProps {
  key: string;
  content: string;
}
const SmallRecipe = ({ key, content }: SmallRecipeProps) => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

export default SmallRecipe;
