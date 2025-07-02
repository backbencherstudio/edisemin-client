import React from "react";

const privacySections = [
  {
    title: "1. Introduction",
    content:
      "We respect your privacy and are committed to protecting your personal data. This privacy policy outlines how we collect, use, and protect the information you provide through the Career Calculator platform.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We do not collect any personal information from users at this time. While you may interact with the site by selecting subjects or exploring options, these choices are not stored or linked to any individual. We do not collect sensitive personal data, and there are currently no subscription or user account features in place. If this changes in the future, our privacy policy will be updated accordingly.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "As we do not collect personal data at this time, no information is used for personalisation, communication, or analytics. All interactions with the tool (e.g., subject selections) are processed locally and are not stored. If we introduce features such as saved preferences or email updates in the future, this policy will be updated to explain how any data will be used and protected.",
  },
  // {
  //   title: "4. Data Security",
  //   content:
  //     "We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.",
  // },
  // {
  //   title: "5. Your Rights",
  //   content:
  //     "We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.",
  // },
  {
    title: "4. Contact Us",
    content:
      'If you have any questions about this privacy policy or how we handle your information, please email us at <a href="mailto:edsesmin88@gmail.com" class="text-[#6C63FF] underline">edsesmin88@gmail.com</a>.',
    isHTML: true,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#070707] mb-4 sm:mb-6">
        Privacy Policy
      </h1>
      <p className="text-center text-gray-600 mb-8 sm:mb-10">
        Learn how Career Calculator collects, uses, and protects your data.
      </p>

      <div className="space-y-6 text-sm sm:text-base text-gray-800 leading-relaxed">
        {privacySections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl sm:text-2xl leading-[126%] font-semibold text-[#070707] mb-3">
              {section.title}
            </h2>
            {section.isHTML ? (
              <p
                className="text-sm sm:text-base text-gray-800"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            ) : (
              <p className="text-sm sm:text-base text-gray-800">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
