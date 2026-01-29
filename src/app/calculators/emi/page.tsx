import type { Metadata } from "next";
import Script from "next/script";
import EmiClient from "./EmiClient";

export const metadata: Metadata = {
  title: "EMI Calculator – Calculate Loan EMI Online",
  description:
    "Free EMI calculator to calculate monthly loan payments based on loan amount, interest rate, and tenure.",
};

const faqs = [
  {
    q: "What is EMI?",
    a: "EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay a loan.",
  },
  {
    q: "How is EMI calculated?",
    a: "EMI depends on loan amount, interest rate, and tenure.",
  },
  {
    q: "Does EMI include interest?",
    a: "Yes, EMI includes both principal and interest components.",
  },
];

export default function EmiPage() {
  return (
    <>
      {/* Software Schema */}
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
            url: "https://calctoolsfinance.com/calculators/emi",
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
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />

      <EmiClient />
    </>
  );
}
