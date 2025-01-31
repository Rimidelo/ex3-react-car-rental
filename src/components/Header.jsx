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

const Header = ({ onSearch, showFavorites, toggleFavorites }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        height: "124px",
        background: "#FFFFFF",
        borderBottom: "1px solid rgba(195, 212, 233, 0.4)",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          width: "1440px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          gap: "126px",
          justifyContent: "flex-start",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: "700",
            color: "#3563E9",
            fontSize: "32px",
            letterSpacing: "-0.03em",
          }}
        >
          ShenCarCar
        </Typography>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search by car name"
          size="small"
          onChange={(e) => onSearch(e.target.value)}
          sx={{
            width: "492px",
            height: "44px",
            backgroundColor: "#FFFFFF",
            borderRadius: "70px",
            border: "1px solid rgba(195, 212, 233, 0.4)",
            "& .MuiOutlinedInput-root": {
              borderRadius: "70px",
              paddingLeft: "10px",
              height: "44px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchRounded sx={{ color: "#596780" }} />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        {/* Favorite Button*/}
        <IconButton
          onClick={toggleFavorites}
          sx={{
            width: "44px",
            height: "44px",
            borderRadius: "90px",
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(195, 212, 233, 0.4)",
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": { backgroundColor: "#E0E0E0" },
          }}
        >
          {showFavorites ? (
            <Favorite sx={{ color: "#ED3F3F", fontSize: "24px" }} />
          ) : (
            <Favorite sx={{ color: "#596780", fontSize: "24px" }} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
