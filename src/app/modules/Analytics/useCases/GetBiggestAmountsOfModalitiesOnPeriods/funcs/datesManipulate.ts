export function getMonthDiff(d1: Date, d2: Date): number {
  return (d2.getFullYear() - d1.getFullYear()) * 12 + d2.getMonth() - d1.getMonth();
}

export function getPeriod(monthDiff: number): string {
  if (monthDiff <= 0) {
    return '0';
  } else if (monthDiff <= 3) {
    return '3';
  } else if (monthDiff <= 6) {
    return '6';
  } else {
    return '12';
  }
}
