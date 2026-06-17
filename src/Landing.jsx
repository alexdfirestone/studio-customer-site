import { Box } from "@mui/material";
import Nav from "./sections/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import Logos from "./sections/Logos.jsx";
import Features from "./sections/Features.jsx";
import Results from "./sections/Results.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import CTA from "./sections/CTA.jsx";
import Footer from "./sections/Footer.jsx";

export default function Landing() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Logos />
      <Features />
      <Results />
      <Testimonial />
      <CTA />
      <Footer />
    </Box>
  );
}
