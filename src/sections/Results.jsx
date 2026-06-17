import { Container, Grid, Box, Typography, Stack, Card, CardContent } from "@mui/material";
import { TrendingUp } from "@mui/icons-material";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { pipeline, stats } from "../data";

export default function Results() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mb: 3 }}>
            Pipeline you can prove
          </Typography>
          <Stack spacing={3}>
            {stats.map((s) => (
              <Stack key={s.label} direction="row" spacing={2} alignItems="baseline">
                <Typography variant="h3" color="primary.main">{s.value}</Typography>
                <Typography color="text.secondary">{s.label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card variant="outlined">
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <TrendingUp color="primary" />
                <Typography variant="h6">Influenced pipeline ($k)</Typography>
              </Stack>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={pipeline}>
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" /><YAxis /><Tooltip /><Legend />
                  <Area type="monotone" dataKey="baseline" name="Before Acme" stroke="#94a3b8" fill="transparent" />
                  <Area type="monotone" dataKey="withAcme" name="With Acme" stroke="#4f46e5" fill="url(#g)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
