
"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Instractor = () => {
  const content = [];
  return (
    <div className="relative h-screen w-full p-5 overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full ">
        <h2 className="text-5xl font-bold ">Meet Our Instructors</h2>
        <p className="text-xl font-normal mt-5">Discover the talented professional who will guid your journey</p>
        <div className="flex items-center mt-5">
          {/* <AnimatedTooltip /> */}
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instractor;
