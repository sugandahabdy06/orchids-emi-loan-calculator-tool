"use client";

import Link from "next/link";
import Script from "next/script";
import EmiCalculator from "@/components/EmiCalculator";

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
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-6">

      {/* FAQ Schema + Calculator Schema */}
      <Script
        id="calculator-schema"
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
            description: "Free Personal Loan EMI calculator — estimate your monthly installment quickly and accurately."
          }),
        }}
      />
      <Script
        id="faq-schema"
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
      <EmiCalculator
        maxPrincipal={10_000_000_000}
        maxTenure={84}
        maxInterest={36}
        presetLabel="Personal Loan"
      />
    </main>
  );
}
