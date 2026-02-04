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
import {
  Calculator,
  PiggyBank,
  TrendingUp,
  Wallet,
  ArrowLeft,
} from "lucide-react";

/* =========================
   PRINCIPAL CONFIG (10B)
========================= */
const PRINCIPAL_MIN = 0;
const PRINCIPAL_MAX = 10_000_000_000; // 10 Miliar
const PRINCIPAL_STEP = 1_000_000; // 1 Juta

const PRESET_AMOUNTS = [
  100_000_000,     // 100M
  500_000_000,     // 500M
  1_000_000_000,   // 1B
  5_000_000_000,   // 5B
  10_000_000_000,  // 10B
];

export default function EmiCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [principal, setPrincipal] = useState(100_000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(60);
  const [mounted, setMounted] = useState(false);

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

  const handlePrincipalChange = useCallback((value: number) => {
    setPrincipal(
      Math.max(PRINCIPAL_MIN, Math.min(PRINCIPAL_MAX, value))
    );
  }, []);

  const handleInterestChange = useCallback((value: number) => {
    setInterestRate(Math.max(0, Math.min(50, value)));
  }, []);

  const handleTenureChange = useCallback((value: number) => {
    setTenure(Math.max(1, Math.min(360, Math.round(value))));
  }, []);

  const principalPercentage =
    (result.principal / result.totalPayment) * 100 || 0;
  const interestPercentage =
    (result.totalInterest / result.totalPayment) * 100 || 0;

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto animate-pulse">
        <div className="h-[600px] bg-muted rounded-xl" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">

      {/* Back to Home */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Loan Details */}
      <Card className="border-0 shadow-2xl">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Loan Details
            </CardTitle>
            <CurrencySelect value={currency} onValueChange={setCurrency} />
          </div>
        </CardHeader>

        <CardContent className="space-y-8">

          {/* Principal */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Principal Amount</Label>
              <Input
                type="number"
                value={principal}
                onChange={(e) =>
                  handlePrincipalChange(Number(e.target.value))
                }
                className="w-44 text-right font-mono"
                min={PRINCIPAL_MIN}
                max={PRINCIPAL_MAX}
                step={PRINCIPAL_STEP}
              />
            </div>

            {/* Preset Buttons */}
            <div className="flex flex-wrap gap-2">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setPrincipal(amount)}
                  className="px-3 py-1 text-xs rounded-lg border bg-muted hover:bg-primary hover:text-primary-foreground transition"
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

            <p className="text-xs text-muted-foreground text-right">
              Max: {formatCurrency(PRINCIPAL_MAX, currency)}
            </p>
          </div>

          {/* Interest */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">
                Interest Rate (% p.a.)
              </Label>
              <Input
                type="number"
                value={interestRate}
                onChange={(e) =>
                  handleInterestChange(Number(e.target.value))
                }
                className="w-24 text-right font-mono"
                step={0.1}
              />
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
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Loan Tenure</Label>
              <Input
                type="number"
                value={tenure}
                onChange={(e) =>
                  handleTenureChange(Number(e.target.value))
                }
                className="w-24 text-right font-mono"
              />
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

      {/* Results */}
      {/* Monthly EMI – Highlight */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/5">
          <CardContent className="pt-6">
            <p className="text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Monthly EMI
            </p>
          <p className="mt-2 text-3xl font-bold font-mono text-emerald-700 dark:text-emerald-400">
            {formatCurrency(result.emi, currency)}
          </p>
          </CardContent>
      </Card>
      {/* Principal */}
      <Card className="border border-border/40 bg-background/60 backdrop-blur">
          <CardContent className="pt-6">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Principal
            </p>
            <p className="mt-2 text-xl font-semibold font-mono">
              {formatCurrency(result.principal, currency)}
            </p>
          </CardContent>
      </Card>

      {/* Total Interest */}
      <Card className="border border-border/40 bg-background/60 backdrop-blur">
          <CardContent className="pt-6">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Total Interest
            </p>
            <p className="mt-2 text-xl font-semibold font-mono text-amber-600 dark:text-amber-400">
            {formatCurrency(result.totalInterest, currency)}
            </p>
          </CardContent>
      </Card>

      {/* Total Payment */}
      <Card className="border border-border/40 bg-background/60 backdrop-blur">
          <CardContent className="pt-6">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Total Payment
            </p>
            <p className="mt-2 text-xl font-semibold font-mono text-violet-600 dark:text-violet-400">
            {formatCurrency(result.totalPayment, currency)}
            </p>
          </CardContent>
      </Card>
    </div>
  );
}

/* =========================
   RESULT CARD
========================= */
function ResultCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="pt-6 flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground uppercase">{title}</p>
          <p className="text-xl font-bold font-mono mt-1">{value}</p>
        </div>
        <div className="p-2 rounded-lg bg-muted">{icon}</div>
      </CardContent>
    </Card>
  );
}
