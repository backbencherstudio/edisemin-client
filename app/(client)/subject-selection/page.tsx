import React from "react";
import ReusableHeading from "@/app/_components/reusable-heading";
import InfoCard from "./_components/info-card";
import SubjectSelectionInfo from "./_components/subject-selection";
export default function SubjectSelection() {
  return (
    <div className="container px-4 py-16 space-y-8">
      <ReusableHeading
        title="Career Path"
        title2="Calculator"
        description="Select your GCSE and A-Level subjects to discover matching degree and career paths"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <InfoCard
          type="success"
          items={[
            "You need at least 5 GCSEs (currently have 0)",
            "<strong>Missing mandatory GCSE subjects:</strong> English Language, Mathematics",
            "You must take either <strong>Combined Science</strong> OR all three individual sciences (Biology, Chemistry, Physics)",
          ]}
        />

        <InfoCard
          type="success"
          title="Science Requirement:"
          items={[
            "You must take either <strong>Combined Science</strong> OR all three individual sciences (Biology, Chemistry, Physics)",
          ]}
        /> */}

        <InfoCard
          title="A-Level Requirements:"
          items={[
            "Need at least 5 GCSEs with grades 4-9 to study A-Levels",
            // "A-Level grades must be A* to C for university entry",
            "For A-Level Maths: Need at least grade 6 in GCSE Maths",
            "For A-Level Further Maths: Need at least grade 8 in GCSE Maths",
            "For science A-Levels: Need at least grade 6 in the corresponding GCSE",
            // "Most universities require at least grade C in relevant A-Level subjects",
          ]}
        />

        <InfoCard
          title="University Requirements:"
          items={[
            // "A-Level grades range from A* (highest) to E (minimum for university)",
            "Most universities require grades A*-C for degree program entry",
            "Competitive courses may require A*-B grades",
            "Some subjects may have specific minimum grade requirements",
          ]}
        />

        <div className="">
          <InfoCard
            type="important"
            title="Important:"
            items={[
              "<strong>Grades below C (D, E, U)</strong> are generally not accepted for university entry. Make sure to achieve at least grade C in your chosen A-Level subjects.",
            ]}
          />
        </div>
      </div>

      <SubjectSelectionInfo />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 -mt-8">
        <InfoCard
          type="success"
          items={[
            "You need at least 5 GCSEs (currently have 0)",
            "<strong>Missing mandatory GCSE subjects:</strong> English Language, Mathematics",
            // "You must take either <strong>Combined Science</strong> OR all three individual sciences (Biology, Chemistry, Physics)",
          ]}
        />

        <InfoCard
          type="success"
          title="Science Requirement:"
          items={[
            "You must take either <strong>Combined Science</strong> OR all three individual sciences (Biology, Chemistry, Physics)",
          ]}
        />
      </div>
    </div>
  );
}
