import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { RocketLaunch, ArrowForward } from "@mui/icons-material";

export default function CTA() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{
        borderRadius: 5, px: { xs: 4, md: 10 }, py: { xs: 6, md: 10 }, textAlign: "center",
        background: "linear-gradient(120deg,#4f46e5,#ec4899)", color: "common.white",
      }}>
        <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 44 }, mb: 2 }}>
          Ready to win your accounts?
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, mb: 4 }}>
          See Acme on your own target account list in a 30-minute demo.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button size="large" variant="contained" color="inherit"
            sx={{ color: "primary.main" }} startIcon={<RocketLaunch />} endIcon={<ArrowForward />}>
            Book a demo
          </Button>
          <Button size="large" variant="outlined" color="inherit">Talk to sales</Button>
        </Stack>
      </Box>
    </Container>
  );
}
