import { renderBanner, version } from "@studio/sites";

// A real (tiny) Vite app standing in for the customer's website. It imports the
// private @studio/sites meta-framework, so the editor session genuinely depends on
// that package being installed — which is what makes the install step costly.
document.querySelector("#app").innerHTML = `
  <main style="font-family: ui-sans-serif, system-ui, sans-serif; display:grid; place-items:center; min-height:100vh; margin:0; text-align:center; background:#fafafa; color:#111;">
    <div>
      <h1 style="font-size: clamp(2rem, 6vw, 4rem); margin:0 0 .5rem;">Acme Inc.</h1>
      <p style="color:#666;">The customer's live website, served by Vite inside the sandbox.</p>
      <p style="margin-top:1.5rem; font-size:.8rem; color:#888; border:1px solid #e5e5e5; border-radius:999px; padding:.35rem .8rem; display:inline-block;">
        ${renderBanner()} · v${version}
      </p>
    </div>
  </main>
`;
