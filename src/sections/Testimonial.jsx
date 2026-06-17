import { Container, Box, Typography, Avatar, Stack } from "@mui/material";
import { FormatQuote, Star } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <Box sx={{ bgcolor: "grey.50", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md" component={motion.div}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <FormatQuote sx={{ fontSize: 56, color: "primary.light" }} />
        <Typography variant="h4" sx={{ fontWeight: 600, lineHeight: 1.4, mb: 4 }}>
          “Acme let our small team act like a 50-person ABM org. We tripled pipeline from our
          target accounts in two quarters.”
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: "secondary.main" }}>JD</Avatar>
          <Box>
            <Typography fontWeight={700}>Jordan Diaz</Typography>
            <Typography variant="body2" color="text.secondary">VP Marketing, Globex</Typography>
          </Box>
          <Stack direction="row" sx={{ ml: "auto" }}>
            {[...Array(5)].map((_, i) => <Star key={i} sx={{ color: "#f59e0b" }} />)}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
