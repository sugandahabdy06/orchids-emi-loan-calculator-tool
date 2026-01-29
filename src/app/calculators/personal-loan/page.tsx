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
  title: "Personal Loan Calculator – Calculate EMI Instantly",
  description:
    "Free personal loan EMI calculator. Calculate monthly installment based on loan amount, interest rate, and tenure accurately.",
};

export default function PersonalLoanCalculatorPage() {
  const faqs = [
    {
      question: "What is a personal loan?",
      answer:
        "A personal loan is an unsecured loan borrowed for personal needs. EMI depends on loan amount, interest rate, and tenure.",
    },
    {
      question: "How to calculate personal loan EMI?",
      answer:
        "You can calculate it using the loan amount, interest rate, and tenure with the EMI formula or using this calculator on the page.",
    },
    {
      question: "Can I use this calculator for any country?",
      answer:
        "Yes, this calculator supports global currencies and can be used to estimate EMIs worldwide.",
    },
    {
      question: "Does this calculator charge fees?",
      answer:
        "No, this tool is free to use and does not charge any fees.",
    },
    {
      question: "What factors affect personal loan EMI?",
      answer:
        "Loan amount, interest rate, and tenure significantly affect your personal loan EMI.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">

      {/* Schema: Calculator */}
      <Script
        id="personal-loan-calculator-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Personal Loan Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            url: "https://calctoolsfinance.com/calculators/personal-loan",
            description:
              "Free Personal Loan EMI calculator to estimate your monthly installment accurately.",
          }),
        }}
      />

      {/* Schema: FAQ */}
      <Script
        id="personal-loan-faq-schema"
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
        <h1 className="text-3xl font-bold">Personal Loan Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your personal loan EMI instantly. Adjust loan amount,
          interest rate, and tenure to see your monthly installment.
        </p>
      </header>

      {/* Calculator */}
      <section className="border rounded-xl p-6">
        <EmiCalculator
          maxPrincipal={10_000_000_000}
          maxTenure={84}
          maxInterest={36}
          presetLabel="Personal Loan"
        />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Personal Loan Calculator – FAQs
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="pl-1">
            <AccordionTrigger>
              What is a personal loan EMI?
            </AccordionTrigger>
            <AccordionContent>
              A personal loan EMI is the fixed monthly payment you make to repay a
              personal loan, including both principal and interest.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pl-2">
            <AccordionTrigger>
              What is the typical tenure for personal loans?
            </AccordionTrigger>
            <AccordionContent>
              Personal loan tenure usually ranges from 12 to 60 months, depending
              on the lender and borrower eligibility.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pl-3">
            <AccordionTrigger>
              Why is personal loan interest higher than home loans?
            </AccordionTrigger>
            <AccordionContent>
              Personal loans are unsecured, meaning no collateral is required.
              This higher risk results in higher interest rates compared to
              secured loans.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pl-4">
            <AccordionTrigger>
              Can I prepay my personal loan to reduce EMI?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Partial or full prepayments can reduce outstanding principal
              and total interest, though some lenders may charge prepayment fees.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
