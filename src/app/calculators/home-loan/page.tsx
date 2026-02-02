import type { Metadata } from "next";
import Script from "next/script";
import HomeLoanClient from "./HomeLoanClient";
import Link from "next/link";
import InPagePush from "@/components/InPagePush";

export const metadata: Metadata = {
  title: "Home Loan Calculator – Calculate Mortgage EMI Online",
  description:
    "Free home loan EMI calculator. Estimate mortgage monthly payments based on loan amount, interest rate, and tenure accurately.",
};

const faqs = [
  {
    question: "What is a home loan?",
    answer:
      "A home loan (mortgage) is a long-term loan used to purchase or renovate a property.",
  },
  {
    question: "How is home loan EMI calculated?",
    answer:
      "Home loan EMI is calculated using loan amount, interest rate, and tenure.",
  },
  {
    question: "What is the maximum tenure for home loans?",
    answer:
      "Home loan tenure usually ranges from 5 to 30 years.",
  },
  {
    question: "Does this calculator include taxes or insurance?",
    answer:
      "No. This calculator estimates EMI based on principal and interest only.",
  },
];

export default function HomeLoanPage() {
  return (
    <>
      {/* ========= SCHEMA ========= */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Home Loan Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            url: "https://calctoolsfinance.com/calculators/home-loan",
          }),
        }}
      />

      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* ========= TOOL ========= */}
      <HomeLoanClient />

      {/* ========= IN-PAGE PUSH ========= */}
      <InPagePush />

      {/* ========= LONG CONTENT ========= */}
      <section className="container mx-auto px-4 py-16 max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold">
          Home Loan EMI Calculator for Smarter Mortgage Planning
        </h2>

        <p className="text-muted-foreground">
          Home loans are long-term financial commitments, often spanning 20 to
          30 years. Even small changes in interest rates or tenure can
          significantly affect your monthly EMI and total interest paid.
        </p>

        <p className="text-muted-foreground">
          This home loan calculator helps you estimate EMI accurately so you
          can plan your property purchase responsibly.
        </p>

        <h3 className="text-xl font-semibold">
          Benefits of Using a Home Loan EMI Calculator
        </h3>

        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Understand long-term repayment obligations</li>
          <li>Compare lenders and interest rates</li>
          <li>Plan prepayments effectively</li>
          <li>Avoid financial stress</li>
        </ul>

        <h3 className="text-xl font-semibold">
          What This Calculator Does Not Include
        </h3>

        <p className="text-muted-foreground">
          The EMI estimate does not include property taxes, insurance premiums,
          registration charges, or maintenance costs. Always consider these
          additional expenses when planning a home purchase.
        </p>

        <p className="text-sm text-muted-foreground">
          Need a general overview? Visit our{" "}
          <Link href="/calculators/emi" className="underline">
            EMI Calculator
          </Link>
          .
        </p>
      </section>
    </>
  );
}
