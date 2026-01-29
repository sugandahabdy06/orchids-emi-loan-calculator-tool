"use client";

import Link from "next/link";
import EmiCalculator from "@/components/EmiCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomeLoanClient() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      {/* Back */}
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
          Estimate your mortgage EMI easily for property and housing loans.
        </p>
      </header>

      {/* Calculator */}
      <EmiCalculator
        maxPrincipal={10_000_000_000}
        maxTenure={360}
        maxInterest={18}
        presetLabel="Home Loan"
      />

      {/* FAQ UI */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Home Loan Calculator – FAQs
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="hl-1">
            <AccordionTrigger>What is a home loan?</AccordionTrigger>
            <AccordionContent>
              A home loan is a secured loan used to buy or renovate property.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hl-2">
            <AccordionTrigger>What is the typical tenure?</AccordionTrigger>
            <AccordionContent>
              Home loans usually have tenures up to 30 years.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="hl-3">
            <AccordionTrigger>Does longer tenure reduce EMI?</AccordionTrigger>
            <AccordionContent>
              Yes, but it increases total interest paid.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
