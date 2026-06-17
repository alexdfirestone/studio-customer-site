import { Container, Box, Grid, Stack, Typography, Button, Chip, Card, CardContent, Avatar } from "@mui/material";
import {
  RocketLaunch, ArrowForward, PlayCircleOutline, AutoAwesome, GpsFixed,
  TrendingUp, CheckCircle,
} from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box sx={{ background: "linear-gradient(180deg,#eef2ff 0%,#ffffff 60%)", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} component={motion.div}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Chip icon={<AutoAwesome />} label="Account-Based Marketing" color="primary" variant="outlined" sx={{ mb: 3 }} />
            <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 60 }, lineHeight: 1.05, mb: 3 }}>
              Turn your target accounts into pipeline.
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 4, maxWidth: 520 }}>
              Acme helps revenue teams identify in-market accounts, orchestrate personalized campaigns
              across every channel, and prove the pipeline they influence.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button size="large" variant="contained" startIcon={<RocketLaunch />} endIcon={<ArrowForward />}>
                Book a demo
              </Button>
              <Button size="large" variant="outlined" startIcon={<PlayCircleOutline />}>
                See how it works
              </Button>
            </Stack>
            <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
              {["No credit card", "14-day trial", "SOC 2 Type II"].map((t) => (
                <Stack key={t} direction="row" spacing={0.5} alignItems="center">
                  <CheckCircle fontSize="small" color="success" />
                  <Typography variant="caption" color="text.secondary">{t}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} component={motion.div}
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Card elevation={8} sx={{ borderRadius: 4 }}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}><GpsFixed fontSize="small" /></Avatar>
                    <Typography fontWeight={700}>Target account: Globex</Typography>
                  </Stack>
                  <Chip size="small" color="success" icon={<TrendingUp />} label="High intent" />
                </Stack>
                {[
                  { label: "Engagement", v: 86 }, { label: "Fit score", v: 92 }, { label: "Intent surge", v: 74 },
                ].map((m) => (
                  <Box key={m.label} sx={{ mb: 1.5 }}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2" color="text.secondary">{m.label}</Typography>
                      <Typography variant="body2" fontWeight={600}>{m.v}</Typography>
                    </Stack>
                    <Box sx={{ height: 8, borderRadius: 4, bgcolor: "grey.100" }}>
                      <Box sx={{ height: 8, borderRadius: 4, width: `${m.v}%`, bgcolor: "primary.main" }} />
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
