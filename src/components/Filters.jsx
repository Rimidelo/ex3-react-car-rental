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
        gap: "0px",
      }}
    >
      {/* Car Type Filter */}
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: "600",
          color: "#90A3BF",
          fontSize: "12px",
          lineHeight: "15.12px",
          letterSpacing: "-0.02em",
          marginBottom: "28px",
        }}
      >
        TYPE
      </Typography>

      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
        }}
      >
        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
          (type, index) => (
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
                    padding: "4px",
                  }}
                />
              }
              label={
                <Typography
                  sx={{
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
                marginBottom: index === 5 ? 0 : "24px",
              }}
            />
          )
        )}
      </FormGroup>

      {/* Capacity Filter */}
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: "600",
          color: "#90A3BF",
          fontSize: "12px",
          lineHeight: "15.12px",
          letterSpacing: "-0.02em",
          marginTop: "28px",
          marginBottom: "28px",
        }}
      >
        CAPACITY
      </Typography>

      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
        }}
      >
        {[2, 4, 6].map((capacity, index) => (
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
                  padding: "4px",
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "30px",
                  color: "#596780",
                  marginLeft: "-8px",
                  letterSpacing: "-0.02em",
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
              marginBottom: index === 2 ? 0 : "24px",
            }}
          />
        ))}
      </FormGroup>

      {/* Price Range Slider */}
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: "600",
          color: "#90A3BF",
          fontSize: "12px",
          lineHeight: "15.12px",
          letterSpacing: "-0.02em",
          marginTop: "28px",
          marginBottom: "28px",
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
