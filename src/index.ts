export const sirasayi = (value: number) => {
  const lastDigit = value % 10

  if (lastDigit === 3 || lastDigit === 4 || (value % 1000).toString().includes("00")) {
    return value + "-cü"
  }

  if (lastDigit === 6 || [40, 60, 90].includes(value)) {
    return value + "-cı"
  }

  if (lastDigit === 9 || [10, 30, 1000000].includes(value)) {
    return value + "-cu"
  }

  return value + "-ci"
}

export default sirasayi
