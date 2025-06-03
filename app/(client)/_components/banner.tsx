"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuMoveUpRight } from "react-icons/lu";

export default function Banner() {
  return (
    <div className="py-40  my-20">
      <div className="relative w-full text-center container mx-auto">
        {/* Decorative Images */}
        <div className="absolute -mt-36 left-4 w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/banner-1.png"
            alt="student 1"
            className="rounded-full shadow-lg"
            fill
          />
        </div>
        <div className="absolute -mt-40 right-8  w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/banner-2.png"
            alt="student 2"
            className="rounded-full shadow-lg"
            fill
          />
        </div>
        <div className="absolute -bottom-10 left-10 w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/banner-3.png"
            alt="student 3"
            className="rounded-full shadow-lg"
            fill
          />
        </div>
        <div className="absolute -bottom-10 right-10 w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/banner-4.png"
            alt="student 4"
            className="rounded-full shadow-lg"
            fill
          />
        </div>

        {/* Heading */}
        <h1 className="font-cabinet text-3xl sm:text-4xl md:text-[90px] font-bold leading-[130%] text-[#070707">
          Unlock Your Future <br />
          with <span className="text-[#6C63FF]">Career Calculator</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 mx-auto text-gray-600 text-sm md:text-xl leading-[150%] mb-10">
          Explore degrees and career paths based on your GCSE and A-Level
          subjects <br /> designed to help UK students make informed decisions.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
          <Link
            href="/subject-selection"
            className="rounded-full px-6 text-[#6C63FF] hover:text-white duration-300 ease-linear border border-[#6C63FF]  hover:bg-[#5749d6] transition cursor-pointer py-2 flex items-center gap-2"
          >
            Choose Degree
            <LuMoveUpRight className="w-6 h-6 bg-white rounded-full p-1 text-[#5B46FF] hover:bg-[#4736C2] transition-all duration-200 hover:shadow-md border border-[#6C63FF]" />
          </Link>
          <Link
            href="/subject-selection"
            className="rounded-full px-6 text-[#6C63FF] hover:text-white duration-300 ease-linear border border-[#6C63FF]  hover:bg-[#5749d6] transition cursor-pointer py-2"
          >
            Calculate Matches
          </Link>
        </div>
      </div>
    </div>
  );
}
