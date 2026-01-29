import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How EMI Works | EMI Formula, Calculation & Examples",
  description:
    "Learn how EMI works, EMI formula, calculation method, factors affecting EMI, and tips to reduce loan EMI. Simple, clear, and practical guide.",
};

const faqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI stands for Equated Monthly Installment. It is the fixed monthly payment made to repay a loan, including both principal and interest.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is calculated using a mathematical formula based on loan amount, interest rate, and loan tenure.",
  },
  {
    question: "Does EMI change over time?",
    answer:
      "The EMI amount usually remains constant, but the proportion of interest and principal changes over the loan tenure.",
  },
  {
    question: "Which tenure is better, long or short?",
    answer:
      "Longer tenure reduces EMI but increases total interest. Shorter tenure increases EMI but reduces total interest paid.",
  },
];

export default function HowEmiWorksPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* Schema: Article */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How EMI Works",
            description:
              "Complete guide explaining how EMI works, EMI calculation, formula, and repayment structure.",
            author: {
              "@type": "Organization",
              name: "CalcToolsFinance",
            },
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

      {/* Back to Home */}
      <Link
        href="/"
        className="inline-flex text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Home
      </Link>

      {/* Title */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">
          How EMI Works – Complete Guide to Loan EMI
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          This guide explains what EMI is, how EMI works, how it is calculated,
          and how you can reduce your loan burden using smart repayment
          strategies.
        </p>
      </header>

      {/* Anchor Navigation */}
      <nav className="sticky top-16 z-20 bg-background/90 backdrop-blur border rounded-xl p-4 shadow-sm">
        <ul className="flex flex-wrap gap-4 text-sm font-medium">
          <li><a href="#what-is-emi">What is EMI?</a></li>
          <li><a href="#emi-formula">EMI Formula</a></li>
          <li><a href="#emi-structure">EMI Structure</a></li>
          <li><a href="#emi-factors">EMI Factors</a></li>
          <li><a href="#emi-calculator">EMI Calculator</a></li>
        </ul>
      </nav>

      {/* Content */}
      <article className="prose prose-neutral max-w-none leading-relaxed">
        <h2 id="what-is-emi">What Is EMI?</h2>
        <p>
          <strong>EMI (Equated Monthly Installment)</strong> is the fixed monthly
          payment made by a borrower to repay a loan over a specified tenure.
        </p>

        <h2 id="emi-formula">EMI Formula Explained</h2>
        <pre>
          <code>
            EMI = [P × R × (1 + R)^N] / [(1 + R)^N – 1]
          </code>
        </pre>

        <h2 id="emi-structure">How EMI Structure Works</h2>
        <p>
          Initially, most of the EMI goes toward interest. Over time, the
          principal portion increases while interest decreases. This is known
          as loan amortization.
        </p>

        <h2 id="emi-factors">Factors Affecting EMI</h2>
        <ul>
          <li>Loan Amount</li>
          <li>Interest Rate</li>
          <li>Loan Tenure</li>
        </ul>

        <h2 id="emi-calculator">Use an EMI Calculator</h2>
        <p>
          You can instantly calculate EMI by adjusting loan amount, interest
          rate, and tenure using our calculator.
        </p>

        <p>
          👉{" "}
          <Link href="/calculators/emi" className="font-semibold underline">
            Open EMI Calculator
          </Link>
        </p>
      </article>
    </main>
  );
}
