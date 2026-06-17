// Stand-in for the real cost of installing @studio/sites (native builds, a large
// dependency tree, codegen). We sleep so `npm install` has a realistic, measurable
// duration in the sandbox — exactly the cost the golden snapshot + Drive remove from
// the user path. Tune with STUDIO_SITES_INSTALL_SECONDS.
const SECONDS = Number(process.env.STUDIO_SITES_INSTALL_SECONDS ?? 10);
const end = Date.now() + SECONDS * 1000;
while (Date.now() < end) {
  for (let i = 0; i < 1e7; i++) {}
}
console.log(`[@studio/sites] simulated heavy install: ${SECONDS}s`);
