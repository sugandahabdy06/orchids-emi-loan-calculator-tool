import type { Metadata } from "next";
import Script from "next/script";
import HomeLoanClient from "./HomeLoanClient";

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
      {/* Calculator Schema */}
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

      {/* FAQ Schema */}
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

      <HomeLoanClient />
    </>
  );
}
