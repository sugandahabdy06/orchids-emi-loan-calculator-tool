import Link from "next/link";
import { Calculator } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "EMI & Loan Calculator – Free Online Loan Tools",
  description:
    "Free EMI & loan calculators to estimate monthly payments for personal loans, home loans, and car loans. Accurate and easy to use.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Calculator className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold">CalcToolsFinance</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            EMI & Loan Calculator
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Calculate EMI for personal loans, home loans, car loans, and mortgages
            using accurate and easy-to-use financial calculators.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/calculators/emi"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground"
            >
              Calculate EMI
            </Link>
            <Link
              href="/how-emi-works"
              className="px-6 py-3 rounded-lg border"
            >
              How EMI Works
            </Link>
          </div>
        </section>

        {/* Calculators */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Loan Calculators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/calculators/emi" className="border p-6 rounded-xl">
              <h3 className="font-semibold">EMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate monthly EMI instantly.
              </p>
            </Link>

            <Link
              href="/calculators/personal-loan"
              className="border p-6 rounded-xl"
            >
              <h3 className="font-semibold">Personal Loan Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Estimate EMI for personal loans.
              </p>
            </Link>

            <Link
              href="/calculators/home-loan"
              className="border p-6 rounded-xl"
            >
              <h3 className="font-semibold">Home Loan Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate EMI for home loans.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
