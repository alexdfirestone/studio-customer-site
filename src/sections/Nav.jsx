import { AppBar, Toolbar, Container, Box, Button, Stack, Typography } from "@mui/material";
import { Bolt, ArrowForward } from "@mui/icons-material";

const links = ["Platform", "Solutions", "Customers", "Pricing", "Resources"];

export default function Nav() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0}
      sx={{ borderBottom: "1px solid", borderColor: "divider", backdropFilter: "blur(8px)", bgcolor: "rgba(255,255,255,0.8)" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
            <Bolt sx={{ color: "primary.main" }} />
            <Typography variant="h6" fontWeight={800}>Acme</Typography>
          </Stack>
          <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((l) => (
              <Typography key={l} variant="body2" color="text.secondary" sx={{ cursor: "pointer", "&:hover": { color: "text.primary" } }}>
                {l}
              </Typography>
            ))}
          </Stack>
          <Button variant="text" sx={{ display: { xs: "none", sm: "inline-flex" } }}>Sign in</Button>
          <Button variant="contained" endIcon={<ArrowForward />}>Book a demo</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
