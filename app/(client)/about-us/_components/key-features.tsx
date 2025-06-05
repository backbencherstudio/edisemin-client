import React from "react";
import Image from "next/image";

export default function KeyFeatures() {
  return (
    <div className="container px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="relative w-full h-72 md:h-[340px]">
        <Image
          src="/images/key-features.png" // Replace with your actual path
          alt="Key Features Illustration"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Text Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#070707] mb-2">
          Key Features
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Everything you need to plan your academic and career path smarter,
          faster, and clearer.
        </p>

        <div className="space-y-8 relative border-l-2 border-dotted border-[#A5A5AB] ml-4">
          {/* Feature 1 */}
          <div className="pl-6 relative">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#5B46FF] border-2 border-[#5B46FF] rounded-full" />
            <h4 className="font-semibold text-[#070707] text-sm">
              Comprehensive Subject Database
            </h4>
            <p className="text-sm text-[#777980]">
              Complete lists of GCSE and A-Level subjects with detailed
              requirements
            </p>
          </div>

          {/* Feature 2 */}
          <div className="pl-6 relative">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#5B46FF] border-2 border-[#5B46FF] rounded-full" />
            <h4 className="font-semibold text-[#070707] text-sm">
              Real-time Validation
            </h4>
            <p className="text-sm text-[#777980]">
              Instant feedback on subject combinations and eligibility
              requirements
            </p>
          </div>

          {/* Feature 3 */}
          <div className="pl-6 relative">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#5B46FF] border-2 border-[#5B46FF] rounded-full" />
            <h4 className="font-semibold text-[#070707] text-sm">
              Career Matching
            </h4>
            <p className="text-sm text-[#777980]">
              Discover careers that align with your subject choices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
