import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Shared styles
const labelStyle = {
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "30px",
  letterSpacing: "-0.02em",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",
  color: "#1A202C",
   marginBottom: "24px"
};

const itemStyle = {
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  letterSpacing: "-0.02em",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",
  color: "#13131399",
  marginBottom: "20px"
};

const bottomTextStyle = {
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "24px",
  letterSpacing: "-0.02em",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",
  color: "#1A202C",
};

const Footer = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#FFFFFF" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          pt: "80px",
          pb: "60px",
          pl: "60px",
          pr: "60px",
        }}
      >
        <Grid container spacing={6} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#3563E9",
                fontSize: "32px",
                letterSpacing: "-0.03em",
              }}
            >
              ShenCarCar
            </Typography>
            <Typography sx={{ ...itemStyle, mt: 1 }}>
              Our vision is to provide convenience and help increase your sales
              business.
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={labelStyle}>About</Typography>
            {[
              "How it works",
              "Featured",
              "Partnership",
              "Business Relation",
            ].map((item) => (
              <Link
                key={item}
                underline="none"
                variant="body2"
                sx={{ ...itemStyle, display: "block", mt: 1 }}
              >
                {item}
              </Link>
            ))}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={labelStyle}>Community</Typography>
            {["Events", "Blog", "Podcast", "Invite a friend"].map((item) => (
              <Link
                key={item}
                underline="none"
                variant="body2"
                sx={{ ...itemStyle, display: "block", mt: 1 }}
              >
                {item}
              </Link>
            ))}
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography sx={labelStyle}>Socials</Typography>
            {["Discord", "Instagram", "Twitter", "Facebook"].map((item) => (
              <Link
                key={item}
                underline="none"
                variant="body2"
                sx={{ ...itemStyle, display: "block", mt: 1 }}
              >
                {item}
              </Link>
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography sx={bottomTextStyle}>
            ©2025 ShenCarCar. All rights reserved
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              underline="none"
              variant="body2"
              sx={bottomTextStyle}
            >
              Privacy & Policy
            </Link>
            <Link
              underline="none"
              variant="body2"
              sx={bottomTextStyle}
            >
              Terms & Conditions
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
