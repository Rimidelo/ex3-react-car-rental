import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Slider,
  FormGroup,
} from "@mui/material";

const Filters = ({ filters, setFilters }) => {
  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handlePriceChange = (event, newValue) => {
    setFilters((prev) => ({ ...prev, price: newValue }));
  };

  return (
    <Box
      sx={{
        width: "360px",
        padding: "32px",
        backgroundColor: "#ffffff",
        position: "fixed",
        left: "0",
        top: "124px",
        borderRadius: "8px",
        height: "600px",
        gap: "0px",
      }}
    >
      {/* Car Type Filter */}
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "600",
          color: "#90A3BF",
          fontSize: "12px",
          lineHeight: "15.12px",
          letterSpacing: "-0.02em",
          marginBottom: "28px", // Adds spacing below "TYPE"
        }}
      >
        TYPE
      </Typography>

      <FormGroup sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox
                checked={filters.type.includes(type)}
                onChange={() => handleCheckboxChange("type", type)}
                sx={{
                  "&.Mui-checked": {
                    color: "#3563E9",
                  },
                  padding: "6px",
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontStyle: "normal",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "30px",
                  color: "#596780",
                  marginLeft: "-8px",
                  letterSpacing: "-0.02em",
                }}
              >
                {type} <span style={{ color: "#90A3BF" }}>(10)</span>
              </Typography>
            }
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              width: "100%",
            }}
          />
        ))}
      </FormGroup>

      {/* Capacity Filter */}
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "600",
          color: "#90A3BF",
          fontSize: "12px",
          lineHeight: "15.12px",
          letterSpacing: "-0.02em",
          marginTop: "28px", // Adds spacing above "CAPACITY"
          marginBottom: "28px", // Adds spacing below "CAPACITY"
        }}
      >
        CAPACITY
      </Typography>

      <FormGroup sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {[2, 4, 6].map((capacity) => (
          <FormControlLabel
            key={capacity}
            control={
              <Checkbox
                checked={filters.capacity.includes(capacity)}
                onChange={() => handleCheckboxChange("capacity", capacity)}
                sx={{
                  "&.Mui-checked": {
                    color: "#3563E9",
                  },
                  padding: "6px",
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  color: "#596780",
                  marginLeft: "-8px",
                }}
              >
                {capacity} Person <span style={{ color: "#90A3BF" }}>(10)</span>
              </Typography>
            }
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              width: "100%",
            }}
          />
        ))}
      </FormGroup>

      {/* Price Range Slider */}
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "600",
          color: "#90A3BF",
          fontSize: "12px",
          lineHeight: "15.12px",
          letterSpacing: "-0.02em",
          marginTop: "28px", // Adds spacing above "PRICE (PER DAY)"
          marginBottom: "28px", // Adds spacing below "PRICE (PER DAY)"
        }}
      >
        PRICE (PER DAY)
      </Typography>
      <Slider
        value={filters.price}
        onChange={handlePriceChange}
        min={50}
        max={100}
        sx={{
          width: "296px",
          height: "11px",
          color: "#3563E9",
          "& .MuiSlider-thumb": {
            backgroundColor: "#3563E9",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#90A3BF",
          },
        }}
      />
      <Typography
        sx={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: "500",
          fontSize: "20px",
          color: "#596780",
          lineHeight: "30px",
          letterSpacing: "-0.02em",
        }}
      >
        Max: ${filters.price}.00
      </Typography>
    </Box>
  );
};

export default Filters;
