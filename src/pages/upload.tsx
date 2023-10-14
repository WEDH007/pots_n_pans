import React from "react";
import Upload from "../components/Upload";

function upload() {
  return (
    <div className="w-scren flex h-screen flex-col items-center justify-center">
      <h1 className="absolute top-20 mt-20 font-indie text-5xl hover:animate-jump">
        Upload a snapshot of your ingredients to get started!
      </h1>
      <Upload />
    </div>
  );
}

export default upload;
