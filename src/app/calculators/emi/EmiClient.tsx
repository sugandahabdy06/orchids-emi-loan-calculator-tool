"use client";

import EmiCalculator from "@/components/EmiCalculator";
import CheersCta from "@/components/CheersCta";
import { AFFILIATE_LINKS } from "@/lib/affiliateLinks";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EmiClient() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* ======================
          PAGE HEADER
      ====================== */}
      <header>
        <h1 className="text-3xl font-bold">EMI Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your monthly loan EMI instantly.
        </p>
      </header>

      {/* ======================
          AFFILIATE CTA (TOP)
          SAFE FOR SEO & ADSENSE
      ====================== */}
      <CheersCta
        title="Calculate EMI — Then Get the Best Loan Offer"
        subtitle="Compare trusted lenders. Fast approval. No hidden fees."
        buttonText="Apply Loan Instantly"
        link={AFFILIATE_LINKS.cheersBuildFast}
      />

      {/* ======================
          EMI CALCULATOR
      ====================== */}
      <EmiCalculator
        variant="emi"
        maxPrincipal={1_000_000_000}
        maxTenure={360}
        maxInterest={30}
        presetLabel="EMI"
      />

      {/* ======================
          AFFILIATE CTA (AFTER RESULT)
          HIGH CONVERSION ZONE
      ====================== */}
      <CheersCta
        title="Your EMI Is Ready — Want a Better Rate?"
        subtitle="Based on your calculation, you may qualify for better loan offers."
        buttonText="Check Eligible Loan Offers"
        link={AFFILIATE_LINKS.cheersBuildFast}
      />

      {/* ======================
          FAQ SECTION
      ====================== */}
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
