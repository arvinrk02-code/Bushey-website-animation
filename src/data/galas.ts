export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export interface Gala {
  id: string;
  name: string;
  month: number;
  order: number;
  typicalTiming: string;
  venue: string;
  level: "Internal" | "League" | "Open meet" | "County" | "Regional";
  squadsInvited: string;
  note?: string;
}

export function sortGalasBySeason(galas: Gala[]) {
  return [...galas].sort((a, b) => (a.month === b.month ? a.order - b.order : a.month - b.month));
}

export function upcomingGalas(galas: Gala[], count = 4, fromMonth = new Date().getMonth() + 1) {
  return sortGalasBySeason(galas)
    .map((gala) => ({
      gala,
      sortKey: gala.month >= fromMonth ? gala.month : gala.month + 12,
    }))
    .sort((a, b) => (a.sortKey === b.sortKey ? a.gala.order - b.gala.order : a.sortKey - b.sortKey))
    .slice(0, count)
    .map(({ gala }) => gala);
}

export function groupGalasByMonth(galas: Gala[]) {
  const grouped = new Map<number, Gala[]>();

  for (const gala of sortGalasBySeason(galas)) {
    const monthGalas = grouped.get(gala.month) ?? [];
    monthGalas.push(gala);
    grouped.set(gala.month, monthGalas);
  }

  return [...grouped.entries()].sort(([a], [b]) => a - b);
}
