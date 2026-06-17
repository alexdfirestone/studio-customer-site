# customer-site

The "customer's website" the Studio editor opens — a real, minimal Vite app. The demo
loads it into the sandbox at session start: today it's uploaded from this folder; the
next iteration clones it from a git remote (`git clone` on the current path, `git fetch`
delta on the new path).

It depends on a vendored mock of `@studio/sites` whose install is deliberately slow,
so `npm install` reproduces the dominant startup cost (skill step 5a).

## Run locally

```bash
npm install        # installs vite + runs the slow @studio/sites postinstall
npm run dev        # serves on http://localhost:3000 (host 0.0.0.0, any host allowed)
```

## Publish (so the POC can clone it)

```bash
# from this directory
git init && git add -A && git commit -m "customer site"
gh repo create studio-sandbox-demo-customer-site --public --source=. --push
```

Then set `STUDIO_CUSTOMER_REPO` in the POC's `.env` to the resulting clone URL.
