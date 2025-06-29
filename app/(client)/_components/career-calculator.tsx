import React from "react";
import Image from "next/image";
import ManIcon from "@/public/icons/man-icon";
import CapIcon from "@/public/icons/cap-icon";
import BarIcon from "@/public/icons/bar-icon";
import cooseImg from "@/public/images/choose.png";

export default function CareerCalculator() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-4 sm:px-8">
        {/* Left Image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-md  w-full">
            <Image
              src={cooseImg}
              alt="Thinking person"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[60%] max-w-xl relative">
          <h2 className="text-4xl sm:text-5xl font-bold leading-[126%] text-[#070707] font-cabinet text-center lg:text-left">
            <span className="text-violet-600">Why Choose</span> Career <br />
            Calculator?
          </h2>

          {/* Decorative Arrow */}
          <div className="hidden lg:block w-16 h-16 sm:w-20 sm:h-20 absolute top-[-30px] right-[5%] sm:right-[15%] md:right-[20%] lg:top-12 lg:right-24">
            <Image
              src="/images/bottom-arrow.png"
              alt="Arrow"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Feature Cards */}
          <div className="mt-8 space-y-6">
            <div className="flex items-start sm:items-center gap-4 bg-violet-50 p-4 rounded-xl shadow-sm">
              <ManIcon className="text-violet-600 min-w-[24px]" />
              <div>
                <h4 className="font-semibold text-lg">
                Get career guidance
                </h4>
                <p className="leading-[150%] text-[#4A4C56]">
                  Discover careers matched to your subjects.
                </p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-4 bg-pink-50 p-4 rounded-xl shadow-sm">
              <CapIcon className="text-pink-600 min-w-[24px]" />
              <div>
                <h4 className="font-semibold text-lg">
                  Explore careers matched to your profile
                </h4>
                <p className="leading-[150%] text-[#4A4C56]">
                  Find careers with subject needs and next steps.
                </p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-4 bg-green-50 p-4 rounded-xl shadow-sm">
              <BarIcon className="text-green-600 min-w-[24px]" />
              <div>
                <h4 className="font-semibold text-lg">
                  Make informed decisions and succeed
                </h4>
                <p className="leading-[150%] text-[#4A4C56]">
                  Plan your path to career success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
