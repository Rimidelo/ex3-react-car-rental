import React from "react";
import { Card, CardMedia, CardContent, Typography, IconButton, Button, Box } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

const CarCard = ({ car, toggleFavorite }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, padding: 2 }}>
      {/* Clickable image - future implementation: Navigate to Car Details */}
      <CardMedia
        component="img"
        image={car.image}
        alt={car.name}
        sx={{ height: 140, cursor: "pointer", borderRadius: 2 }}
        onClick={() => console.log(`Navigate to car ${car.id}`)}
      />

      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{car.name}</Typography>
          <IconButton onClick={() => toggleFavorite(car.id)}>
            {car.favorite ? <Favorite color="error" /> : <FavoriteBorder />}
          </IconButton>
        </Box>

        <Typography variant="body2" color="textSecondary">
          {car.type} • {car.capacity} Person • {car.fuel}
        </Typography>
        <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }}>
          ${car.pricePerDay} / day
        </Typography>

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Rent Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
