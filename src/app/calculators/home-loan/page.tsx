"use client";

import Link from "next/link";
import EmiCalculator from "@/components/EmiCalculator";

export default function HomeLoanCalculatorPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      {/* Back to Home */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Home
      </Link>

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Home Loan Calculator</h1>
        <p className="text-muted-foreground">
          Estimate your home loan EMI easily. Perfect for mortgage and KPR
          planning with long tenure and large loan amounts.
        </p>
      </header>

      {/* Calculator */}
      <EmiCalculator
        maxPrincipal={10_000_000_000}
        maxTenure={360}
        maxInterest={18}
        presetLabel="Home Loan"
      />
    </main>
  );
}
