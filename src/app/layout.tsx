import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "EMI & Loan Calculator | Calculate Monthly Payments Instantly",
  description:
    "Free online EMI calculator for home loans, car loans, and mortgages. Calculate monthly installments, total interest, and payment schedules instantly with our easy-to-use calculator.",
  keywords: [
    "EMI calculator",
    "loan calculator",
    "mortgage calculator",
    "home loan EMI",
    "car loan calculator",
    "personal loan EMI",
    "monthly payment calculator",
  ],
  openGraph: {
    title: "EMI & Loan Calculator | Calculate Monthly Payments Instantly",
    description:
      "Free online EMI calculator for home loans, car loans, and mortgages. Calculate your monthly payments instantly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMI & Loan Calculator",
    description:
      "Calculate loan EMI, total interest, and payment breakdowns instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="afterInteractive"
            data-orchids-project-id="0f40e603-cdc2-4568-b56f-ac258f423d30"
          />
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}
