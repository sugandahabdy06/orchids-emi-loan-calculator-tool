"use client";

import EmiCalculator from "@/components/EmiCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EmiClient() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">EMI Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your monthly loan EMI instantly.
        </p>
      </header>

      <EmiCalculator
        maxPrincipal={1_000_000_000}
        maxTenure={360}
        maxInterest={30}
        presetLabel="EMI"
      />

      <section className="max-w-3xl mx-auto pt-10">
        <h2 className="text-2xl font-bold text-center mb-6">EMI FAQs</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="emi-1">
            <AccordionTrigger>What is EMI?</AccordionTrigger>
            <AccordionContent>
              EMI is the fixed monthly payment made towards loan repayment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="emi-2">
            <AccordionTrigger>Does EMI change over time?</AccordionTrigger>
            <AccordionContent>
              For fixed-rate loans, EMI remains constant.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="emi-3">
            <AccordionTrigger>Can I reduce my EMI?</AccordionTrigger>
            <AccordionContent>
              Yes, by increasing tenure or prepaying part of the loan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
