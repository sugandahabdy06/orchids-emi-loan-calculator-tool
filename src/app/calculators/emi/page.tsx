import type { Metadata } from "next";
import EmiCalculator from "@/components/EmiCalculator";
import Script from "next/script";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "EMI Calculator – Calculate Loan EMI Online (Free)",
  description:
    "Use our free EMI Calculator to calculate monthly EMI for home loans, personal loans, car loans, and mortgages accurately.",
};

const faqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI (Equated Monthly Installment) is a fixed monthly payment made to repay a loan, consisting of both principal and interest.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is calculated using a standard formula based on loan amount, interest rate, and loan tenure.",
  },
  {
    question: "Is this EMI calculator accurate?",
    answer:
      "This calculator provides estimates using standard reducing balance methods used by banks.",
  },
];

export default function EmiCalculatorPage() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-5xl space-y-14">
      {/* Schema: Software */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "EMI Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
          }),
        }}
      />

      {/* Schema: FAQ */}
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

      {/* Intro */}
      <section>
        <h1 className="text-3xl font-bold mb-3">EMI Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your monthly EMI using our free and accurate EMI Calculator.
        </p>
      </section>

      {/* Calculator */}
      <section className="border rounded-xl p-6">
        <EmiCalculator />
      </section>

      {/* Content */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What is EMI?</h2>
        <p className="text-muted-foreground">
          EMI stands for Equated Monthly Installment. It is the fixed amount paid
          monthly to repay a loan over a specified tenure.
        </p>

        <p>
          Learn more in{" "}
          <Link href="/how-emi-works" className="underline font-medium">
            how EMI works →
          </Link>
        </p>
      </section>

      {/* FAQ Visual */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          EMI Calculator – Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="emi-1">
            <AccordionTrigger>
              What is EMI and how does it work?
            </AccordionTrigger>
            <AccordionContent>
              EMI (Equated Monthly Installment) is a fixed monthly payment used to
              repay a loan. Each EMI includes both principal repayment and
              interest, with the interest portion reducing over time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="emi-2">
            <AccordionTrigger>
              Is this EMI calculator accurate?
            </AccordionTrigger>
            <AccordionContent>
              Yes. This calculator uses the standard reducing balance method
              commonly used by banks and financial institutions. Results are
              estimates and may vary slightly based on lender policies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="emi-3">
            <AccordionTrigger>
              Can I use this EMI calculator for any country?
            </AccordionTrigger>
            <AccordionContent>
              Yes. This EMI calculator supports multiple currencies and can be
              used globally for estimating loan repayments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="emi-4">
            <AccordionTrigger>
              Does longer tenure always mean lower EMI?
            </AccordionTrigger>
            <AccordionContent>
              Longer tenure usually reduces monthly EMI but increases the total
              interest paid over the loan period.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
