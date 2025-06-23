import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    name: "Elena D",
    question: "How has Career Calculator helped you?",
    answer:
      "Career Calculator helped me connect my O/GCSEs to degree options. I never thought Psychology and Art could lead to so many paths. Now I feel confident planning my future.",
  },
  {
    name: "Rahim A",
    question: "What made the biggest difference?",
    answer: "Coming soon...",
  },
  {
    name: "Maya L",
    question: "Would you recommend it to other students?",
    answer: "Absolutely, it's a great tool.",
  },
  {
    name: "Tom S",
    question: "Would you recommend it to other students?",
    answer: "Yes, it’s easy to use and helpful.",
  },
  {
    name: "Nina J",
    question: "How has Career Calculator helped you?",
    answer: "Helped me decide on subjects for university.",
  },
  {
    name: "Arif K",
    question: "How has Career Calculator helped you?",
    answer: "Provided great insight into career planning.",
  },
  {
    name: "Sophie M",
    question: "What made the biggest difference?",
    answer:
      "It helped me realise that some of the careers I was interested in weren't possible with my current subjects choices, which allowed me to rethink my plans early.",
  },
];

export default function StudentCareer() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-2">
                {/* <p className="text-sm font-medium text-gray-500">FAQ & Answer</p> */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-cabinet">
                  Student Career <br />
                  <span className="text-[#5B46FF]">Success Stories</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-3 max-w-md">
              <p className="text-gray-500 text-sm">
                Real stories from students who used our Career Calculator to
                make confident decisions about their future.
              </p>
              {/* <button className="rounded-full px-6 py-2 w-fit bg-[#5B46FF] text-white hover:text-[#5B46FF] hover:bg-transparent border hover:border-[#5B46FF] ease-in duration-200 cursor-pointer">
                Get In Touch
              </button> */}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col justify-between gap-8 lg:w-[450px]">
            <div className="rounded-xl overflow-hidden w-full max-w-sm mx-auto lg:mx-0">
              <Image
                src="/images/career-img.png"
                alt="Student testimonial"
                width={400}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#F1EFFF] rounded-xl px-4 cursor-pointer"
                >
                  <AccordionTrigger className="text-left text-base font-semibold cursor-pointer">
                    Q: {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600">
                    <span className="font-semibold">{item.name}:</span>{" "}
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
