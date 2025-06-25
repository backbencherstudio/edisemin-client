import React from "react";
import BookIcon from "@/public/icons/book-icon";

export default function ImportantGuidelines() {
  return (
    <div className="container px-4 py-16 space-y-6">
      {/* Heading */}
      <div className="flex items-center gap-2">
        <BookIcon className="text-[#6C63FF]" />
        <h2 className="text-xl md:text-2xl font-bold text-[#070707]">
          Important Guidelines
        </h2>
      </div>

      {/* GCSE Requirements */}
      <div className="bg-blue-50 p-6 rounded-md space-y-2 text-sm text-[#1E3A8A]">
        <div>
        <p className="font-semibold text-[#1E3A8A]">
          Alternative Qualifications for University Entry
        </p>
        {/* <ul className="list-disc pl-5 space-y-1">
          <li>Minimum 5 GCSEs required (grades 5-9)</li>
          <li>Maximum 12 GCSEs allowed</li>
          <li>English Language and Mathematics are mandatory</li>
          <li>Combined Science is typically required</li>
        </ul> */}
        <p>
          While A-Levels are a common route into university, they are not the
          only option. Many universities also accept other qualifications such
          as Access to HE Diploma, BTEC Nationals, CTECs, the European
          Baccalaureate, and Scottish Highers or Advanced Highers. Entry
          requirements can vary between universities and courses, so it&apos;s
          always best to check with individual institutions for the most
          accurate guidance.
        </p>
        </div>
        <div>
          
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-md space-y-2 text-sm text-[#1E3A8A]">
        <p>
          This tool is designed to provide a general guide to possible degree
          and career paths. It is not based on a single official dataset, but
          rather a collection of information from various educational
          institutions and publicly available sources. It doesn’t cover every
          option, so we encourage you to research further or speak to a careers
          advisor for personalised guidance.
        </p>
      </div>

      {/* A-Level Requirements */}
      <div className="bg-green-50 p-6 rounded-md space-y-2 text-sm text-green-800">
        <p className="font-semibold text-green-900">A-Level Requirements</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Minimum 5 GCSEs required (grades 5-9)</li>
          <li>Maximum 12 GCSEs allowed</li>
          <li>English Language and Mathematics are mandatory</li>
          <li>
            Combined Science is typically OR all three individual sciences
            (Biology, Chemistry, Physics)
          </li>
        </ul>
      </div>
    </div>
  );
}
