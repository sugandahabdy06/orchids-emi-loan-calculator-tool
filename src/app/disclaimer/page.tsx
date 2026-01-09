export const metadata = {
  title: "Disclaimer | EMI & Loan Calculator",
  description: "Disclaimer for EMI & Loan Calculator.",
};

export default function DisclaimerPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Disclaimer</h1>

      <p>
        The information provided by this calculator is for general informational
        purposes only.
      </p>

      <p>
        All results are estimates and should not be considered as exact figures.
        Actual loan terms, interest rates, fees, and repayment schedules may vary
        depending on the lender and borrower profile.
      </p>

      <p>
        We make no guarantees regarding the accuracy, completeness, or reliability
        of the calculated results.
      </p>

      <p>
        By using this website, you acknowledge that you do so at your own risk.
      </p>
    </main>
  );
}
