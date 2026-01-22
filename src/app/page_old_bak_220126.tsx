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
  title: "EMI Calculator | Loan & Mortgage EMI Calculator Online (Free)",
  description:
    "Free EMI calculator to estimate loan and mortgage monthly payments instantly. Calculate EMI, interest, and total repayment easily for any loan type.",
};

/* =======================
   FAQ DATA
======================= */
const faqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI (Equated Monthly Installment) is a fixed monthly payment made by a borrower to repay a loan. It includes both principal and interest components.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is calculated using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), where P is the loan amount, r is the monthly interest rate, and n is the number of months.",
  },
  {
    question: "What factors affect my EMI?",
    answer:
      "Loan amount, interest rate, and loan tenure are the main factors. Higher interest rates and loan amounts increase EMI, while longer tenures reduce EMI but increase total interest.",
  },
  {
    question: "Is this EMI calculator accurate?",
    answer:
      "This calculator provides estimated results for informational purposes only. Actual EMI values may vary based on lender policies and additional fees.",
  },
  {
    question: "Can I use this calculator for any country?",
    answer:
      "Yes. This calculator supports multiple currencies and can be used globally for estimating loan EMIs.",
  },
];

/* =======================
   FAQ SCHEMA
======================= */
const faqSchema = {
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

/* =======================
   CALCULATOR SCHEMA
======================= */
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EMI & Loan Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="calculator-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
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
              Instantly calculate your monthly EMI for home loans, car loans,
              personal loans, and mortgages with accurate estimates.
            </p>
          </section>

          {/* 🔹 Ad Slot – Top (Adsense ready) */}
          <div className="my-6 min-h-[90px]" />

          {/* Calculator */}
          <EmiCalculator />

          {/* 🔹 Ad Slot – Mid */}
          <div className="my-10 min-h-[250px]" />

          {/* How To */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-center">
              How to Use the EMI Calculator
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Enter your loan details below to view your estimated EMI and
              repayment breakdown.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-16">
              {[
                ["Loan Amount", "Enter the total amount you want to borrow."],
                ["Interest Rate", "Set the annual interest rate from your lender."],
                ["Loan Tenure", "Choose the loan duration in months."],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className="rounded-xl border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 🔹 Ad Slot – Pre FAQ */}
          <div className="my-10 min-h-[250px]" />

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
              This calculator provides estimates only and does not constitute
              financial advice. Actual loan terms may vary.
            </p>
            <div className="mt-2 flex justify-center gap-4 text-xs">
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
              <a href="/terms" className="underline">
                Terms
              </a>
              <a href="/disclaimer" className="underline">
                Disclaimer
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
