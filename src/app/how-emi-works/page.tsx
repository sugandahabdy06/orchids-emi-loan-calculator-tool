import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How EMI Works | Understanding Equated Monthly Installments",
  description:
    "Learn how EMI works, how it is calculated, factors affecting EMI, and tips to reduce your loan burden. Simple and clear explanation.",
};

export default function HowEmiWorksPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <article className="prose prose-neutral max-w-none">
        <h1>How EMI Works – Understanding Equated Monthly Installments</h1>

        <p>
          When applying for a loan—such as a home loan, car loan, or personal
          loan—you will often come across the term <strong>EMI</strong>. EMI
          stands for <strong>Equated Monthly Installment</strong>, which is the
          fixed amount you pay every month to repay your loan over a specific
          period.
        </p>

        <p>
          Understanding how EMI works allows you to manage your finances better,
          compare loan options, and avoid unnecessary financial stress in the
          future.
        </p>

        <h2>What Is EMI?</h2>
        <p>
          An <strong>EMI (Equated Monthly Installment)</strong> is a combination
          of both <strong>principal</strong> and <strong>interest</strong> paid
          to the lender every month until the loan is fully repaid.
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
            <strong>Tenure</strong>: The total loan duration in months or years
          </li>
        </ul>

        <h2>EMI Formula Explained</h2>
        <p>The standard formula used to calculate EMI is:</p>

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

        <p>
          This formula ensures that your monthly payment remains constant,
          although the portion of interest and principal changes over time.
        </p>

        <h2>How EMI Payments Change Over Time</h2>
        <p>
          In the initial phase of the loan, a larger part of your EMI goes toward
          paying interest. As time passes, the interest portion gradually
          decreases, and more of your EMI is used to repay the principal.
        </p>

        <p>
          This repayment structure is known as <strong>loan amortization</strong>.
        </p>

        <h2>Factors That Affect Your EMI</h2>

        <h3>1. Loan Amount</h3>
        <p>
          A higher loan amount results in a higher EMI, assuming the interest
          rate and tenure remain the same.
        </p>

        <h3>2. Interest Rate</h3>
        <p>
          Even a small change in interest rate can significantly impact your EMI.
          Lower interest rates reduce your monthly payment.
        </p>

        <h3>3. Loan Tenure</h3>
        <p>
          A longer tenure reduces EMI but increases the total interest paid. A
          shorter tenure increases EMI but saves money on interest.
        </p>

        <h2>Fixed vs Floating Interest Rates</h2>
        <ul>
          <li>
            <strong>Fixed Rate</strong>: EMI remains the same throughout the loan
            tenure
          </li>
          <li>
            <strong>Floating Rate</strong>: EMI may increase or decrease based on
            market interest rates
          </li>
        </ul>

        <p>
          Floating rates can be beneficial when interest rates fall but carry
          risk if rates rise.
        </p>

        <h2>Why Use an EMI Calculator?</h2>
        <p>An EMI calculator helps you:</p>
        <ul>
          <li>Estimate monthly payments instantly</li>
          <li>Compare different loan options</li>
          <li>Plan your monthly budget effectively</li>
          <li>Understand the total cost of the loan</li>
        </ul>

        <p>
          By adjusting loan amount, tenure, or interest rate, you can find a
          repayment plan that suits your financial situation.
        </p>

        <h2>EMI vs Total Loan Cost</h2>
        <p>
          While EMI shows your monthly obligation, you should also consider the
          total amount payable over the loan period, including total interest
          and additional charges if any.
        </p>

        <h2>Tips to Reduce Your EMI Burden</h2>
        <ul>
          <li>Make a higher down payment</li>
          <li>Choose a shorter loan tenure if affordable</li>
          <li>Refinance when interest rates decrease</li>
          <li>Make partial prepayments whenever possible</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Understanding how EMI works helps you make informed financial
          decisions. Always calculate your EMI before taking a loan to ensure
          it fits comfortably within your budget.
        </p>

        <p>
          Use our <strong>EMI Calculator</strong> to calculate your monthly
          installments quickly and accurately.
        </p>
      </article>
    </main>
  );
}
