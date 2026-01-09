export const metadata = {
  title: "Terms of Service | EMI & Loan Calculator",
  description: "Terms of service for EMI & Loan Calculator.",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>

      <p>
        By accessing and using this website, you agree to be bound by these
        Terms of Service.
      </p>

      <h2 className="text-xl font-semibold">Use of the Calculator</h2>
      <p>
        The EMI and loan calculator is provided for informational purposes only.
        Calculations are estimates and may not reflect actual loan terms.
      </p>

      <h2 className="text-xl font-semibold">No Financial Advice</h2>
      <p>
        This website does not provide financial, legal, or professional advice.
        Users should consult qualified professionals before making financial
        decisions.
      </p>

      <h2 className="text-xl font-semibold">Limitation of Liability</h2>
      <p>
        We are not responsible for any losses or damages arising from the use
        of this website or reliance on the calculated results.
      </p>

      <h2 className="text-xl font-semibold">Changes to Terms</h2>
      <p>
        These Terms may be updated at any time without prior notice.
      </p>
    </main>
  );
}
