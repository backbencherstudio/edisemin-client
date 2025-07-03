import GoleIcon from "@/public/icons/gole-icon";
import ManIcon from "@/public/icons/man-icon";
import React from "react";

export default function OurPurpose() {
  return (
    <div className="container px-4 py-16 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Our Purpose */}
        <div className="">
          <div className="flex items-start gap-3 mb-2">
            <GoleIcon className="text-[#6C63FF] w-[30px] h-[30px] mt-1" />
            <h3 className="font-semibold text-[32px] text-[#070707]">
              Our Purpose
            </h3>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-base text-[#777980] leading-[150%]">
              We understand that choosing the right subjects can be
              overwhelming. Our platform simplifies this process by providing
              clear guidance on subject requirements and career pathways,
              helping students make confident decisions about their future.
            </p>
          </div>
        </div>

        {/* Who We Help */}
        <div className="">
          <div className="flex items-start gap-3 mb-2">
            <ManIcon className="text-[#6C63FF] w-[30px] h-[30px] mt-1" />
            <h3 className="font-semibold text-[32px] text-[#070707]">
              Who We Help
            </h3>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-base text-[#777980] leading-[150%]">
              Our tool is designed for students, parents, and educators who need
              reliable information about academic requirements and career
              prospects. Whether you’re planning your GCSE&apos;s or considering
              A-Level options, we’re here to guide you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
