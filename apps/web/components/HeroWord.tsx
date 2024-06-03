import React from "react";
import { FlipWords } from "./ui/flip-words";
import {  Poppins, Yellowtail } from "next/font/google";

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
    <div className="h-[40rem] flex justify-center items-center px-4 z-[20] ">
      <div className="text-6xl mx-auto text-center font-normal text-neutral-600 dark:text-neutral-400 ">
        Build
        <FlipWords words={words} /> <br />
        Websites with{" "}
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
    </div>
  );
}
