# customer-site

The "customer's website" the Studio editor opens — a real Vite + React + **MUI** admin
dashboard, deliberately on the heavier side (MUI core + `@mui/icons-material` +
`@mui/x-data-grid` + recharts + framer-motion + react-query). That weight is the point:
it makes `npm install` and Vite's first-start `optimizeDeps` non-trivial, so the demo's
"install" and "wait-until-ready" steps reflect a realistic editor session rather than a
toy. (~13k modules transformed in a production build.)

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
