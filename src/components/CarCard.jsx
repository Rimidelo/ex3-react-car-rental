import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
  Stack,
} from "@mui/material";
import {
  FavoriteBorder,
  Favorite,
  LocalGasStation,
  SettingsInputComponent,
  GroupsRounded,
} from "@mui/icons-material";

const CarCard = ({ car, toggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "317px",
        height: "388px",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        p: 2,
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          cursor: "pointer",
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#1A202C",
              mb: "4px",
            }}
          >
            {car.name}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "21px",
              color: "#90A3BF",
            }}
          >
            {car.type}
          </Typography>
        </Box>

        <IconButton onClick={() => toggleFavorite(car.id)}>
          {car.favorite ? (
            <Favorite sx={{ color: "#ED3F3F" }} />
          ) : (
            <FavoriteBorder sx={{ color: "#90A3BF" }} />
          )}
        </IconButton>
      </Box>

      <CardMedia
        component="img"
        image={car.image}
        alt={car.name}
        sx={{
          width: "100%",
          height: "140px",
          objectFit: "contain",
          display: "block",
          mx: "auto",
          mb: 2,
        }}
        onClick={() => navigate(`/car/${car.id}`)}
      />

      <CardContent sx={{ p: 0 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={2}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#1A202C",
            }}
          >
            ${car.pricePerDay}.00
            <Typography
              component="span"
              sx={{ fontSize: "16px", color: "#90A3BF", ml: 0.5 }}
            >
              / day
            </Typography>
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3563E9",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#2346AF",
              },
            }}
          >
            Rent Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard;
