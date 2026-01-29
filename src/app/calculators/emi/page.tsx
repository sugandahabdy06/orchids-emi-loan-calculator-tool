import EmiCalculator from "@/components/EmiCalculator";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "EMI Calculator – Calculate Loan EMI Online (Free)",
  description:
    "Use our free EMI Calculator to calculate monthly EMI for home loans, personal loans, car loans, and mortgages accurately.",
};

const faqs = [
  {
    question: "What is EMI?",
    answer:
      "EMI (Equated Monthly Installment) is a fixed monthly payment made to repay a loan, consisting of both principal and interest.",
  },
  {
    question: "How is EMI calculated?",
    answer:
      "EMI is calculated using a standard formula based on loan amount, interest rate, and loan tenure.",
  },
  {
    question: "Is this EMI calculator accurate?",
    answer:
      "This calculator provides estimates using standard reducing balance methods used by banks.",
  },
];

export default function EmiCalculatorPage() {
  return (
    <main className="container mx-auto px-4 py-10 max-w-5xl space-y-14">
      {/* Schema */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "EMI Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
          }),
        }}
      />

      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Intro */}
      <section>
        <h1 className="text-3xl font-bold mb-3">EMI Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your monthly EMI using our free and accurate EMI Calculator.
        </p>
      </section>

      {/* Calculator */}
      <section className="border rounded-xl p-6">
        <EmiCalculator />
      </section>

      {/* Content */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What is EMI?</h2>
        <p className="text-muted-foreground">
          EMI stands for Equated Monthly Installment. It is the fixed amount paid
          monthly to repay a loan over a specified tenure.
        </p>

        <p>
          Learn more in{" "}
          <Link
            href="/how-emi-works"
            className="underline font-medium"
          >
            how EMI works →
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <ul className="space-y-4">
          {faqs.map((faq, i) => (
            <li key={i}>
              <p className="font-semibold">{faq.question}</p>
              <p className="text-muted-foreground">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
