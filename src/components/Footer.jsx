import React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: "40px 0",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="space-between">
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{ fontSize: "1.25rem" }}
            >
              ShenCarCar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our vision is to provide convenience and help increase your sales
              business.
            </Typography>
          </Grid>

          {/* About Section */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              gutterBottom
              sx={{ fontSize: "0.875rem" }}
            >
              About
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {[
                "How it works",
                "Featured",
                "Partnership",
                "Business Relation",
              ].map((item) => (
                <Link
                  href="#"
                  key={item}
                  color="text.secondary"
                  underline="none"
                  variant="body2"
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Community Section */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              gutterBottom
              sx={{ fontSize: "0.875rem" }}
            >
              Community
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {["Events", "Blog", "Podcast", "Invite a friend"].map((item) => (
                <Link
                  href="#"
                  key={item}
                  color="text.secondary"
                  underline="none"
                  variant="body2"
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Socials Section */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              gutterBottom
              sx={{ fontSize: "0.875rem" }}
            >
              Socials
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {["Discord", "Instagram", "Twitter", "Facebook"].map((item) => (
                <Link
                  href="#"
                  key={item}
                  color="text.secondary"
                  underline="none"
                  variant="body2"
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            marginTop: 6,
            paddingTop: 3,
            borderTop: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            ©2025 ShenCarCar. All rights reserved
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              href="#"
              color="text.secondary"
              underline="none"
              variant="body2"
            >
              Privacy & Policy
            </Link>
            <Link
              href="#"
              color="text.secondary"
              underline="none"
              variant="body2"
            >
              Terms & Conditions
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
