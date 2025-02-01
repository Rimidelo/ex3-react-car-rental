import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia, Stack, IconButton } from "@mui/material";
import { ArrowBack, FavoriteBorder, Favorite, Star, LocalGasStation, DirectionsCar, People, SettingsInputComponent } from "@mui/icons-material";

const CarDetails = ({ cars, toggleFavorite }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return <Typography variant="h5" color="error">Car not found.</Typography>;
  }

  return (
    <Box sx={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>
      <Button
        startIcon={<ArrowBack />} 
        onClick={() => navigate(-1)} 
        sx={{ mb: 3, textTransform: "none", fontSize: "16px" }}
      >
        Back to Cars
      </Button>

      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box sx={{ flex: 1 }}>
          <Card sx={{ borderRadius: "12px", padding: 3, background: "#2A3EB1", color: "white" }}>
            <Typography variant="h5" fontWeight="bold">
              Sports car with the best design and acceleration
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
              Safety and comfort while driving a futuristic and elegant sports car.
            </Typography>
            <CardMedia
              component="img"
              image={car.image}
              alt={car.name}
              sx={{ width: "100%", height: "200px", objectFit: "contain", mt: 2 }}
            />
          </Card>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <CardMedia component="img" image={car.image} sx={{ width: "80px", height: "80px", borderRadius: "8px", cursor: "pointer", border: "2px solid #2A3EB1" }} />
            <CardMedia component="img" image="/images/interior1.png" sx={{ width: "80px", height: "80px", borderRadius: "8px", cursor: "pointer" }} />
            <CardMedia component="img" image="/images/interior2.png" sx={{ width: "80px", height: "80px", borderRadius: "8px", cursor: "pointer" }} />
          </Stack>
        </Box>

        <Card sx={{ flex: 1, borderRadius: "12px", padding: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" fontWeight="bold">{car.name}</Typography>
            <IconButton onClick={() => toggleFavorite(car.id)}>
              {car.favorite ? <Favorite color="error" /> : <FavoriteBorder />}
            </IconButton>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            {[...Array(4)].map((_, i) => (
              <Star key={i} sx={{ color: "#FFA500" }} />
            ))}
            <Star sx={{ color: "#E0E0E0" }} />
            <Typography variant="body2" sx={{ ml: 1, color: "#757575" }}>440 Reviewers</Typography>
          </Stack>

          {/* Car Description */}
          <Typography variant="body2" sx={{ mt: 2, color: "#757575" }}>
            NISMO has become the embodiment of Nissan’s outstanding performance, inspired by the most unforgiving proving ground, the "race track".
          </Typography>

          {/* Price & Rent Button */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
            <Typography variant="h5" fontWeight="bold">
              ${car.pricePerDay}.00 <Typography variant="caption" color="gray">/ days</Typography>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 2, fontSize: "18px", padding: "10px 30px" }}
            >
              Rent Now
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
};

export default CarDetails;
