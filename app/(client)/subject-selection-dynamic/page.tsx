"use client";

import React, { useState } from "react";
import ReusableHeading from "@/app/_components/reusable-heading";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const selectedGcse = [
  { name: "English Language", grade: "4-9" },
  { name: "Mathematics", grade: "4-9" },
  { name: "Combined Science", grade: "4-9" },
];

const selectedALevel = [
  { name: "History", grade: "A*-C" },
  { name: "English Literature", grade: "A*-C" },
  { name: "Latin", grade: "A*-C" },
];

const degreeData = [
  {
    name: "Computer Science",
    careers: [
      {
        title: "Software Developer / Engineer",
        description:
          "Builds software applications, from websites to mobile apps and desktop tools.",
      },
      {
        title: "Data Scientist",
        description:
          "Uses programming and statistics to analyse data and solve business problems.",
      },
      {
        title: "Cybersecurity Analyst",
        description:
          "Protects systems from cyber threats and manages security protocols.",
      },
      {
        title: "AI / Machine Learning Engineer",
        description:
          "Designs intelligent systems that learn from data (chatbots, recommendation engines).",
      },
      {
        title: "Web Developer",
        description:
          "Specialises in designing and coding websites (front-end, back-end, full-stack).",
      },
      {
        title: "Game Developer",
        description:
          "Creates video games using game engines and programming languages.",
      },
      {
        title: "DevOps Engineer",
        description:
          "Streamlines software deployment through automation and continuous integration.",
      },
      {
        title: "Cloud Engineer",
        description:
          "Designs and manages cloud infrastructure (e.g. AWS, Azure).",
      },
      {
        title: "IT Consultant / Tech Analyst",
        description: "Advises on IT strategies and systems for organisations.",
      },
      {
        title: "UX/UI Designer",
        description:
          "Focuses on user experience and interface design for digital products.",
      },
    ],
  },
  {
    name: "Criminology",
    careers: [
      {
        title: "Police Officer",
        description:
          "Works on crime prevention, investigation, and public safety.",
      },
      {
        title: "Probation Officer",
        description:
          "Supervises offenders and helps with their rehabilitation into society.",
      },
      {
        title: "Prison Officer",
        description:
          "Manages inmates and supports rehabilitation within the prison system.",
      },
      {
        title: "Criminal Intelligence Analyst",
        description:
          "Uses data to identify patterns and support police investigations.",
      },
      {
        title: "Forensic Investigator",
        description:
          "Collects and analyses physical evidence from crime scenes.",
      },
      {
        title: "Youth Offending Team Officer",
        description:
          "Supports young people involved in or at risk of offending.",
      },
      {
        title: "Social Worker",
        description:
          "Helps vulnerable individuals involved with the justice system.",
      },
      {
        title: "Crime Scene Investigator (CSI)",
        description:
          "Processes crime scenes to collect physical and forensic evidence.",
      },
      {
        title: "Victim Support Officer",
        description:
          "Provides emotional and practical help to victims of crime.",
      },
      {
        title: "Criminology Researcher",
        description:
          "Studies causes of crime and evaluates criminal justice policy.",
      },
    ],
  },
  {
    name: "Comparative Literature",
    careers: [
      {
        title: "Editor / Publishing Assistant",
        description: "Works on editing and producing books or journals.",
      },
      {
        title: "Literary Critic / Reviewer",
        description:
          "Writes critiques and reviews for newspapers or online media.",
      },
      {
        title: "Writer / Author",
        description: "Creates fiction or non-fiction content professionally.",
      },
      {
        title: "Lecturer / Academic",
        description: "Teaches literature at university and conducts research.",
      },
      {
        title: "Translator / Interpreter",
        description: "Translates literary texts between languages.",
      },
    ],
  },
  {
    name: "Dental Therapy & Hygiene",
    careers: [
      {
        title: "Dental Hygienist",
        description: "Cleans teeth and advises patients on oral hygiene.",
      },
      {
        title: "Dental Therapist",
        description:
          "Carries out basic dental procedures like fillings and cleaning.",
      },
      {
        title: "Community Dental Services Clinician",
        description: "Provides dental care in community settings.",
      },
      {
        title: "Oral Health Promoter",
        description: "Educates the public about dental health.",
      },
      {
        title: "Dental Educator",
        description: "Trains students in dental hygiene and therapy.",
      },
    ],
  },
  {
    name: "Digital Media",
    careers: [
      {
        title: "Digital Content Creator",
        description: "Produces multimedia content for online platforms.",
      },
      {
        title: "Social Media Manager",
        description: "Manages brand presence and engagement on social media.",
      },
      {
        title: "Web Designer",
        description: "Designs the layout and UI of websites.",
      },
      {
        title: "UX/UI Designer",
        description: "Improves user experience and digital product design.",
      },
      {
        title: "Video Editor",
        description: "Edits video content for media or marketing use.",
      },
    ],
  },
];

export default function SubjectSelectionDynamic() {
  const [expandedDegree, setExpandedDegree] = useState<string | null>(null);

  return (
    <div className="container px-4 py-16 space-y-8">
      <ReusableHeading
        title="Career Path"
        title2="Calculator"
        description="Select your GCSE and A-Level subjects to discover matching career paths"
      />

      <div>
        <h3 className="text-sm font-semibold text-[#070707] mb-2">
          Results <br />
          <span className="text-md font-semibold text-[#4A4C56]">
            Based on your subject selection
          </span>
        </h3>
        <p className="text-2xl font-semibold leading-[126%] text-[#16A355]">
          Degree Matches
        </p>

        <div className="bg-[#FBFBFB] p-6 rounded-lg shadow border mt-5">
          <div className="mt-4">
            <p className="font-medium text-sm text-gray-800 mb-1">
              GCSE Requirements
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedGcse.map((subj, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full border border-green-300"
                >
                  {subj.name} ({subj.grade})
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="font-medium text-sm text-gray-800 mb-1">
              A-Level Requirements
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedALevel.map((subj, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full border border-purple-300"
                >
                  {subj.name} ({subj.grade})
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-semibold text-lg text-gray-900 mb-3">
              Potential career paths:
            </h4>
            <div className="space-y-3">
              {degreeData.map((degree, index) => {
                const isExpanded = expandedDegree === degree.name;
                return (
                  <div
                    key={index}
                    className="w-full border border-gray-300 bg-white rounded-lg"
                  >
                    <div
                      className="px-4 py-3 flex justify-between items-center cursor-pointer hover:shadow"
                      onClick={() =>
                        setExpandedDegree(isExpanded ? null : degree.name)
                      }
                    >
                      <span className="font-medium text-[#070707]">
                        {degree.name}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    {isExpanded && (
                      <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {degree.careers.map((career, idx) => (
                          <div
                            key={idx}
                            className="bg-[#F9F9FF] border border-[#D9E0F3] rounded-md p-4"
                          >
                            <p className="text-[#5B46FF] font-semibold text-sm mb-1">
                              {career.title}
                            </p>
                            <p className="text-[#777980] text-sm leading-relaxed">
                              {career.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link href="/subject-selection">
                <button className="flex items-center gap-2 text-sm text-gray-700 hover:underline cursor-pointer">
                  ◀ Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
