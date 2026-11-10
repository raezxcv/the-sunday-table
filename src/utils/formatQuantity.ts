export function formatScaledAmount(amount: number | null, multiplier: number, unit: string): string {
  if (amount === null) return '';
  const scaled = amount * multiplier;

  // Metric units (g, ml) > 10 should round to nearest whole number or nearest 5 for large amounts
  if (unit === 'g' || unit === 'ml') {
    if (scaled >= 50) {
      return `${Math.round(scaled / 5) * 5}`;
    }
    return `${Math.round(scaled)}`;
  }

  // Liters or kg
  if (unit === 'kg' || unit === 'L') {
    return `${Number(scaled.toFixed(2))}`;
  }

  // Culinary fractions for tsp, tbsp, cup, whole, cloves, etc.
  const whole = Math.floor(scaled + 0.01);
  const remainder = scaled - whole;

  const fractions: Array<[number, string]> = [
    [0.125, '1/8'],
    [0.25, '1/4'],
    [0.333, '1/3'],
    [0.5, '1/2'],
    [0.666, '2/3'],
    [0.75, '3/4'],
  ];

  if (remainder < 0.06) {
    return whole > 0 ? `${whole}` : '';
  }

  if (remainder > 0.92) {
    return `${whole + 1}`;
  }

  let closestFraction = '';
  let minDiff = Infinity;
  for (const [val, label] of fractions) {
    const diff = Math.abs(remainder - val);
    if (diff < minDiff) {
      minDiff = diff;
      closestFraction = label;
    }
  }

  if (minDiff <= 0.09) {
    return whole > 0 ? `${whole} ${closestFraction}` : closestFraction;
  }

  return `${Number(scaled.toFixed(1))}`;
}

