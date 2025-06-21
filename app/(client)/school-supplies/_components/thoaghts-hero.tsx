import CalculatorIcon from "@/public/icons/calculator-icon";
import Link from "next/link";

export default function ThoaghtsHero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#CEE3E9] via-[#ffff] to-[#EFD2E9] py-16 sm:py-28 rounded-[24px] px-6 sm:px-12 lg:px-24 text-center">
      <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#070707] leading-[126%]">
        Need help choosing the right subjects for your future career?
      </h2>
      <p className="mt-4 text-[#4A4C56] max-w-2xl mx-auto text-sm sm:text-base">
        Use our free Career Path Calculator to explore your options!
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <Link
          href="/subject-selection"
          className="bg-[#5B46FF] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#4532cc] transition-all cursor-pointer flex items-center gap-2"
        >
          <CalculatorIcon className="w-5 h-5" />
          Try Career Calculator
        </Link>
      </div>
    </section>
  );
}
