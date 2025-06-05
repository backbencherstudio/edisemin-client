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
        <p className="font-semibold text-[#1E3A8A]">GCSE Requirements</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Minimum 5 GCSEs required (grades 5-9)</li>
          <li>Maximum 12 GCSEs allowed</li>
          <li>English Language and Mathematics are mandatory</li>
          <li>Combined Science is typically required</li>
        </ul>
      </div>

      {/* A-Level Requirements */}
      <div className="bg-green-50 p-6 rounded-md space-y-2 text-sm text-green-800">
        <p className="font-semibold text-green-900">A-Level Requirements</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Minimum 5 GCSEs required (grades 5-9)</li>
          <li>Maximum 12 GCSEs allowed</li>
          <li>English Language and Mathematics are mandatory</li>
          <li>Combined Science is typically required</li>
        </ul>
      </div>
    </div>
  );
}
