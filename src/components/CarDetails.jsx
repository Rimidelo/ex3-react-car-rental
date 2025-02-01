import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  Stack,
  IconButton,
} from "@mui/material";
import { FavoriteBorder, Favorite, Star } from "@mui/icons-material";
import hexagonPattern from "../assets/hexagon.png";

const CarDetails = ({ cars, toggleFavorite }) => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(car?.image || "");

  if (!car) {
    return (
      <Typography variant="h5" color="error">
        Car not found.
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4, flex: 1, backgroundColor: "#F6F7F9", minHeight: "100vh" }}>
      {/* Page Title */}
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "36px",
          color: "#1A202C",
          mb: 4,
        }}
      >
        Car Details
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing="32px">
        {/* Left Section - Blue Box with Image */}
        <Box sx={{ flex: 1 }}>
          <Card
            sx={{
              width: "492px",
              height: "360px",
              borderRadius: "8px",
              padding: 3,
              backgroundColor: "#3563E9",
              backgroundImage: `url(${hexagonPattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              color: "white",
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "48px",
                mb: 1,
              }}
            >
              {car.descriptions[0]}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                color: "#FFFFFF",
              }}
            >
              {car.descriptions[1]}
            </Typography>
            <CardMedia
              component="img"
              image={selectedImage}
              alt={car.name}
              sx={{
                width: "100%",
                height: "250px",
                objectFit: "contain",
                mt: 2,
              }}
            />
          </Card>

          {/* Thumbnail Images - Click to Change Main Image */}
          <Stack
            direction="row"
            sx={{
              mt: "24px",
              gap: "24px",
              justifyContent: "space-between",
            }}
          >
            {[car.image, ...car.additionalImages].map((img, index) => (
              <CardMedia
                key={index}
                component="img"
                image={img}
                sx={{
                  width: "148px",
                  height: "124px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border:
                    selectedImage === img
                      ? "2px solid #3563E9"
                      : "2px solid transparent",
                  "&:hover": { opacity: 0.7 },
                }}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </Stack>
        </Box>

        {/* RIGHT SECTION - WHITE BOX */}
        <Card
          sx={{
            flex: 1,
            width: "492px",
            height: "508px",
            borderRadius: "8px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Car Name & Favorite Button */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "48px",
                color: "#1A202C",
              }}
            >
              {car.name}
            </Typography>
            <IconButton onClick={() => toggleFavorite(car.id)}>
              {car.favorite ? (
                <Favorite sx={{ color: "#ED3F3F" }} />
              ) : (
                <FavoriteBorder />
              )}
            </IconButton>
          </Stack>

          {/* Star Ratings */}
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            {[...Array(Math.floor(car.rating))].map((_, i) => (
              <Star key={i} sx={{ color: "#FFA500" }} />
            ))}
            {[...Array(5 - Math.floor(car.rating))].map((_, i) => (
              <Star key={i} sx={{ color: "#E0E0E0" }} />
            ))}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "21px",
                color: "#90A3BF",
              }}
            >
              {car.reviews} Reviewers
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "40px",
              color: "#90A3BF",
              mt: "32px",
            }}
          >
            {car.descriptions[2]}
          </Typography>

          {/* Car Specs Table */}
          <Box sx={{ mt: "32px" }}>
            {" "}
            {/* Keeps spacing clear */}
            <Stack direction="row" spacing={5.5} sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    letterSpacing: "-0.02em",
                    color: "#90A3BF",
                    textAlign: "left",
                  }}
                >
                  Type Car
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    letterSpacing: "-0.02em",
                    color: "#596780",
                    textAlign: "right",
                  }}
                >
                  {car.type}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    letterSpacing: "-0.02em",
                    color: "#90A3BF",
                    textAlign: "left",
                  }}
                >
                  Capacity
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    letterSpacing: "-0.02em",
                    color: "#596780",
                    textAlign: "right",
                  }}
                >
                  {car.capacity} Person
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={5.5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    letterSpacing: "-0.02em",
                    color: "#90A3BF",
                    textAlign: "left",
                  }}
                >
                  Steering
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    letterSpacing: "-0.02em",
                    color: "#596780",
                    textAlign: "right",
                  }}
                >
                  {car.transmission}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    letterSpacing: "-0.02em",
                    color: "#90A3BF",
                    textAlign: "left",
                  }}
                >
                  Gasoline
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    letterSpacing: "-0.02em",
                    color: "#596780",
                    textAlign: "right",
                  }}
                >
                  {car.fuel}
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Price & Rent Now Button - 80px below categories */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: "64px" }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "41px",
                color: "#1A202C",
              }}
            >
              ${car.pricePerDay}.00
              <Typography
                component="span"
                sx={{ fontSize: "16px", color: "#90A3BF", ml: 0.5 }}
              >
                / days
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
                "&:hover": { backgroundColor: "#2346AF" },
              }}
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
