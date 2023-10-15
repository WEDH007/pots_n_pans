import React from "react";
import Image from "next/image";

const FallingVeggies = () => {
  const fruits = ["broccoli", "banana", "cherry"];

  const fruitsList = [];

  const links = {
    broccoli: "./images/broccoli.svg",
    banana: "./images/banana.svg",
    cherry: "./images/cherry.svg",
  };

  for (let i = 0; i < 11; i++) {
    // Randomly select a fruit
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

    // Add the selected fruit to the list
    fruitsList.push(randomFruit);
  }

  return (
    <section className="absolute -z-[10] flex h-full w-full items-center justify-between overflow-hidden opacity-[60%]">
      <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-around overflow-hidden">
        <div className="animate-falling">
          <Image
            src="./images/broccoli.svg"
            width={75}
            height={75}
            alt="broccoli"
          />
        </div>
        <div className="animate-falling1">
          <Image
            src="./images/banana.svg"
            width={60}
            height={60}
            alt="banana"
          />
        </div>
        <div className="animate-falling2">
          <Image
            src="./images/cherry.svg"
            width={50}
            height={50}
            alt="cherry"
          ></Image>
        </div>
        <div className="animate-falling3">
          <Image
            src="./images/broccoli.svg"
            width={80}
            height={80}
            alt="broccoli"
          />
        </div>
        <div className="animate-falling">
          <Image
            src="./images/broccoli.svg"
            width={70}
            height={70}
            alt="broccoli"
          />
        </div>
        <div className="animate-falling1">
          <Image
            src="./images/cherry.svg"
            width={60}
            height={60}
            alt="cherry"
          ></Image>
        </div>
        <div className="animate-falling2">
          <Image
            src="./images/banana.svg"
            width={50}
            height={50}
            alt="banana"
          />
        </div>
        <div className="animate-falling">
          <Image
            src="./images/broccoli.svg"
            width={80}
            height={80}
            alt="broccoli"
          />
        </div>
        <div className="animate-falling1">
          <Image
            src="./images/banana.svg"
            width={60}
            height={60}
            alt="banana"
          />
        </div>
        <div className="animate-falling2">
          <Image
            src="./images/cherry.svg"
            width={50}
            height={50}
            alt="cherry"
          ></Image>
        </div>
        <div className="animate-falling3">
          <Image
            src="./images/broccoli.svg"
            width={80}
            height={80}
            alt="broccoli"
          />
        </div>
        <div className="animate-falling">
          <Image
            src="./images/banana.svg"
            width={70}
            height={70}
            alt="banana"
          />
        </div>
        <div className="animate-falling1">
          <Image
            src="./images/cherry.svg"
            width={70}
            height={70}
            alt="cherry"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default FallingVeggies;
