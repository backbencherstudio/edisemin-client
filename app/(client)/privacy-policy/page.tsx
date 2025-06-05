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
      "We may collect information that you voluntarily provide when you use our website, such as your selected subjects, preferences, or contact details (if you subscribe). We do not collect any sensitive personal data.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "The information collected is used solely to provide personalized results, improve our platform's accuracy, and communicate with you if you opt-in to receive updates. We never sell or share your data with third parties.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "5. Your Rights",
    content:
      "We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "6. Contact Us",
    content:
      'If you have any questions about this privacy policy or how we handle your information, please email us at <a href="mailto:careercc@gmail.com" class="text-[#6C63FF] underline">careercc@gmail.com</a>.',
    isHTML: true,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="font-cabinet text-xl md:text-5xl font-bold text-center text-[#070707] mb-2">
        Privacy Policy
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Learn how Career Calculator collects, uses, and protects your data.
      </p>

      <div className="space-y-6 text-sm text-gray-800 leading-relaxed">
        {privacySections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl leading-[126%] font-semibold text-[#070707] mb-3">
              {section.title}
            </h2>
            {section.isHTML ? (
              <p
                className="text-sm text-gray-800"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
