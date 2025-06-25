"use client";

import { Button } from "@/components/ui/button";
import CalculatorIcon from "@/public/icons/calculator-icon";
import StarIcon from "@/public/icons/star-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const careerCards = [
  {
    id: 1,
    image: "/images/plan-1.png",
    alt: "Choose Subjects",
    title: "Start with Your Subject Choices",
    description:
      "Select both your GCSE and A-Level subjects to begin customising your career path.",
  },
  {
    id: 2,
    image: "/images/plan-2.png",
    alt: "Smart Matching",
    title: "Analysing Your Academic Fit",
    description:
      "Based on your selected subjects, we’ll analyse eligibility for different degrees.",
  },
  {
    id: 3,
    image: "/images/plan-3.png",
    alt: "Career Matches",
    title: "Top Career Options for You",
    description:
      "Here are the careers that align with your selected subjects and interests.",
  },
];

export default function CareerPath() {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-[#f9f6ff] to-[#f4fffd] text-center">
      <div className="container mx-auto px-4">
        {/* Star Icon */}
        <div className="w-16 h-16 mx-auto mb-10 bg-[#E8E5FF] p-2 rounded-full relative">
          <StarIcon className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Heading */}
        <h2 className="font-cabinet text-3xl md:text-5xl font-bold leading-[126%] text-center flex flex-wrap items-center justify-center gap-2">
          Discover Your&nbsp;
          <span className="relative">
            Future
            <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gradient-to-r from-[#5B46FF] via-[#7C6CFF] to-[#A597FF] rounded-full" />
          </span>
          <span className="text-[#5B46FF]">Career Path</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#4A4C56] mx-auto mb-14 mt-6 leading-[150%] text-sm md:text-base">
          Try our interactive calculator preview and see how your subject <br />
          choices can shape your career opportunities
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {careerCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all relative"
            >
              {/* Image + white upward shadow */}
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent rounded-b-md" />
              </div>

              <div className="px-8 pb-4">
                {/* Text Content */}
                <p className="text-xl text-[#0B0A33]  font-semibold mt-4 pb-2 leading-[150%]">
                  <strong>{card.title}</strong>
              </p>
              <p className="text-[#4A4C56] leading-[150%]">
                {card.description}
              </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link href="/subject-selection">
            <Button className="bg-[#5B46FF] hover:bg-[#3c31a9] transition-all duration-300 cursor-pointer text-white rounded-full px-6 py-2 text-sm font-medium">
              <CalculatorIcon className="w-8 h-8" />
              Use Full Calculator
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
