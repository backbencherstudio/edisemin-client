import React from "react";
import Banner from "./_components/banner";
import Journy from "./_components/journy";
import CareerPath from "./_components/career-path";
import CareerCalculator from "./_components/career-calculator";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Journy />
      <CareerPath />
      <CareerCalculator />
    </div>
  );
}
