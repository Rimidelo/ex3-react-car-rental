import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { SearchRounded, Favorite } from "@mui/icons-material";

const COLORS = {
  primary: "#3563E9",
  textPrimary: "#1A202C",
  textSecondary: "#596780",
  border: "rgba(195, 212, 233, 0.4)",
  hoverBg: "#E0E0E0",
};

const appBarStyles = {
  width: "100%",
  height: "124px",
  background: "#FFFFFF",
  borderBottom: `1px solid ${COLORS.border}`,
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
};

const toolbarStyles = {
  width: "100%",
  maxWidth: "1440px",
  mx: "auto",
  display: "flex",
  alignItems: "center",
  gap: { xs: 2, sm: 4, md: 8, lg: "126px" },
  flexWrap: "wrap",
};

const titleStyles = {
  fontWeight: 700,
  color: COLORS.primary,
  fontSize: "32px",
  letterSpacing: "-0.03em",
  cursor: "pointer",
};

const searchFieldStyles = {
  width: {
    xs: "100%",
    sm: "350px",
    md: "400px",
    lg: "492px",
  },
  height: "44px",
  backgroundColor: "#FFFFFF",
  borderRadius: "70px",
  border: `1px solid ${COLORS.border}`,
  "& .MuiOutlinedInput-root": {
    borderRadius: "70px",
    pl: "10px",
    height: "44px",
  },
};

const favoriteButtonStyles = {
  width: "44px",
  height: "44px",
  borderRadius: "90px",
  backgroundColor: "#FFFFFF",
  border: `1px solid ${COLORS.border}`,
  opacity: 0.8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mr: "30px",
  "&:hover": { backgroundColor: COLORS.hoverBg },
};

const Header = ({ onSearch, showFavorites, toggleFavorites }) => {
  const handleTitleClick = () => {
    window.location.href = "/";
  };

  return (
    <AppBar position="relative" sx={appBarStyles}>
      <Toolbar sx={toolbarStyles}>
        <Typography variant="h5" sx={titleStyles} onClick={handleTitleClick}>
          ShenCarCar
        </Typography>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search by car name"
          size="small"
          onChange={(e) => onSearch(e.target.value)}
          sx={searchFieldStyles}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchRounded sx={{ color: COLORS.textSecondary }} />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ flexGrow: 1 }} />

        {/* Favorite Button */}
        <IconButton onClick={toggleFavorites} sx={favoriteButtonStyles}>
          {showFavorites ? (
            <Favorite sx={{ color: "#ED3F3F", fontSize: "24px" }} />
          ) : (
            <Favorite sx={{ color: COLORS.textSecondary, fontSize: "24px" }} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
