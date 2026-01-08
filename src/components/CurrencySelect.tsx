"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencies } from "@/lib/currency";

interface CurrencySelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function CurrencySelect({ value, onValueChange }: CurrencySelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Currency" />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((currency) => (
          <SelectItem key={currency.code} value={currency.code}>
            <span className="font-medium">{currency.symbol}</span>
            <span className="ml-1 text-muted-foreground">{currency.code}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
