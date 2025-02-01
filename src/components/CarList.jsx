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
  const query = searchQuery.trim().toLowerCase();
  const filteredCars = cars.filter((car) => {
    if (query.length >= 2) {
      return car.name.toLowerCase().includes(query);
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

  const headerStyles = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      mb: 4,
    },
    title: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "30px",
      color: "#1A202C",
    },
    count: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#90A3BF",
    },
  };

  return (
    <Box
      sx={{
        p: 4,
        flex: 1,
        backgroundColor: "#F6F7F9",
        minHeight: "100vh",
      }}
    >
      <Box sx={headerStyles.container}>
        <Typography sx={headerStyles.title}>Cars Catalogue</Typography>
        <Typography sx={headerStyles.count}>
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
