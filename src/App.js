import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import { Box, Container } from "@mui/material";
import "./style/style.css";

const initialFilters = {
  type: ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"],
  capacity: [2, 4, 6],
  price: 100,
};

function App() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/data/cars.json");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error loading cars:", error);
      }
    };
    fetchCars();
  }, []);

  const toggleFavorite = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, favorite: !car.favorite } : car
      )
    );
  };

  const handleToggleFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  return (
    <Router>
      <Box sx={{ backgroundColor: "#F6F7F9", minHeight: "100vh" }}>
        <Header
          onSearch={setSearchQuery}
          showFavorites={showFavorites}
          toggleFavorites={handleToggleFavorites}
        />

        <Container disableGutters maxWidth={false} sx={{ display: "flex" }}>
          <Filters filters={filters} setFilters={setFilters} cars={cars} />
          <Box sx={{ width: "100%" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <CarList
                    cars={cars}
                    filters={filters}
                    searchQuery={searchQuery}
                    showFavorites={showFavorites}
                    toggleFavorite={toggleFavorite}
                  />
                }
              />
              <Route
                path="/car/:id"
                element={<CarDetails cars={cars} toggleFavorite={toggleFavorite} />}
              />
            </Routes>
          </Box>
        </Container>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
