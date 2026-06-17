import { Grid, Card, CardContent, Typography, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import {
  ShowChart, PieChart as PieIcon, BubbleChart, ScatterPlot, StackedLineChart,
  Analytics as AnalyticsIcon, QueryStats, DataUsage, Insights, Speed,
  FilterList, Download, Refresh, DateRange, Public, DevicesOther,
} from "@mui/icons-material";
import {
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { series } from "../data";

const pie = [
  { name: "Direct", value: 400 }, { name: "Organic", value: 300 },
  { name: "Referral", value: 200 }, { name: "Social", value: 120 },
];
const COLORS = ["#4f46e5", "#06b6d4", "#f59e0b", "#ef4444"];

export default function Analytics() {
  const [range, setRange] = useState("30d");
  return (
    <Box>
      <Typography variant="h4" gutterBottom><AnalyticsIcon sx={{ verticalAlign: "middle", mr: 1 }} />Analytics</Typography>
      <ToggleButtonGroup value={range} exclusive onChange={(_, v) => v && setRange(v)} sx={{ mb: 2 }}>
        <ToggleButton value="7d"><DateRange sx={{ mr: 1 }} />7d</ToggleButton>
        <ToggleButton value="30d"><DateRange sx={{ mr: 1 }} />30d</ToggleButton>
        <ToggleButton value="90d"><DateRange sx={{ mr: 1 }} />90d</ToggleButton>
      </ToggleButtonGroup>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card><CardContent>
            <Typography variant="h6"><StackedLineChart sx={{ verticalAlign: "middle", mr: 1 }} />Sessions vs Revenue</Typography>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={series}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" /><YAxis /><Tooltip /><Legend />
                <Line type="monotone" dataKey="sessions" stroke="#06b6d4" />
                <Line type="monotone" dataKey="revenue" stroke="#4f46e5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent></Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card><CardContent>
            <Typography variant="h6"><PieIcon sx={{ verticalAlign: "middle", mr: 1 }} />Traffic sources</Typography>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie data={pie} dataKey="value" nameKey="name" outerRadius={100} label>
                  {pie.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip /><Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent></Card>
        </Grid>
      </Grid>
    </Box>
  );
}
