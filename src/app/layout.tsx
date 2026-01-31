import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "EMI & Loan Calculator | Calculate Monthly Payments Instantly",
  description:
    "Free EMI & loan calculator to estimate monthly payments, total interest, and loan breakdown instantly.",
  keywords: [
    "EMI calculator",
    "loan calculator",
    "mortgage calculator",
    "EMI calculation",
    "monthly installment calculator",
  ],
  robots: {
    index: true,
    follow: true,
  },
};
 other: {
    "impact-site-verification": "ea3403de-faf0-4789-9378-d649cb2d5e9a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
