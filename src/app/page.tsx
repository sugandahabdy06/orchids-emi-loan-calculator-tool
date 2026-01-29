import Link from "next/link";
import { Calculator } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "EMI & Loan Calculator – Free Online Loan Tools",
  description:
    "Free EMI & loan calculators to estimate monthly payments for personal loans, home loans, and mortgages. Accurate, fast, and easy to use.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex flex-col">
      {/* ================= HEADER ================= */}
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

      {/* ================= MAIN ================= */}
      <main className="container mx-auto flex-1 px-4 py-12 space-y-20">
        {/* ===== HERO ===== */}
        <section className="text-center space-y-5">
          <h1 className="text-4xl font-bold tracking-tight">
            EMI & Loan Calculator
          </h1>

          <p className="max-w-2xl mx-auto text-muted-foreground">
            Calculate EMI for personal loans, home loans, and mortgages using
            accurate, bank-standard formulas. Free, fast, and easy to use.
          </p>

          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <Link
              href="/calculators/emi"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
            >
              Calculate EMI
            </Link>

            <Link
              href="/how-emi-works"
              className="px-6 py-3 rounded-lg border font-medium"
            >
              How EMI Works
            </Link>
          </div>
        </section>

        {/* ===== CALCULATORS ===== */}
        <section>
          <h2 className="text-2xl font-bold mb-2">
            Free Loan Calculators
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Choose a calculator to estimate your monthly EMI, total interest,
            and repayment schedule accurately.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/calculators/emi"
              className="border p-6 rounded-xl hover:shadow-sm transition"
            >
              <h3 className="font-semibold mb-2">EMI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate monthly EMI for any loan amount, interest rate, and
                tenure using standard reducing balance formulas.
              </p>
            </Link>

            <Link
              href="/calculators/personal-loan"
              className="border p-6 rounded-xl hover:shadow-sm transition"
            >
              <h3 className="font-semibold mb-2">
                Personal Loan Calculator
              </h3>
              <p className="text-sm text-muted-foreground">
                Estimate personal loan EMI instantly. Suitable for short-term
                unsecured loans with flexible tenure.
              </p>
            </Link>

            <Link
              href="/calculators/home-loan"
              className="border p-6 rounded-xl hover:shadow-sm transition"
            >
              <h3 className="font-semibold mb-2">
                Home Loan Calculator
              </h3>
              <p className="text-sm text-muted-foreground">
                Calculate home loan or mortgage EMI for long-term property
                financing up to 30 years.
              </p>
            </Link>
          </div>
        </section>

        {/* ===== TRUST / EDUCATION (SEO BOOST) ===== */}
        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-xl font-semibold">
            Accurate, Transparent & Free
          </h2>
          <p className="text-muted-foreground">
            All calculators on CalcToolsFinance use industry-standard EMI
            formulas commonly applied by banks and financial institutions.
            Results are estimates intended for planning and comparison purposes.
          </p>

          <p className="text-sm text-muted-foreground">
            Learn more about EMI concepts in our{" "}
            <Link href="/how-emi-works" className="underline">
              detailed EMI guide
            </Link>
            .
          </p>
        </section>
      </main>

      {/* ================= FOOTER (LEGAL) ================= */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground flex flex-col md:flex-row gap-3 md:gap-6 justify-between items-center">
          <p>
            © {new Date().getFullYear()} CalcToolsFinance. All rights reserved.
          </p>

          <nav className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-foreground">
              Disclaimer
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
