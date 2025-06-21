import ReusableBanner from "@/app/_components/reusable-banner";
import ReusableHeading from "@/app/_components/reusable-heading";
import React from "react";
import OnlineLearningPlatforms from "./_components/online-learning";
import CareerFocusedLearning from "./_components/career-focused-learning";
import FinalThoughts from "./_components/final-thoughts";

export default function Learning() {
  return (
    <div>
      <ReusableHeading
        title=""
        title2="Learning"
        description=""
        description2="Starting a new school year can be both exciting and overwhelming. One of the best ways to set yourself up for success is by having the right tools from day one"
      />
      <div>
        <ReusableBanner
          title="Extra Learning Support for GCSE & A-Level Students"
          subTitle="No matter your starting point, the right learning support can boost your grades, build your confidence, and open doors to future careers. Whether you're preparing for your GCSEs, A-Levels, or simply want to reinforce what you've learned in school, this guide highlights top learning platforms and tutoring services that can help."
        />
      </div>
      <div className="my-16">
        <OnlineLearningPlatforms />
      </div>
      <div className="my-16">
        <CareerFocusedLearning />
      </div>
      <div className="my-16">
        <FinalThoughts />
      </div>
    </div>
  );
}
