const RATE_PER_MOVER_PER_HOUR = 50;
const MINIMUM_HOURS = 2;

// A simple deterministic hash function to mock distance between two strings
export const mockDistance = (str1: string, str2: string) => {
  const combined = (str1 + str2).toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!combined) return 0;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = ((hash << 5) - hash) + combined.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash) % 95 + 5; // 5 to 100 miles
};

export interface EstimateResult {
  distance: number;
  hours: number;
  total: number;
  movers: number;
}

export function calculateEstimate(startLocation: string, endLocation: string, movers: number): EstimateResult | null {
  if (!startLocation || !endLocation) return null;
  
  const distance = mockDistance(startLocation, endLocation);
  const rawHours = 2 + (distance / 30);
  let hours = Math.round(rawHours * 2) / 2;
  hours = Math.max(MINIMUM_HOURS, hours);
  
  const total = movers * RATE_PER_MOVER_PER_HOUR * hours;
  
  return { distance, hours, total, movers };
}
