import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Slider,
  FormGroup,
} from "@mui/material";

const filterLabelStyle = {
  fontWeight: "600",
  color: "#90A3BF",
  fontSize: "12px",
  lineHeight: "15.12px",
  letterSpacing: "-0.02em",
  mb: "28px",
};

const filterItemTextStyle = {
  fontStyle: "normal",
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "30px",
  color: "#596780",
  ml: "-8px",
  letterSpacing: "-0.02em",
};

const checkboxStyle = {
  "&.Mui-checked": { color: "#3563E9" },
  padding: "4px",
};

const formControlLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  width: "100%",
};

const sliderStyles = {
  width: "296px",
  height: "11px",
  color: "#3563E9",
  "& .MuiSlider-thumb": { backgroundColor: "#3563E9" },
  "& .MuiSlider-rail": { backgroundColor: "#90A3BF" },
};

const maxTextStyle = {
  fontWeight: "500",
  fontSize: "20px",
  color: "#596780",
  lineHeight: "30px",
  letterSpacing: "-0.02em",
};

const Filters = ({ filters, setFilters, cars }) => {
  const typeOptions = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const capacityOptions = [2, 4, 6];

  const typeCounts = typeOptions.reduce((acc, type) => {
    acc[type] = cars.filter((car) => car.type === type).length;
    return acc;
  }, {});

  const capacityCounts = capacityOptions.reduce((acc, capacity) => {
    acc[capacity] = cars.filter((car) => car.capacity === capacity).length;
    return acc;
  }, {});

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const isSelected = prev[category].includes(value);
      if (isSelected && prev[category].length === 1) return prev;
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      };
    });
  };

  const handlePriceChange = (event, newValue) => {
    setFilters((prev) => ({ ...prev, price: newValue }));
  };

  return (
    <Box
      sx={{
        width: "360px",
        p: "32px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Car Type Filter */}
      <Typography variant="subtitle2" sx={filterLabelStyle}>
        TYPE
      </Typography>

      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
        }}
      >
        {typeOptions.map((type, index) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox
                checked={filters.type.includes(type)}
                onChange={() => handleCheckboxChange("type", type)}
                sx={checkboxStyle}
              />
            }
            label={
              <Typography sx={filterItemTextStyle}>
                {type}{" "}
                <span style={{ color: "#90A3BF" }}>({typeCounts[type]})</span>
              </Typography>
            }
            sx={{
              ...formControlLabelStyle,
              mb: index === typeOptions.length - 1 ? 0 : "24px",
            }}
          />
        ))}
      </FormGroup>

      {/* Capacity Filter */}
      <Typography variant="subtitle2" sx={{ ...filterLabelStyle, mt: "56px" }}>
        CAPACITY
      </Typography>

      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
        }}
      >
        {capacityOptions.map((capacity, index) => (
          <FormControlLabel
            key={capacity}
            control={
              <Checkbox
                checked={filters.capacity.includes(capacity)}
                onChange={() => handleCheckboxChange("capacity", capacity)}
                sx={checkboxStyle}
              />
            }
            label={
              <Typography sx={filterItemTextStyle}>
                {capacity} Person{" "}
                <span style={{ color: "#90A3BF" }}>
                  ({capacityCounts[capacity]})
                </span>
              </Typography>
            }
            sx={{
              ...formControlLabelStyle,
              mb: index === capacityOptions.length - 1 ? 0 : "24px",
            }}
          />
        ))}
      </FormGroup>

      {/* Price Range Slider */}
      <Typography variant="subtitle2" sx={{ ...filterLabelStyle, mt: "56px" }}>
        PRICE (PER DAY)
      </Typography>
      <Slider
        value={filters.price}
        onChange={handlePriceChange}
        min={50}
        max={100}
        sx={sliderStyles}
      />
      <Typography sx={maxTextStyle}>Max: ${filters.price}.00</Typography>
    </Box>
  );
};

export default Filters;
