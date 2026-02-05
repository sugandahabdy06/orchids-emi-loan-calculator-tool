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
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* ======================
          PAGE HEADER
      ====================== */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">
          Personal Loan EMI Calculator
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calculate your personal loan EMI and understand your monthly repayment
          before choosing the right financial option.
        </p>
      </header>

      {/* ======================
          EMI CALCULATOR
      ====================== */}
      <EmiCalculator
        maxPrincipal={500_000_000}
        maxTenure={60}
        maxInterest={36}
        presetLabel="Personal Loan"
      />

      {/* ======================
          SOFT EDUCATIONAL CTA (XTB)
      ====================== */}
      <section className="bg-muted/40 border rounded-xl p-6 text-center space-y-4">
        <h3 className="text-xl font-semibold">
          Planning a Loan? Learn How to Grow Your Money Too
        </h3>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          While managing your personal loan, many people also explore regulated
          investment platforms to build long-term financial stability.
        </p>

        <a
          href="https://geolink.xtb.com/Vs9aG"
          target="_blank"
          rel="nofollow sponsored noopener"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Explore XTB Real Account
        </a>

        <p className="text-xs text-muted-foreground">
          Capital at risk. Invest responsibly with regulated brokers.
        </p>
      </section>

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

      {/* ======================
          STICKY MOBILE CTA
      ====================== */}
      <StickyXtbCta />
    </main>
  );
}

/* ======================
   STICKY CTA COMPONENT
====================== */
function StickyXtbCta() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 md:hidden">
      <div className="relative flex items-center justify-between gap-3 rounded-xl border bg-background px-4 py-3 shadow-lg">
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-muted text-xs"
          aria-label="Close"
        >
          ✕
        </button>

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
          className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
        >
          Start
        </a>
      </div>
    </div>
  );
}
