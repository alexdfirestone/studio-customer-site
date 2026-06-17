// The framework runtime the customer site imports. Trivial here; in real Studio this is
// the meta-framework that renders the site. What matters for the POC is that it is a
// real installed dependency that is expensive to install — see package.json postinstall.
export const version = "0.0.0";
export function renderBanner() {
  return "Served by @studio/sites (mock)";
}
