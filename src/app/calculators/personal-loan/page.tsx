import type { Metadata } from "next";
import Script from "next/script";
import PersonalLoanClient from "./PersonalLoanClient";

export const metadata: Metadata = {
  title: "Personal Loan Calculator – Monthly EMI Estimator",
  description:
    "Calculate personal loan EMI easily using loan amount, interest rate, and tenure.",
};

const faqs = [
  {
    q: "What is a personal loan?",
    a: "A personal loan is an unsecured loan used for personal expenses.",
  },
  {
    q: "What is the interest rate on personal loans?",
    a: "Interest rates are higher compared to secured loans and vary by lender.",
  },
  {
    q: "What is the typical tenure?",
    a: "Personal loan tenure usually ranges from 1 to 5 years.",
  },
];

export default function PersonalLoanPage() {
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
            name: "Personal Loan Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            url: "https://calctoolsfinance.com/calculators/personal-loan",
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

      <PersonalLoanClient />
    </>
  );
}
