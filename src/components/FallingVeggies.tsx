import React from "react";
import Image from "next/image";

const FallingVeggies = () => {
  return (
    <section className="absolute flex h-full w-full items-center justify-between overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-between overflow-hidden"></div>
    </section>
  );
};

export default FallingVeggies;
