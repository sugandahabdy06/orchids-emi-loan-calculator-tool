import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How EMI Works | Understanding Equated Monthly Installments",
  description:
    "Learn how EMI works, how it is calculated, factors affecting EMI, and tips to reduce your loan burden. Simple, clear, and practical explanation.",
};

export default function HowEmiWorksPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Back to Home (Top) */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        ← Back to Home
      </Link>

      <article className="prose prose-neutral max-w-none">
        <h1>How EMI Works: Understanding Equated Monthly Installments</h1>

        <p>
          When applying for a loan—such as a home loan, car loan, or personal
          loan—you will often encounter the term <strong>EMI</strong>.
          EMI stands for <strong>Equated Monthly Installment</strong>, which is
          the fixed amount you pay every month to repay your loan over a specific
          period.
        </p>

        <p>
          Understanding how EMI works helps you manage your finances better,
          compare loan options confidently, and avoid unnecessary financial
          stress in the future.
        </p>

        <h2>What Is EMI?</h2>
        <p>
          An <strong>EMI (Equated Monthly Installment)</strong> is a monthly
          payment made to the lender that includes both the{" "}
          <strong>principal</strong> and the <strong>interest</strong>. These
          payments continue until the loan is fully repaid.
        </p>

        <ul>
          <li>
            <strong>Principal</strong>: The original loan amount borrowed
          </li>
          <li>
            <strong>Interest</strong>: The cost charged by the lender for lending
            money
          </li>
          <li>
            <strong>Tenure</strong>: The total loan duration, usually in months
            or years
          </li>
        </ul>

        <h2>EMI Formula Explained</h2>
        <p>
          Lenders use a standard mathematical formula to calculate EMI. The
          formula ensures that your monthly payment remains constant throughout
          the loan tenure.
        </p>

        <pre>
          <code>
            EMI = [P × R × (1 + R)^N] / [(1 + R)^N – 1]
          </code>
        </pre>

        <p>Where:</p>
        <ul>
          <li>
            <strong>P</strong> = Loan amount (principal)
          </li>
          <li>
            <strong>R</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)
          </li>
          <li>
            <strong>N</strong> = Loan tenure in months
          </li>
        </ul>

        <h2>How EMI Payments Change Over Time</h2>
        <p>
          In the early stages of the loan, a larger portion of your EMI goes
          toward paying interest. As the loan progresses, the interest component
          decreases, and more of your payment goes toward reducing the principal.
        </p>

        <h2>Factors That Affect Your EMI</h2>

        <h3>1. Loan Amount</h3>
        <p>
          Higher loan amounts lead to higher EMIs, assuming the interest rate and
          tenure remain unchanged.
        </p>

        <h3>2. Interest Rate</h3>
        <p>
          Even a small change in interest rate can significantly impact your
          EMI. Lower interest rates reduce your monthly payment and overall loan
          cost.
        </p>

        <h3>3. Loan Tenure</h3>
        <p>
          Longer tenures reduce EMI but increase the total interest paid. Shorter
          tenures increase EMI but help you save on interest in the long run.
        </p>

        {/* 🔗 INTERNAL LINK (Contextual - SEO Strong) */}
        <h2>Calculate Your EMI Instantly</h2>
        <p>
          Instead of calculating EMI manually, you can use our free and accurate{" "}
          <Link
            href="/calculators/emi"
            className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
          >
            EMI Calculator
          </Link>{" "}
          to estimate your monthly installment, total interest, and total
          repayment amount instantly.
        </p>

        <p>
          Simply enter the loan amount, interest rate, and tenure to see real-time
          results tailored to your financial needs.
        </p>

        <h2>Tips to Reduce Your EMI Burden</h2>
        <ul>
          <li>Make a higher down payment</li>
          <li>Choose a shorter loan tenure if affordable</li>
          <li>Refinance your loan when interest rates decrease</li>
          <li>Make partial prepayments whenever possible</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Understanding how EMI works empowers you to make smarter financial
          decisions. Always calculate your EMI before taking a loan to ensure it
          fits comfortably within your budget.
        </p>

        {/* 🔘 CTA BUTTON (Conversion Focused) */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/calculators/emi"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Calculate EMI Now →
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium hover:bg-muted transition"
          >
            ← Back to Home
          </Link>
        </div>
      </article>
    </main>
  );
}
