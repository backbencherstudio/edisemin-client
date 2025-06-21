import ReusableBanner from "@/app/_components/reusable-banner";
import ReusableHeading from "@/app/_components/reusable-heading";
import React from "react";
import StudyCategories from "./_components/study-category";

export default function SchoolSupplies() {
  return (
    <div>
      <ReusableHeading
        title="Back-to-School"
        title2="Essentials"
        description="Must-Have Supplies for GCSE & A-Level Students "
        description2="Starting a new school year can be both exciting and overwhelming. One of the best ways to set yourself up for success is by having the right tools from day one"
      />
      <div>
        <ReusableBanner
          title=" What You'll Find Here"
          subTitle="We've rounded up the most useful school supplies for UK students,
        along with trusted links to where you can buy them online."
        />
      </div>
      <div className="my-16">
        <StudyCategories />
      </div>
    </div>
  );
}
