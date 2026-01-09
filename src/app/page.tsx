import { EmiCalculator } from "@/components/EmiCalculator";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calculator } from "lucide-react";
import Script from "next/script";

/* =======================
   SEO METADATA
======================= */
export const metadata = {
  title: "EMI & Loan Calculator – Calculate Monthly EMI Instantly",
  description:
    "Free EMI and loan calculator to estimate monthly installments for personal loans, home loans, car loans, and mortgages. Accurate, fast, and easy to use.",
};

/* =======================
   FAQ DATA
======================= */
const faqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs include both principal and interest components.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is calculated using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), where P is the loan amount, r is the monthly interest rate, and n is the number of monthly installments.",
  },
  {
    question: "What factors affect my EMI?",
    answer:
      "The three main factors affecting EMI are the loan amount, the interest rate, and the loan tenure. Higher loan amounts and interest rates increase EMI, while longer tenures reduce EMI but increase total interest paid.",
  },
  {
    question: "Is a longer or shorter loan tenure better?",
    answer:
      "Shorter tenures result in higher EMIs but lower total interest. Longer tenures reduce monthly EMI but increase the total interest paid. The right choice depends on your financial situation.",
  },
  {
    question: "Can I prepay my loan to reduce EMI?",
    answer:
      "Yes, most lenders allow loan prepayment or part payments. This can reduce your EMI or shorten the loan tenure, depending on how the prepayment is applied.",
  },
  {
    question: "What is the difference between flat rate and reducing balance EMI?",
    answer:
      "Flat rate interest is calculated on the full principal for the entire tenure, while reducing balance interest is calculated on the outstanding loan amount. This calculator uses the reducing balance method.",
  },
];

/* =======================
   FAQ JSON-LD
======================= */
const jsonLd = {
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
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                EMI Calculator
              </span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Main */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          {/* Hero */}
          <section className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              EMI & Loan Calculator
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg">
              Calculate your monthly EMI for home loans, car loans, personal loans,
              and mortgages with instant and accurate results.
            </p>
          </section>

          {/* Calculator */}
          <EmiCalculator />

          {/* How To */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-center">
              How to Use This Calculator
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Enter your loan details and instantly view your monthly EMI and
              repayment breakdown.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-16">
              <div className="rounded-xl border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Loan Amount</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the total amount you want to borrow.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Interest Rate</h3>
                <p className="text-sm text-muted-foreground">
                  Set the annual interest rate offered by your lender.
                </p>
              </div>

              <div className="rounded-xl border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Loan Tenure</h3>
                <p className="text-sm text-muted-foreground">
                  Choose the loan duration to calculate your EMI.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t bg-muted/30 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              This calculator is for informational purposes only. Actual loan
              terms may vary depending on the lender and borrower profile.
            </p>
          </div>
          <div className="mt-2 flex justify-center gap-4 text-xs">
            <a href="/privacy-policy" className="underline">Privacy Policy</a>
            <a href="/terms" className="underline">Terms</a>
            <a href="/disclaimer" className="underline">Disclaimer</a>
          </div>
        </footer>
      </div>
    </>
  );
}
