const suffixes = new Map<number, string>([
  [3, "-cü"], [4, "-cü"],
  [6, "-cı"], [40, "-cı"], [60, "-cı"], [90, "-cı"],
  [9, "-cu"], [10, "-cu"], [30, "-cu"]
]);

export const sirasayi = (value: number): string => {
  const lastDigit = value % 10;
  const lastTwoDigits = value % 100;

  // Special cases
  if (value % 1000000 === 0) return `${value}-cu`; // Multiples of 1,000,000
  if (value % 100000 === 0) return `${value}-ci`; // Multiples of 100,000
  if (lastTwoDigits === 10) return `${value}-cu`; // Numbers like 1010, 2010, etc.
  if (value % 100 === 0) return `${value}-cü`; // Numbers ending in 00 (except 1000000)

  // Use suffix map for predefined numbers and last digit lookups
  return `${value}${suffixes.get(value) || suffixes.get(lastDigit) || "-ci"}`;
};

export default sirasayi;