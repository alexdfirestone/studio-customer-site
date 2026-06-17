import { subMonths, format } from "date-fns";
import { range } from "lodash";

// Pipeline-influenced data for the "results" chart, generated with date-fns + lodash.
export const pipeline = range(12).map((i) => {
  const month = subMonths(new Date(2026, 0, 1), 11 - i);
  return {
    month: format(month, "MMM"),
    baseline: 200 + i * 18,
    withAcme: 200 + Math.round(i * 18 * (1 + i / 8)),
  };
});

export const logos = ["Northwind", "Globex", "Initech", "Umbrella", "Hooli", "Vandelay"];

export const stats = [
  { value: "3.2x", label: "more pipeline from target accounts" },
  { value: "+41%", label: "win rate on named accounts" },
  { value: "-28%", label: "shorter sales cycles" },
];
