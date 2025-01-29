import React, { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton} from "@mui/material";
import { FavoriteBorder, Favorite, Search } from "@mui/icons-material";

const Header = ({ onSearch, showFavorites, toggleFavorites }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value.length >= 2 ? value : ""); // Only search if 2+ chars
  };

  return (
    <AppBar position="static" sx={{ background: "white", boxShadow: 1, padding: "10px 40px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          color="primary"
          sx={{ cursor: "pointer", fontWeight: "bold" }}
          onClick={() => window.location.reload()}
        >
          ShenCarCar
        </Typography>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search by car name"
          size="small"
          value={searchQuery}
          onChange={handleSearch}
          sx={{
            width: "40%",
            borderRadius: "25px",
            backgroundColor: "#f5f5f5",
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              paddingLeft: "10px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Favorites Button (with Circular Background) */}
        <IconButton
          onClick={toggleFavorites} 
          sx={{
            backgroundColor: "#f0f0f0",
            borderRadius: "50%",
            padding: "10px",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          {showFavorites ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
