"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
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
import { Calculator, PiggyBank, TrendingUp, Wallet } from "lucide-react";

export function EmiCalculator() {
  const [currency, setCurrency] = useState("USD");
  const [principal, setPrincipal] = useState(100000);
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
    setPrincipal(Math.max(0, Math.min(100000000, value)));
  }, []);

  const handleInterestChange = useCallback((value: number) => {
    setInterestRate(Math.max(0, Math.min(50, value)));
  }, []);

  const handleTenureChange = useCallback((value: number) => {
    setTenure(Math.max(1, Math.min(360, Math.round(value))));
  }, []);

  const principalPercentage = (result.principal / result.totalPayment) * 100 || 0;
  const interestPercentage = (result.totalInterest / result.totalPayment) * 100 || 0;

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto animate-pulse">
        <div className="h-[600px] bg-muted rounded-xl" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
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
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="principal" className="text-sm font-medium">
                Principal Amount
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="principal"
                  type="number"
                  value={principal}
                  onChange={(e) => handlePrincipalChange(Number(e.target.value))}
                  className="w-36 text-right font-mono"
                  min={0}
                  max={100000000}
                />
              </div>
            </div>
            <Slider
              value={[principal]}
              onValueChange={(values) => handlePrincipalChange(values[0])}
              min={0}
              max={10000000}
              step={10000}
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground text-right">
              {formatCurrency(principal, currency)}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="interest" className="text-sm font-medium">
                Interest Rate (% p.a.)
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="interest"
                  type="number"
                  value={interestRate}
                  onChange={(e) => handleInterestChange(Number(e.target.value))}
                  className="w-24 text-right font-mono"
                  min={0}
                  max={50}
                  step={0.1}
                />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
            </div>
            <Slider
              value={[interestRate]}
              onValueChange={(values) => handleInterestChange(values[0])}
              min={0}
              max={30}
              step={0.1}
              className="cursor-pointer"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="tenure" className="text-sm font-medium">
                Loan Tenure
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="tenure"
                  type="number"
                  value={tenure}
                  onChange={(e) => handleTenureChange(Number(e.target.value))}
                  className="w-24 text-right font-mono"
                  min={1}
                  max={360}
                />
                <span className="text-sm text-muted-foreground">months</span>
              </div>
            </div>
            <Slider
              value={[tenure]}
              onValueChange={(values) => handleTenureChange(values[0])}
              min={1}
              max={360}
              step={1}
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground text-right">
              {Math.floor(tenure / 12)} years {tenure % 12} months
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/20 dark:to-emerald-600/10">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Monthly EMI
                </p>
                <p className="text-2xl font-bold mt-1 font-mono text-emerald-600 dark:text-emerald-400">
                  {formatCurrency(result.emi, currency)}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20">
                <Wallet className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 dark:from-blue-500/20 dark:to-blue-600/10">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Principal
                </p>
                <p className="text-2xl font-bold mt-1 font-mono text-blue-600 dark:text-blue-400">
                  {formatCurrency(result.principal, currency)}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                <PiggyBank className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500/10 to-amber-600/5 dark:from-amber-500/20 dark:to-amber-600/10">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Total Interest
                </p>
                <p className="text-2xl font-bold mt-1 font-mono text-amber-600 dark:text-amber-400">
                  {formatCurrency(result.totalInterest, currency)}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-amber-500/10 dark:bg-amber-500/20">
                <TrendingUp className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-500/10 to-violet-600/5 dark:from-violet-500/20 dark:to-violet-600/10">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Total Payment
                </p>
                <p className="text-2xl font-bold mt-1 font-mono text-violet-600 dark:text-violet-400">
                  {formatCurrency(result.totalPayment, currency)}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-violet-500/10 dark:bg-violet-500/20">
                <Calculator className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Payment Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-4 rounded-full overflow-hidden bg-muted flex">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                style={{ width: `${principalPercentage}%` }}
              />
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
                style={{ width: `${interestPercentage}%` }}
              />
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                <span className="text-muted-foreground">Principal</span>
                <span className="font-medium">{principalPercentage.toFixed(1)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" />
                <span className="text-muted-foreground">Interest</span>
                <span className="font-medium">{interestPercentage.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
