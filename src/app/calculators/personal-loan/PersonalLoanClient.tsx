"use client";

import { useState } from "react";
import EmiCalculator from "@/components/EmiCalculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PersonalLoanClient() {
  const [calculated, setCalculated] = useState(false);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">
          Personal Loan EMI Calculator
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calculate your personal loan EMI and plan smarter repayments.
        </p>
      </header>

      <EmiCalculator onCalculated={() => setCalculated(true)} />

      {/* ✅ CTA XTB MUNCUL SETELAH HITUNG */}
      {calculated && (
        <section className="border rounded-xl p-6 text-center space-y-4">
          <h3 className="text-xl font-semibold">
            Ready to Improve Your Financial Plan?
          </h3>
          <p className="text-muted-foreground">
            Many borrowers also explore regulated investment platforms to grow
            their wealth responsibly.
          </p>
        <div className="text-sm">
          <p className="font-medium">Learn to Grow Your Money</p>
          <p className="text-muted-foreground text-xs">
            Explore regulated investment options
          </p>
        </div>
          <a
            href="https://geolink.xtb.com/Vs9aG"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold"
          >
            Open XTB Real Account
          </a>

          <p className="text-xs text-muted-foreground">
            Capital at risk. Invest responsibly.
          </p>
        </section>
      )}

      {/* ======================
          FAQ SECTION
      ====================== */}
      <section className="max-w-3xl mx-auto pt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Personal Loan FAQs
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="pl-1">
            <AccordionTrigger>
              Is a personal loan secured?
            </AccordionTrigger>
            <AccordionContent>
              No. Personal loans are usually unsecured, meaning you don’t need
              to provide collateral such as property or vehicles.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pl-2">
            <AccordionTrigger>
              Can I prepay my personal loan?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Most lenders allow early repayment, although some may charge
              a small prepayment fee depending on the loan terms.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pl-3">
            <AccordionTrigger>
              Does this calculator include fees?
            </AccordionTrigger>
            <AccordionContent>
              No. This calculator estimates EMI based on loan amount, interest
              rate, and tenure only. Processing fees and other charges are not
              included.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
