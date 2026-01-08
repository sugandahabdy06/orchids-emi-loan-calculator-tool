import { EmiCalculator } from "@/components/EmiCalculator";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calculator } from "lucide-react";

const faqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is calculated using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), where P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12 and then by 100), and n is the number of monthly installments.",
  },
  {
    question: "What factors affect my EMI?",
    answer:
      "Three main factors affect your EMI: 1) Principal amount - the higher the loan amount, the higher the EMI. 2) Interest rate - higher rates mean higher EMIs. 3) Loan tenure - longer tenure reduces EMI but increases total interest paid.",
  },
  {
    question: "Is it better to have a longer or shorter loan tenure?",
    answer:
      "A shorter tenure means higher EMIs but lower total interest paid. A longer tenure reduces your monthly burden but increases the total interest. Choose based on your monthly cash flow and financial goals.",
  },
  {
    question: "Can I prepay my loan to reduce EMI?",
    answer:
      "Yes, most lenders allow prepayment or part-payment of loans. This can either reduce your EMI amount or shorten your loan tenure, depending on your preference. Check with your lender about any prepayment charges.",
  },
  {
    question: "What is the difference between flat rate and reducing balance EMI?",
    answer:
      "Flat rate interest is calculated on the entire principal throughout the loan tenure. Reducing balance interest is calculated on the outstanding principal, which decreases with each EMI payment. This calculator uses the reducing balance method, which is more common and borrower-friendly.",
  },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">EMI Calculator</span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 md:py-12">
          <section className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              EMI & Loan Calculator
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg">
              Calculate your monthly EMI for home loans, car loans, personal loans, and
              mortgages. Get instant results with detailed payment breakdowns.
            </p>
          </section>

          <EmiCalculator />

          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-center">
              How to Use This Calculator
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Simply enter your loan amount, interest rate, and tenure to instantly
              calculate your monthly EMI and see the complete payment breakdown.
            </p>

            <div className="grid gap-4 md:grid-cols-3 mb-16">
              <div className="rounded-xl border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Enter Loan Amount</h3>
                <p className="text-sm text-muted-foreground">
                  Use the slider or input the principal amount you wish to borrow.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Set Interest Rate</h3>
                <p className="text-sm text-muted-foreground">
                  Adjust the annual interest rate offered by your lender.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Choose Tenure</h3>
                <p className="text-sm text-muted-foreground">
                  Select the loan duration in months and see your EMI instantly.
                </p>
              </div>
            </div>
          </section>

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

        <footer className="border-t bg-muted/30 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              This calculator provides estimates for informational purposes only. Actual
              loan terms may vary based on your lender and credit profile.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
