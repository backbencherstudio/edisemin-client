"use client";

import Image from "next/image";
import React from "react";

export default function Journy() {
  return (
    <section className="container py-12 grid grid-cols-1 md:grid-cols-[2fr_auto_1fr] gap-2 items-center mt-12">
      {/* Left Image */}
      <div className="rounded-xl overflow-hidden shadow-md h-[400px] w-full max-w-[644px] mx-auto">
        <Image
          src="/images/journy-left.png"
          alt="Students with books"
          width={644}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle Box with Info */}
      <div className="flex flex-col gap-4">
        {/* Expert Advisors Box */}
        <div className="bg-[#F9EEF6] rounded-xl p-5 shadow-md ">
          <div className="flex items-center gap-2 mb-2">
            {/* Avatars */}
            <div className="flex -space-x-2">
              {["avater-1", "avater-2", "avater-3", "avater-4"].map(
                (name, idx) => (
                  <Image
                    key={idx}
                    src={`/images/${name}.png`}
                    alt={`Advisor ${idx + 1}`}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-white"
                  />
                )
              )}
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-800">
            We Have 30+ <br /> Expert Advisors
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-[#BEF2E5] rounded-xl p-5 shadow-md w-[280px]">
          <p className="text-sm font-medium text-gray-800 mb-2">
            “Your subjects are the start but your ambition defines the journey”
          </p>
          <p className="text-xs font-semibold text-gray-700">Elena D.</p>
          <p className="text-xs text-gray-500">Career Guidance Mentor</p>
        </div>
      </div>

      {/* Right Image */}
      <div className="rounded-xl overflow-hidden shadow-md h-[400px] w-full max-w-[323px] mx-auto">
        <Image
          src="/images/journy-right.png"
          alt="Girl studying with laptop"
          width={323}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
