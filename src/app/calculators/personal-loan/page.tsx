"use client";

import Link from "next/link";
import EmiCalculator from "@/components/EmiCalculator";

export default function PersonalLoanCalculatorPage() {
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
        <h1 className="text-3xl font-bold">Personal Loan Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your personal loan EMI instantly. Adjust loan amount,
          interest rate, and tenure to see your monthly installment.
        </p>
      </header>

      {/* Calculator */}
      <EmiCalculator
        maxPrincipal={10_000_000_000}
        maxTenure={84}
        maxInterest={36}
        presetLabel="Personal Loan"
      />
    </main>
  );
}
