"use client";

import Link from "next/link";
import Script from "next/script";
import EmiCalculator from "@/components/EmiCalculator";

export default function HomeLoanCalculatorPage() {
  const faqs = [
    {
      question: "What is a home loan?",
      answer:
        "A home loan (mortgage) is a long-term loan used to buy or renovate a property. Your monthly payment depends on interest rate and tenure.",
    },
    {
      question: "How is home loan EMI calculated?",
      answer:
        "The EMI is calculated using the loan amount, interest rate, and tenure. This calculator helps estimate your monthly payment accurately.",
    },
    {
      question: "How long is home loan tenure?",
      answer:
        "Home loan tenures are typically between 5 to 30 years, which affects total interest and monthly EMI.",
    },
    {
      question: "Can this be used for mortgage comparison?",
      answer:
        "Yes, you can use this calculator to compare different mortgage terms and interest rates for informed decisions.",
    },
    {
      question: "Does this include insurance or property tax?",
      answer:
        "No. This calculator estimates EMI based on principal and interest only. Insurance and property taxes must be added separately.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-6">

      {/* FAQ & Calculator Schema */}
      <Script
        id="calculator-schema"
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
            description: "Free Home Loan EMI calculator — estimate mortgage monthly payments accurately.",
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
        <h1 className="text-3xl font-bold">Home Loan Calculator</h1>
        <p className="text-muted-foreground">
          Estimate your home loan EMI easily — ideal for mortgage and property planning.
        </p>
      </header>

      {/* Calculator */}
      <EmiCalculator
        maxPrincipal={10_000_000_000}
        maxTenure={360}
        maxInterest={18}
        presetLabel="Home Loan"
      />
    </main>
  );
}
