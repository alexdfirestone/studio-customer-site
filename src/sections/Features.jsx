import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Chip } from "@mui/material";
import {
  GpsFixed, Sensors, Hub, AutoAwesome, Insights, IntegrationInstructions,
  Campaign, Groups, Bolt, Shield, Timeline, Mail,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const features = [
  { icon: <GpsFixed />, title: "Account targeting", text: "Build target account lists from firmographic, technographic, and fit signals." },
  { icon: <Sensors />, title: "Intent signals", text: "Surface accounts actively researching your category before competitors do." },
  { icon: <Hub />, title: "Multi-channel orchestration", text: "Coordinate ads, email, web, and sales touches into one account journey." },
  { icon: <AutoAwesome />, title: "Personalization at scale", text: "Tailor landing pages and messaging to each account automatically." },
  { icon: <Insights />, title: "Revenue analytics", text: "Attribute pipeline and revenue to the accounts and plays that drove them." },
  { icon: <IntegrationInstructions />, title: "Works with your stack", text: "Two-way sync with Salesforce, HubSpot, and your data warehouse." },
];

export default function Features() {
  return (
    <Box sx={{ bgcolor: "grey.50", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Chip icon={<Campaign />} label="The platform" color="secondary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mb: 2 }}>
            Everything you need to run ABM
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400} sx={{ maxWidth: 640, mx: "auto" }}>
            From the first intent signal to closed-won — one platform for the whole account journey.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {features.map((f, i) => (
            <Grid key={f.title} item xs={12} sm={6} md={4} component={motion.div}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent sx={{ p: 3 }}>
                  <Avatar sx={{ bgcolor: "primary.light", color: "primary.dark", mb: 2 }}>{f.icon}</Avatar>
                  <Typography variant="h6" gutterBottom>{f.title}</Typography>
                  <Typography color="text.secondary">{f.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
