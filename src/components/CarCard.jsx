import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, IconButton, Button, Box, Stack } from "@mui/material";
import { FavoriteBorder, Favorite, LocalGasStation, SettingsInputComponent, GroupsRounded } from "@mui/icons-material";

const CarCard = ({ car, toggleFavorite }) => {
  const navigate = useNavigate(); // Add navigation

  return (
    <Card 
      sx={{ 
        borderRadius: 3, 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        padding: 2,
        transition: "0.3s",
        "&:hover": { boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)", cursor: "pointer" }
      }}
    >
      {/* Favorite Button (Heart) */}
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" fontWeight="bold">
          {car.name}
        </Typography>
        <IconButton onClick={() => toggleFavorite(car.id)}>
          {car.favorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </Box>

      {/* Car Type (Sport, SUV, etc.) */}
      <Typography variant="body2" color="gray" sx={{ mb: 1 }}>
        {car.type}
      </Typography>

      {/* Clickable Car Image (Navigates to Car Details) */}
      <CardMedia
        component="img"
        image={car.image}
        alt={car.name}
        sx={{ 
          height: 120, 
          objectFit: "contain", 
          display: "block", 
          margin: "auto",
          cursor: "pointer"
        }}
        onClick={() => navigate(`/car/${car.id}`)} // Navigate on click
      />

      <CardContent>
        {/* Fuel, Transmission, and Capacity Icons */}
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ my: 1 }}>
          <Box display="flex" alignItems="center" sx={{ color: "#94A3B8" }}>
            <LocalGasStation sx={{ fontSize: 22 }} />
            <Typography variant="body2" sx={{ ml: 0.5 }}>{car.fuel}</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ color: "#94A3B8" }}>
            <SettingsInputComponent sx={{ fontSize: 22 }} />
            <Typography variant="body2" sx={{ ml: 0.5 }}>{car.transmission}</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ color: "#94A3B8" }}>
            <GroupsRounded sx={{ fontSize: 22 }} />
            <Typography variant="body2" sx={{ ml: 0.5 }}>{car.capacity} People</Typography>
          </Box>
        </Stack>

        {/* Price & Rent Now Button */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            ${car.pricePerDay}.00 <Typography variant="caption" color="gray">/ day</Typography>
          </Typography>
          <Button variant="contained" color="primary" sx={{ borderRadius: 2 }}>
            Rent Now
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CarCard;
