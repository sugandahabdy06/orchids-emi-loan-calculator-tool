export interface Currency {
  code: string;
  symbol: string;
  name: string;
}

export const currencies: Currency[] = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
  { code: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
  { code: "PHP", symbol: "₱", name: "Philippine Peso" },
  { code: "THB", symbol: "฿", name: "Thai Baht" },
  { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
  { code: "KRW", symbol: "₩", name: "South Korean Won" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "MXN", symbol: "$", name: "Mexican Peso" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
  { code: "RUB", symbol: "₽", name: "Russian Ruble" },
  { code: "TRY", symbol: "₺", name: "Turkish Lira" },
  { code: "PLN", symbol: "zł", name: "Polish Zloty" },
  { code: "SEK", symbol: "kr", name: "Swedish Krona" },
  { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
  { code: "DKK", symbol: "kr", name: "Danish Krone" },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "TWD", symbol: "NT$", name: "Taiwan Dollar" },
  { code: "PKR", symbol: "₨", name: "Pakistani Rupee" },
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
  { code: "VND", symbol: "₫", name: "Vietnamese Dong" },
  { code: "EGP", symbol: "E£", name: "Egyptian Pound" },
  { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
  { code: "KES", symbol: "KSh", name: "Kenyan Shilling" },
];

export const countryToCurrency: Record<string, string> = {
  US: "USD",
  CA: "CAD",
  GB: "GBP",
  UK: "GBP",
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  NL: "EUR",
  BE: "EUR",
  AT: "EUR",
  PT: "EUR",
  IE: "EUR",
  FI: "EUR",
  GR: "EUR",
  IN: "INR",
  JP: "JPY",
  CN: "CNY",
  AU: "AUD",
  NZ: "NZD",
  CH: "CHF",
  SG: "SGD",
  AE: "AED",
  SA: "SAR",
  MY: "MYR",
  PH: "PHP",
  TH: "THB",
  ID: "IDR",
  KR: "KRW",
  BR: "BRL",
  MX: "MXN",
  ZA: "ZAR",
  RU: "RUB",
  TR: "TRY",
  PL: "PLN",
  SE: "SEK",
  NO: "NOK",
  DK: "DKK",
  HK: "HKD",
  TW: "TWD",
  PK: "PKR",
  BD: "BDT",
  VN: "VND",
  EG: "EGP",
  NG: "NGN",
  KE: "KES",
};

export function getCurrencyFromCountry(countryCode: string): string {
  return countryToCurrency[countryCode.toUpperCase()] || "USD";
}

export function getCurrencyByCode(code: string): Currency | undefined {
  return currencies.find((c) => c.code === code);
}

export function formatCurrency(
  amount: number,
  currencyCode: string,
  locale?: string
): string {
  try {
    return new Intl.NumberFormat(locale || "en-US", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    const currency = getCurrencyByCode(currencyCode);
    return `${currency?.symbol || "$"}${amount.toLocaleString()}`;
  }
}

export function detectCountryFromTimezone(): string | null {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezoneToCountry: Record<string, string> = {
      "America/New_York": "US",
      "America/Chicago": "US",
      "America/Denver": "US",
      "America/Los_Angeles": "US",
      "America/Toronto": "CA",
      "America/Vancouver": "CA",
      "Europe/London": "GB",
      "Europe/Paris": "FR",
      "Europe/Berlin": "DE",
      "Europe/Rome": "IT",
      "Europe/Madrid": "ES",
      "Europe/Amsterdam": "NL",
      "Asia/Kolkata": "IN",
      "Asia/Mumbai": "IN",
      "Asia/Tokyo": "JP",
      "Asia/Shanghai": "CN",
      "Asia/Hong_Kong": "HK",
      "Asia/Singapore": "SG",
      "Asia/Dubai": "AE",
      "Asia/Riyadh": "SA",
      "Asia/Bangkok": "TH",
      "Asia/Jakarta": "ID",
      "Asia/Seoul": "KR",
      "Asia/Manila": "PH",
      "Asia/Kuala_Lumpur": "MY",
      "Australia/Sydney": "AU",
      "Australia/Melbourne": "AU",
      "Pacific/Auckland": "NZ",
      "America/Sao_Paulo": "BR",
      "America/Mexico_City": "MX",
      "Africa/Johannesburg": "ZA",
      "Europe/Moscow": "RU",
      "Europe/Istanbul": "TR",
      "Europe/Warsaw": "PL",
      "Europe/Stockholm": "SE",
      "Europe/Oslo": "NO",
      "Europe/Copenhagen": "DK",
      "Asia/Taipei": "TW",
      "Asia/Karachi": "PK",
      "Asia/Dhaka": "BD",
      "Asia/Ho_Chi_Minh": "VN",
      "Africa/Cairo": "EG",
      "Africa/Lagos": "NG",
      "Africa/Nairobi": "KE",
    };
    return timezoneToCountry[timezone] || null;
  } catch {
    return null;
  }
}
