import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-20">
      <h1 className="shover:animate-jump font-indie text-4xl">
        Cooking you a good recipe...
      </h1>
      <Image
        className="animate-wiggle"
        src="images/loading.svg"
        alt="loading"
        width={150}
        height={150}
      />
    </div>
  );
};

export default Loading;
