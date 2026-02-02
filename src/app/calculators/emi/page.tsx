import type { Metadata } from "next";
import Script from "next/script";
import EmiClient from "./EmiClient";
import Link from "next/link";
import InPagePush from "@/components/InPagePush";

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
      {/* ========= SCHEMA ========= */}
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
      <EmiClient />

      {/* ========= IN-PAGE PUSH (SAFE PLACEMENT) ========= */}
      <InPagePush />
      
      {/* ========= LONG CONTENT (CRITICAL) ========= */}
      <section className="container mx-auto px-4 py-16 max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold">
          How EMI Calculator Helps You Plan Loans Better
        </h2>

        <p className="text-muted-foreground">
          An EMI calculator is an essential financial planning tool that helps
          borrowers estimate their monthly loan repayment before applying for a
          loan. By entering the loan amount, interest rate, and tenure, you can
          instantly understand how much you need to pay every month.
        </p>

        <p className="text-muted-foreground">
          This calculator uses the standard reducing balance formula followed by
          banks and NBFCs. The EMI amount includes both principal repayment and
          interest, giving you a realistic estimate of your financial
          commitment.
        </p>

        <h3 className="text-xl font-semibold">
          Why EMI Calculation Is Important
        </h3>

        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Helps assess loan affordability</li>
          <li>Allows comparison between loan offers</li>
          <li>Prevents over-borrowing</li>
          <li>Improves monthly budget planning</li>
        </ul>

        <h3 className="text-xl font-semibold">
          Types of Loans Using EMI
        </h3>

        <p className="text-muted-foreground">
          EMI applies to various loan types including personal loans, home
          loans, car loans, education loans, and business loans. Each loan type
          differs in interest rates and tenure, which directly impacts the EMI.
        </p>

        <p className="text-sm text-muted-foreground">
          Looking for specific tools? Try our{" "}
          <Link href="/calculators/personal-loan" className="underline">
            Personal Loan Calculator
          </Link>{" "}
          or{" "}
          <Link href="/calculators/home-loan" className="underline">
            Home Loan Calculator
          </Link>
          .
        </p>
      </section>
    </>
  );
}
