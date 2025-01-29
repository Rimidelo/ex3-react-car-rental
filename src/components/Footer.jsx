import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", padding: "40px 0", marginTop: "40px" }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold">ShenCarCar</Typography>
            <Typography variant="body2">
              Our vision is to provide convenience and help increase your sales business.
            </Typography>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" fontWeight="bold">About</Typography>
            <Typography variant="body2">How it works</Typography>
            <Typography variant="body2">Featured</Typography>
            <Typography variant="body2">Partnership</Typography>
            <Typography variant="body2">Business Relation</Typography>
          </Grid>

          {/* Community Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" fontWeight="bold">Community</Typography>
            <Typography variant="body2">Events</Typography>
            <Typography variant="body2">Blog</Typography>
            <Typography variant="body2">Podcast</Typography>
            <Typography variant="body2">Invite a friend</Typography>
          </Grid>

          {/* Socials Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" fontWeight="bold">Socials</Typography>
            <Typography variant="body2">Discord</Typography>
            <Typography variant="body2">Instagram</Typography>
            <Typography variant="body2">Twitter</Typography>
            <Typography variant="body2">Facebook</Typography>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ marginTop: 3, textAlign: "center", borderTop: "1px solid #ddd", paddingTop: "15px" }}>
          <Typography variant="body2">©2025 ShenCarCar. All rights reserved</Typography>
          <Typography variant="body2">Privacy & Policy | Terms & Conditions</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
