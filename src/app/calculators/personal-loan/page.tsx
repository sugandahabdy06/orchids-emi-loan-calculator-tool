import type { Metadata } from "next";
import Script from "next/script";
import PersonalLoanClient from "./PersonalLoanClient";
import Link from "next/link";

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
      {/* ========= SCHEMA ========= */}
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

      {/* ========= TOOL ========= */}
      <PersonalLoanClient />

      {/* ========= LONG CONTENT ========= */}
      <section className="container mx-auto px-4 py-16 max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold">
          Personal Loan EMI Calculator Explained
        </h2>

        <p className="text-muted-foreground">
          Personal loans are unsecured loans commonly used for emergencies,
          travel, medical expenses, or debt consolidation. Since these loans do
          not require collateral, interest rates are usually higher than home
          or auto loans.
        </p>

        <p className="text-muted-foreground">
          This personal loan calculator helps you estimate monthly EMI so you
          can evaluate affordability before choosing a lender.
        </p>

        <h3 className="text-xl font-semibold">
          Factors Affecting Personal Loan EMI
        </h3>

        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Loan amount borrowed</li>
          <li>Annual interest rate</li>
          <li>Loan tenure</li>
          <li>Your credit score</li>
        </ul>

        <h3 className="text-xl font-semibold">
          When Should You Use a Personal Loan?
        </h3>

        <p className="text-muted-foreground">
          Personal loans are ideal for short to medium-term financing needs
          where flexibility is required and collateral is unavailable.
        </p>

        <p className="text-sm text-muted-foreground">
          Want to compare with other loans? Use our{" "}
          <Link href="/calculators/emi" className="underline">
            EMI Calculator
          </Link>{" "}
          for a broader overview.
        </p>
      </section>
    </>
  );
}
