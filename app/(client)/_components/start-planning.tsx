"use client";

import React, { useState } from "react";

export default function StartPlanning() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email entered:", email);
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#CEE3E9] via-[#ffff] to-[#EFD2E9] py-12 rounded-[24px] px-6 sm:px-12 lg:px-24 text-center">
      <h2 className="text-2xl sm:text-[44px] font-semibold text-black leading-[126%]">
        Start Planning Your Future with <br />
        <span className="text-[#5B46FF] font-semibold">
          Career Calculator Today
        </span>
        <span>!</span>
      </h2>
      <p className="mt-4 text-[#4A4C56] max-w-2xl mx-auto text-sm sm:text-base">
        Discover degrees and career paths matched to your subject choices.{" "}
        <br />
        Make smarter academic decisions and build confidence in your next step.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-[#5B46FF]"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#5B46FF] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#4532cc] transition-all cursor-pointer"
        >
          Join for Free →
        </button>
      </div>
    </section>
  );
}
