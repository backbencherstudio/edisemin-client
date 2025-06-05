import ReusableHeading from "@/app/_components/reusable-heading";
import React from "react";
import OurPurpose from "./_components/our-purpose";
import KeyFeatures from "./_components/key-features";

export default function AboutUs() {
  return (
    <div>
      <ReusableHeading
        title="About Career"
        title2="Calculator"
        description="Our mission is to help students make informed decisions about their academic journey"
      />

      <OurPurpose />
      <div className="my-20">
        <KeyFeatures />
      </div>
    </div>
  );
}
