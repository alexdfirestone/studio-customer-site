import { subDays, format } from "date-fns";
import { range, sumBy, meanBy } from "lodash";

// Mock data, generated with date-fns + lodash so those deps are actually exercised.
export const series = range(30).map((i) => {
  const day = subDays(new Date(2026, 0, 31), 29 - i);
  return {
    date: format(day, "MMM d"),
    revenue: 4000 + Math.round(Math.abs(Math.sin(i / 3)) * 6000),
    sessions: 1200 + Math.round(Math.abs(Math.cos(i / 4)) * 3000),
    signups: 40 + Math.round(Math.abs(Math.sin(i / 2)) * 120),
  };
});

export const totals = {
  revenue: sumBy(series, "revenue"),
  sessions: sumBy(series, "sessions"),
  avgSignups: Math.round(meanBy(series, "signups")),
};

export const customers = range(40).map((i) => ({
  id: i + 1,
  name: `Customer ${i + 1}`,
  plan: ["Free", "Pro", "Enterprise"][i % 3],
  mrr: [0, 49, 499][i % 3],
  status: ["active", "trialing", "churned"][i % 3],
}));
