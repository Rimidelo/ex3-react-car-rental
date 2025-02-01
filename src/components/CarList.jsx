import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CarCard from "./CarCard";

const CarList = ({
  cars,
  filters,
  searchQuery,
  showFavorites,
  toggleFavorite,
}) => {
  const filteredCars = cars.filter((car) => {
    if (searchQuery.trim().length >= 2) {
      return car.name.toLowerCase().includes(searchQuery.toLowerCase());
    }

    if (showFavorites) {
      return car.favorite;
    }
    return (
      (filters.type.length === 0 || filters.type.includes(car.type)) &&
      (filters.capacity.length === 0 ||
        filters.capacity.includes(car.capacity)) &&
      car.pricePerDay <= filters.price
    );
  });

  return (
    <Box sx={{ p: 4, flex: 1, backgroundColor: "#F6F7F9", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#1A202C",
          }}
        >
          Cars Catalogue
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#90A3BF",
          }}
        >
          {filteredCars.length} Cars
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {filteredCars.map((car) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={car.id}>
            <CarCard car={car} toggleFavorite={toggleFavorite} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CarList;
