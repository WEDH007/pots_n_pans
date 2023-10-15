import React, { ChangeEventHandler, MouseEventHandler } from "react";

interface NotLoadingProps {
  handleFileUpload: MouseEventHandler<HTMLButtonElement>;
  handleFileChange: ChangeEventHandler<HTMLInputElement>;
}

const NotLoading: React.FC<NotLoadingProps> = ({
  handleFileUpload,
  handleFileChange,
}) => {
  return (
    <div className="w-scren flex h-screen flex-col items-center justify-center">
      <h1 className="absolute top-20 mt-20 font-indie text-5xl hover:animate-jump">
        Upload a snapshot of your ingredients to get started!
      </h1>
      <div className="flex gap-20">
        <div className="delay-80 flex flex-row items-center justify-center rounded-full bg-red-100 py-3 pl-10 pr-4 drop-shadow-xl transition-colors duration-500 hover:bg-green-300">
          <input
            className="font-indie text-xl"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button
          className="delay-80 rounded-full border-black bg-green-300 px-7 py-3 font-indie text-xl font-bold drop-shadow-xl transition ease-in-out hover:-translate-y-2 "
          onClick={handleFileUpload}
        >
          Find me Recipes!
        </button>
      </div>
    </div>
  );
};

export default NotLoading;
