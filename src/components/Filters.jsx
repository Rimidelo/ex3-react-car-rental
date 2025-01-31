import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Slider,
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
        width: "250px", // ✅ Fixed width
        height: "100vh",
        padding: 3,
        backgroundColor: "#ffffff",
        position: "fixed", // ✅ Fix to the left
        left: 0,
        top: 64, // ✅ Ensure it's below the header
        boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      {/* Car Type Filter */}
      <Typography variant="subtitle1" fontWeight="bold">
        TYPE
      </Typography>
      {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
        <FormControlLabel
          key={type}
          control={
            <Checkbox
              checked={filters.type.includes(type)}
              onChange={() => handleCheckboxChange("type", type)}
            />
          }
          label={type}
        />
      ))}

      {/* Capacity Filter */}
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
        CAPACITY
      </Typography>
      {[2, 4, 6].map((capacity) => (
        <FormControlLabel
          key={capacity}
          control={
            <Checkbox
              checked={filters.capacity.includes(capacity)}
              onChange={() => handleCheckboxChange("capacity", capacity)}
            />
          }
          label={`${capacity} Person`}
        />
      ))}

      {/* Price Range Slider */}
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>
        PRICE (PER DAY)
      </Typography>
      <Slider
        value={filters.price}
        onChange={handlePriceChange}
        min={50}
        max={100}
        sx={{ width: "90%" }}
      />
      <Typography variant="body2">Max: ${filters.price}.00</Typography>
    </Box>
  );
};

export default Filters;
