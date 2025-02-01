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
  PeopleAlt,
} from "@mui/icons-material";
import typeIcon from "../assets/icons/type.svg";

const cardStyle = {
  width: "317px",
  height: "388px",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  p: 2,
  transition: "0.3s",
  "&:hover": {
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
  },
};

const headerBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const carNameStyle = {
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  color: "#1A202C",
  mb: "4px",
};

const carTypeStyle = {
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "21px",
  color: "#90A3BF",
};

const detailTextStyle = {
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "21px",
  letterSpacing: "-0.02em",
  color: "#90A3BF",
};

const mediaStyle = {
  width: "100%",
  height: "140px",
  objectFit: "contain",
  display: "block",
  mx: "auto",
  mb: 2,
};

const infoBoxStyle = {
  display: "flex",
  alignItems: "center",
  color: "#90A3BF",
};

const priceTextStyle = {
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "30px",
  color: "#1A202C",
};

const daySpanStyle = {
  fontSize: "16px",
  color: "#90A3BF",
  ml: 0.5,
};

const rentButtonStyle = {
  backgroundColor: "#3563E9",
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "16px",
  px: 3,
  py: 1,
  "&:hover": { backgroundColor: "#2346AF" },
};

const CarCard = ({ car, toggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <Card sx={cardStyle}>
      {/* Header: Car Name & Favorite Icon */}
      <Box sx={headerBoxStyle}>
        <Box>
          <Typography sx={carNameStyle}>{car.name}</Typography>
          <Typography sx={carTypeStyle}>{car.type}</Typography>
        </Box>
        <IconButton onClick={() => toggleFavorite(car.id)}>
          {car.favorite ? (
            <Favorite sx={{ color: "#ED3F3F" }} />
          ) : (
            <FavoriteBorder sx={{ color: "#90A3BF" }} />
          )}
        </IconButton>
      </Box>

      {/* Car Image */}
      <CardMedia
        component="img"
        image={car.image}
        alt={car.name}
        sx={mediaStyle}
        onClick={() => navigate(`/car/${car.id}`)}
      />

      {/* Details Row: Fuel, Transmission, Capacity */}
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-around"
        sx={{ mb: 2 }}
      >
        <Box sx={infoBoxStyle}>
          <LocalGasStation sx={{ fontSize: 24 }} />
          <Typography sx={detailTextStyle}>{car.fuel}</Typography>
        </Box>

        <Box sx={infoBoxStyle}>
          <img src={typeIcon} alt="Transmission" width="24px" height="24px" />
          <Typography sx={{ ...detailTextStyle, ml: 0.5 }}>
            {car.transmission}
          </Typography>
        </Box>

        <Box sx={infoBoxStyle}>
          <PeopleAlt sx={{ fontSize: 24 }} />
          <Typography sx={{ ...detailTextStyle, ml: 0.5 }}>
            {car.capacity} People
          </Typography>
        </Box>
      </Stack>

      {/* Price & Rent Now Button */}
      <CardContent sx={{ p: 0 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography sx={priceTextStyle}>
            ${car.pricePerDay}.00
            <Typography component="span" sx={daySpanStyle}>
              / day
            </Typography>
          </Typography>
          <Button variant="contained" sx={rentButtonStyle}>
            Rent Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CarCard;
