# customer-site

The "customer's website" the Studio editor opens — a real Vite + React **ABM marketing
landing page** (hero, logo cloud, feature grid, a results chart, testimonial, CTA,
footer). It deliberately pulls a heavy, real-world dependency load (MUI core +
`@mui/icons-material` + recharts + framer-motion + react-query; `@mui/x-data-grid` is
installed too). That weight is the point: it makes `npm install` and Vite's first-start
`optimizeDeps` non-trivial, so the demo's "install" and "wait-until-ready" steps reflect
a realistic site rather than a toy — without looking like a dashboard.

It also depends on a vendored mock of `@studio/sites` (a stand-in for Studio's private
meta-framework) whose install runs a short sleep — representing the private-package cost
on top of the public deps. Tune with `STUDIO_SITES_INSTALL_SECONDS`.

The demo git-clones this repo into the sandbox (`git clone` on the current path,
`git fetch` delta on the new path).

## Run locally

```bash
npm install        # installs the dep tree + runs the @studio/sites postinstall
npm run dev        # serves on http://localhost:3000 (host 0.0.0.0, any host allowed)
```
