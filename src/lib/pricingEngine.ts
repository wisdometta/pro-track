const BASE_RATE = 50; // per mover per hour
const STAIRS_SURCHARGE = 25;
const HEAVY_ITEMS_SURCHARGE = 50; // per item
const TRUCK_FEE = 150;

export interface PricingInput {
  movers: number;
  hours: number;
  stairs: string;
  needTruck: boolean;
  heavyItems: string[];
}

export function calculateEstimate(input: PricingInput): number {
  const { movers, hours, stairs, needTruck, heavyItems } = input;

  let total = movers * hours * BASE_RATE;

  if (needTruck) {
    total += TRUCK_FEE;
  }

  if (stairs === 'pickup' || stairs === 'dropoff') {
    total += STAIRS_SURCHARGE;
  } else if (stairs === 'both') {
    total += STAIRS_SURCHARGE * 2;
  }

  if (heavyItems && heavyItems.length > 0) {
    total += HEAVY_ITEMS_SURCHARGE * heavyItems.length;
  }

  return total;
}

export function getSuggestedHours(moveSize: string): number {
  switch (moveSize) {
    case 'studio':
      return 2;
    case '1bedroom':
      return 3;
    case '2bedroom':
      return 4;
    case '3bedroom':
      return 6;
    case '4bedroom':
      return 8;
    case '5bedroom':
      return 10;
    default:
      return 3;
  }
}

export function getMoveSizeLabel(moveSize: string): string {
  switch (moveSize) {
    case 'studio':
      return 'Studio';
    case '1bedroom':
      return '1 Bedroom';
    case '2bedroom':
      return '2 Bedroom';
    case '3bedroom':
      return '3 Bedroom';
    case '4bedroom':
      return '4 Bedroom';
    case '5bedroom':
      return '5+ Bedroom';
    default:
      return moveSize;
  }
}
