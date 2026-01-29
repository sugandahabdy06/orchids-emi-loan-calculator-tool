"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import EmiCalculator from "@/components/EmiCalculator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Home Loan Calculator – Calculate Mortgage EMI Online",
  description:
    "Free home loan EMI calculator. Estimate mortgage monthly payments based on loan amount, interest rate, and tenure accurately.",
};

export default function HomeLoanCalculatorPage() {
  const faqs = [
    {
      question: "What is a home loan?",
      answer:
        "A home loan (mortgage) is a long-term loan used to buy or renovate a property. EMI depends on loan amount, interest rate, and tenure.",
    },
    {
      question: "How is home loan EMI calculated?",
      answer:
        "Home loan EMI is calculated using the principal amount, interest rate, and loan tenure. This calculator helps estimate it accurately.",
    },
    {
      question: "What is the typical home loan tenure?",
      answer:
        "Home loan tenure usually ranges from 5 to 30 years, depending on lender policies and borrower eligibility.",
    },
    {
      question: "Can I use this calculator to compare mortgages?",
      answer:
        "Yes. You can compare different loan amounts, interest rates, and tenures to choose the best mortgage option.",
    },
    {
      question: "Does this EMI include property tax or insurance?",
      answer:
        "No. This calculator estimates EMI based on principal and interest only. Taxes and insurance must be calculated separately.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* Schema: Calculator */}
      <Script
        id="home-loan-calculator-schema"
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
            description:
              "Free Home Loan EMI calculator to estimate mortgage monthly payments accurately.",
          }),
        }}
      />

      {/* Schema: FAQ */}
      <Script
        id="home-loan-faq-schema"
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

      {/* Back to Home */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Home Loan Calculator</h1>
        <p className="text-muted-foreground">
          Estimate your home loan EMI easily — ideal for mortgage and property planning.
        </p>
      </header>

      {/* Calculator */}
      <section className="border rounded-xl p-6">
        <EmiCalculator
          maxPrincipal={10_000_000_000}
          maxTenure={360}
          maxInterest={18}
          presetLabel="Home Loan"
        />
      </section>

      {/* FAQ Visual */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Home Loan Calculator – FAQs
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="hl-1">
            <AccordionTrigger>
              What is a home loan EMI?
            </AccordionTrigger>
            <AccordionContent>
              A home loan EMI is the fixed monthly payment you make to repay your
              mortgage, consisting of both principal and interest.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hl-2">
            <AccordionTrigger>
              Is longer tenure always better for home loans?
            </AccordionTrigger>
            <AccordionContent>
              Longer tenure reduces EMI but increases total interest paid. Shorter
              tenure increases EMI but saves interest.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hl-3">
            <AccordionTrigger>
              Can I prepay my home loan?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Most lenders allow partial or full prepayment, which can reduce
              interest burden and loan duration.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hl-4">
            <AccordionTrigger>
              Does interest rate change affect EMI?
            </AccordionTrigger>
            <AccordionContent>
              Yes. For floating-rate home loans, EMI may increase or decrease
              depending on market interest rate movements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
