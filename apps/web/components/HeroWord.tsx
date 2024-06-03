import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Poppins, Yellowtail } from "next/font/google";
import Image from "next/image";
import heroImage from "../assets/3.png";

const alata = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const ubuntu = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function FlipWordsDemo() {
  const words = ["Better", "Cute", "Beautiful", "Modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4 z-[20] gap-10">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 ">
        Build
        <FlipWords words={words} /> <br />
        Fullstack Websites with
        <br />
        <span className={`${ubuntu.className} text-orange-400 text-7xl`}>
          Code
          <span className={` text-orange-600`}>blaze</span>{" "}
          <span
            className={`${alata.className} text-blue-400 text-6xl font-semibold`}
          >
            Studios
          </span>
        </span>
      </div>
      <div className="">
        <Image
          src={heroImage}
          className="h-[300px] w-auto rounded-xl"
          alt="img"
        />
      </div>
    </div>
  );
}
