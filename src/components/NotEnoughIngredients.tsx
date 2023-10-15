import React, { Dispatch, SetStateAction } from "react";

export interface NotEnoughIngredientsProps {
  // setIsLoadingDone: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
}

const NotEnoughIngredients = ({
  // setIsLoadingDone,
  onClick,
}: NotEnoughIngredientsProps) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="font-indie text-4xl">Sorry :{`\u0028`}</h1>
      <h1 className="mb-10 font-indie text-3xl">
        We couldn{`\u0027`}t find enough ingredients in your picture to prepare
        a recipe
      </h1>
      <button
        onClick={onClick}
        className="rounded-full bg-purple-300 px-10 py-4 font-indie text-2xl text-white drop-shadow-lg transition ease-in-out hover:-translate-y-2"
      >
        Go back
      </button>
    </div>
  );
};

export default NotEnoughIngredients;
