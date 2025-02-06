import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";

const labelStyle = {
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "30px",
  letterSpacing: "-0.02em",
  textAlign: "left",
  color: "#1A202C",
  mb: "24px",
};

const itemStyle = {
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  letterSpacing: "-0.02em",
  textAlign: "left",
  color: "#13131399",
  mb: "20px",
};

const bottomTextStyle = {
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "24px",
  letterSpacing: "-0.02em",
  textAlign: "left",
  color: "#1A202C",
};

const linkGroups = [
  {
    title: "About",
    links: ["How it works", "Featured", "Partnership", "Business Relation"],
  },
  {
    title: "Community",
    links: ["Events", "Blog", "Podcast", "Invite a friend"],
  },
  {
    title: "Socials",
    links: ["Discord", "Instagram", "Twitter", "Facebook"],
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(195, 212, 233, 0.4)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          pt: "80px",
          pb: "60px",
          px: "60px",
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
          {linkGroups.map((group) => (
            <Grid item xs={6} md={2} key={group.title}>
              <Typography sx={labelStyle}>{group.title}</Typography>
              {group.links.map((link) => (
                <Link
                  key={link}
                  underline="none"
                  variant="body2"
                  sx={{ ...itemStyle, display: "block", mt: 1 }}
                >
                  {link}
                </Link>
              ))}
            </Grid>
          ))}
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
            <Link underline="none" variant="body2" sx={bottomTextStyle}>
              Privacy & Policy
            </Link>
            <Link underline="none" variant="body2" sx={bottomTextStyle}>
              Terms & Conditions
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
