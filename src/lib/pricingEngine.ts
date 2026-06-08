const RATE_PER_MOVER_PER_HOUR = 50;

export interface EstimateResult {
  hours: number;
  total: number;
  movers: number;
}

export function calculateEstimate(hours: number, movers: number): EstimateResult {
  const total = movers * RATE_PER_MOVER_PER_HOUR * hours;
  return { hours, total, movers };
}
