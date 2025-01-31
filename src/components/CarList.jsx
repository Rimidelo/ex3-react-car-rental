import React from "react";
import { Typography, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // ✅ Use Grid2
import CarCard from "./CarCard";

const CarList = ({ cars, filters, searchQuery, showFavorites, toggleFavorite }) => {
  // Filter the cars based on search, favorites, and filter selections
  const filteredCars = cars.filter((car) => {
    if (showFavorites && !car.favorite) return false;

    if (searchQuery.length >= 2) {
      return car.name.toLowerCase().includes(searchQuery.toLowerCase());
    }

    return (
      (filters.type.length === 0 || filters.type.includes(car.type)) &&
      (filters.capacity.length === 0 || filters.capacity.includes(car.capacity)) &&
      car.pricePerDay <= filters.price
    );
  });

  return (
    <Box sx={{ padding: "20px", flex: 1 }}>
      {/* Show number of displayed cars */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Showing {filteredCars.length} cars
      </Typography>

      <Grid2 container spacing={3}>
        {filteredCars.map((car) => (
          <Grid2 xs={12} sm={6} md={4} key={car.id}> {/* ✅ Use Grid2 */}
            <CarCard car={car} toggleFavorite={toggleFavorite} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CarList;
