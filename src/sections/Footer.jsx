import { Container, Grid, Stack, Typography, Box, Divider, IconButton } from "@mui/material";
import { Bolt, LinkedIn, Twitter, GitHub, YouTube } from "@mui/icons-material";

const columns = {
  Product: ["Platform", "Intent data", "Orchestration", "Analytics", "Pricing"],
  Solutions: ["For demand gen", "For sales", "For RevOps", "Enterprise"],
  Company: ["About", "Careers", "Customers", "Contact"],
  Resources: ["Blog", "Guides", "Docs", "Security"],
};

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Bolt sx={{ color: "primary.main" }} />
              <Typography variant="h6" fontWeight={800}>Acme</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280, mb: 2 }}>
              Account-based marketing that turns your best-fit accounts into revenue.
            </Typography>
            <Stack direction="row">
              {[LinkedIn, Twitter, GitHub, YouTube].map((Icon, i) => (
                <IconButton key={i} size="small" color="inherit"><Icon fontSize="small" /></IconButton>
              ))}
            </Stack>
          </Grid>
          {Object.entries(columns).map(([head, items]) => (
            <Grid key={head} item xs={6} md={2}>
              <Typography variant="subtitle2" gutterBottom>{head}</Typography>
              <Stack spacing={1}>
                {items.map((it) => (
                  <Typography key={it} variant="body2" color="text.secondary" sx={{ cursor: "pointer" }}>{it}</Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="caption" color="text.secondary">© 2026 Acme Inc. · Served by @studio/sites (mock)</Typography>
      </Container>
    </Box>
  );
}
