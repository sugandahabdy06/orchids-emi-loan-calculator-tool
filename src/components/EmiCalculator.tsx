"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CurrencySelect } from "@/components/CurrencySelect";
import {
  formatCurrency,
  getCurrencyFromCountry,
  detectCountryFromTimezone,
} from "@/lib/currency";
import { calculateEMI } from "@/lib/emi";
import { AFFILIATE_LINKS } from "@/lib/affiliateLinks";
import { Calculator, ArrowLeft } from "lucide-react";

/* =========================
   CONFIG
========================= */
const PRINCIPAL_MIN = 0;
const PRINCIPAL_MAX = 10_000_000_000;
const PRINCIPAL_STEP = 1_000_000;

const PRESET_AMOUNTS = [
  100_000_000,
  500_000_000,
  1_000_000_000,
  5_000_000_000,
  10_000_000_000,
];

export default function EmiCalculator({
  variant = "emi",
}: {
  variant?: "emi" | "personal-loan";
}) {
  const [currency, setCurrency] = useState("USD");
  const [principal, setPrincipal] = useState(100_000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(60);
  const [mounted, setMounted] = useState(false);

  // 🔥 NEW
  const [hasCalculated, setHasCalculated] = useState(false);

  useEffect(() => {
    setMounted(true);
    const country = detectCountryFromTimezone();
    if (country) {
      setCurrency(getCurrencyFromCountry(country));
    }
  }, []);

  const result = useMemo(() => {
    return calculateEMI(principal, interestRate, tenure);
  }, [principal, interestRate, tenure]);

  const markCalculated = () => {
    if (!hasCalculated) setHasCalculated(true);
  };

  const handlePrincipalChange = useCallback((value: number) => {
    markCalculated();
    setPrincipal(Math.max(PRINCIPAL_MIN, Math.min(PRINCIPAL_MAX, value)));
  }, [hasCalculated]);

  const handleInterestChange = useCallback((value: number) => {
    markCalculated();
    setInterestRate(Math.max(0, Math.min(50, value)));
  }, [hasCalculated]);

  const handleTenureChange = useCallback((value: number) => {
    markCalculated();
    setTenure(Math.max(1, Math.min(360, Math.round(value))));
  }, [hasCalculated]);

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto animate-pulse">
        <div className="h-[600px] bg-muted rounded-xl" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">

      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Loan Details */}
      <Card className="border-0 shadow-2xl">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Loan Details
            </CardTitle>
            <CurrencySelect value={currency} onValueChange={setCurrency} />
          </div>
        </CardHeader>

        <CardContent className="space-y-8">

          {/* Principal */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Principal Amount</Label>
              <Input
                type="number"
                value={principal}
                onChange={(e) =>
                  handlePrincipalChange(Number(e.target.value))
                }
                className="w-44 text-right font-mono"
              />
            </div>

            {/* Preset */}
            <div className="flex flex-wrap gap-2">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    markCalculated();
                    setPrincipal(amount);
                  }}
                  className="px-3 py-1 text-xs rounded-lg border bg-muted hover:bg-primary hover:text-primary-foreground"
                >
                  {formatCurrency(amount, currency)}
                </button>
              ))}
            </div>

            <Slider
              value={[principal]}
              onValueChange={(v) => handlePrincipalChange(v[0])}
              min={PRINCIPAL_MIN}
              max={PRINCIPAL_MAX}
              step={PRINCIPAL_STEP}
            />
          </div>

          {/* Interest */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Interest Rate (% p.a.)</Label>
              <span className="font-semibold">{interestRate.toFixed(2)}%</span>
            </div>

            <Slider
              value={[interestRate]}
              onValueChange={(v) => handleInterestChange(v[0])}
              min={0}
              max={30}
              step={0.1}
            />
          </div>

          {/* Tenure */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Loan Tenure</Label>
              <span className="font-semibold">{tenure} months</span>
            </div>

            <Slider
              value={[tenure]}
              onValueChange={(v) => handleTenureChange(v[0])}
              min={1}
              max={360}
              step={1}
            />

            <p className="text-xs text-muted-foreground text-right">
              {Math.floor(tenure / 12)} years {tenure % 12} months
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ======================
          RESULTS
      ====================== */}
      <Card className="bg-emerald-500/10">
        <CardContent className="pt-6">
          <p className="text-xs uppercase">Monthly EMI</p>
          <p className="text-3xl font-bold font-mono">
            {formatCurrency(result.emi, currency)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <p className="text-xs uppercase">Total Interest</p>
          <p className="text-xl font-semibold font-mono">
            {formatCurrency(result.totalInterest, currency)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <p className="text-xs uppercase">Total Payment</p>
          <p className="text-xl font-semibold font-mono">
            {formatCurrency(result.totalPayment, currency)}
          </p>
        </CardContent>
      </Card>

      {/* ======================
          AFFILIATE CTA
      ====================== */}
      {hasCalculated && variant === "emi" && (
        <div className="rounded-2xl border bg-background p-5 text-center">
          <h3 className="text-lg font-semibold">
            Want a Better Loan Offer?
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            You may qualify for lower interest rates.
          </p>

          <a
            href={`${AFFILIATE_LINKS.cheersBuildFast}&subId1=emi_calculated`}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="mt-4 block w-full rounded-xl bg-emerald-600 py-3 text-white font-semibold hover:bg-emerald-700"
          >
            Check Eligible Loan Offers
          </a>
        </div>
      )}
    </div>
  );
}
