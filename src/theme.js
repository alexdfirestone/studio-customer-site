import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4f46e5" },
    secondary: { main: "#ec4899" },
    background: { default: "#ffffff" },
    text: { primary: "#0f172a", secondary: "#475569" },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
});
