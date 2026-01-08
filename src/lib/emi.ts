export interface EMIResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  monthlyRate: number;
  tenure: number;
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): EMIResult {
  if (principal <= 0 || tenureMonths <= 0) {
    return {
      emi: 0,
      totalPayment: 0,
      totalInterest: 0,
      principal: 0,
      monthlyRate: 0,
      tenure: 0,
    };
  }

  if (annualRate <= 0) {
    const emi = principal / tenureMonths;
    return {
      emi,
      totalPayment: principal,
      totalInterest: 0,
      principal,
      monthlyRate: 0,
      tenure: tenureMonths,
    };
  }

  const monthlyRate = annualRate / 12 / 100;
  const n = tenureMonths;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
    (Math.pow(1 + monthlyRate, n) - 1);

  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;

  return {
    emi,
    totalPayment,
    totalInterest,
    principal,
    monthlyRate,
    tenure: tenureMonths,
  };
}

export function formatNumber(value: number, decimals: number = 2): string {
  return value.toFixed(decimals);
}
