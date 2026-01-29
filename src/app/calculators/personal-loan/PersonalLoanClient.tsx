"use client";

import EmiCalculator from "@/components/EmiCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PersonalLoanClient() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Personal Loan Calculator</h1>
        <p className="text-muted-foreground">
          Estimate your personal loan EMI instantly.
        </p>
      </header>

      <EmiCalculator
        maxPrincipal={500_000_000}
        maxTenure={60}
        maxInterest={36}
        presetLabel="Personal Loan"
      />

      <section className="max-w-3xl mx-auto pt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Personal Loan FAQs
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="pl-1">
            <AccordionTrigger>Is a personal loan secured?</AccordionTrigger>
            <AccordionContent>
              No, personal loans are unsecured.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pl-2">
            <AccordionTrigger>Can I prepay my loan?</AccordionTrigger>
            <AccordionContent>
              Yes, most banks allow prepayment with minimal charges.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pl-3">
            <AccordionTrigger>Does this include fees?</AccordionTrigger>
            <AccordionContent>
              No, this calculator estimates EMI only.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
