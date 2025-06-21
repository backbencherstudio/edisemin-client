import React from "react";
import ThoaghtsHero from "./thoaghts-hero";

export default function FinalThoughts() {
  return (
    <div className="container">
      <div className=" flex flex-col justify-center items-center gap-2 text-center mb-10">
        <h2 className="text-[#070707] text-2xl md:text-[32px] font-semibold leading-[126%]">
          Final Thoughts
        </h2>
        <p className="text-[#4A4C56] md:text-lg leading-[160%] max-w-7xl">
          Being well-prepared doesn&apos;t mean spending a fortune it means
          being smart with what you buy. Investing in the right school supplies
          can make your study time more effective and reduce stress during busy
          exam seasons.
        </p>
      </div>
      <ThoaghtsHero />

      <div className="max-w-4xl text-center mx-auto my-4">
        <p className="text-[#777980]">
          <span className="strong text-[#4A4C56]">Disclaimer:</span> This
          article contains affiliate links. If you purchase through them, we may
          earn a small commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
