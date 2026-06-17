import { Grid, Card, CardContent, Typography, Box, Stack, LinearProgress, Avatar } from "@mui/material";
import {
  TrendingUp, TrendingDown, AttachMoney, People, ShoppingCart, Visibility,
  ArrowUpward, ArrowDownward, MoreVert, Star, Bolt, CalendarMonth,
  CheckCircle, Cancel, Schedule, LocalShipping, Inventory, Receipt,
  CreditCard, AccountBalance, Savings, Paid, Timeline, BarChart as BarIcon,
} from "@mui/icons-material";
import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from "recharts";
import { series, totals } from "../data";

const stats = [
  { label: "Revenue", value: `$${(totals.revenue / 1000).toFixed(0)}k`, icon: <AttachMoney />, up: true },
  { label: "Sessions", value: totals.sessions.toLocaleString(), icon: <Visibility />, up: true },
  { label: "Orders", value: "1,284", icon: <ShoppingCart />, up: false },
  { label: "Signups/day", value: totals.avgSignups, icon: <People />, up: true },
];

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        {stats.map((s) => (
          <Grid key={s.label} item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Avatar sx={{ bgcolor: "primary.main" }}>{s.icon}</Avatar>
                  {s.up ? <ArrowUpward color="success" /> : <ArrowDownward color="error" />}
                </Stack>
                <Typography variant="h5" sx={{ mt: 2 }}>{s.value}</Typography>
                <Typography color="text.secondary">{s.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} md={8}>
          <Card><CardContent>
            <Typography variant="h6" gutterBottom><Timeline sx={{ verticalAlign: "middle", mr: 1 }} />Revenue</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={series}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" /><YAxis /><Tooltip /><Legend />
                <Area type="monotone" dataKey="revenue" stroke="#4f46e5" fill="#c7d2fe" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent></Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card><CardContent>
            <Typography variant="h6" gutterBottom><BarIcon sx={{ verticalAlign: "middle", mr: 1 }} />Signups</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={series.slice(-10)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" /><YAxis /><Tooltip />
                <Bar dataKey="signups" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent></Card>
        </Grid>
      </Grid>
    </Box>
  );
}
