import { Container, Stack, Typography, Box } from "@mui/material";
import { Business } from "@mui/icons-material";
import { logos } from "../data";

export default function Logos() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography align="center" variant="overline" color="text.secondary">
        Trusted by revenue teams at
      </Typography>
      <Stack direction="row" spacing={{ xs: 3, md: 6 }} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ mt: 2, opacity: 0.7 }}>
        {logos.map((name) => (
          <Stack key={name} direction="row" spacing={1} alignItems="center">
            <Business color="action" />
            <Typography variant="h6" fontWeight={700} color="text.secondary">{name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
