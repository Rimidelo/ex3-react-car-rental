import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import { Box, Container, Grid } from "@mui/material";
import "./src/style/app.css";

function App() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({ type: [], capacity: [], price: 100 });
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    fetch("/data/cars.json")
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error("Error loading cars:", error));
  }, []);

  // Toggle favorite status (resets on refresh)
  const toggleFavorite = (id) => {
    setCars(prevCars =>
      prevCars.map(car =>
        car.id === id ? { ...car, favorite: !car.favorite } : car
      )
    );
  };

  return (
    <Router>
      <Box>
        <Header
          onSearch={setSearchQuery}
          showFavorites={showFavorites}
          toggleFavorites={() => setShowFavorites(!showFavorites)}
        />

        <Container sx={{ display: "flex", mt: 3 }}>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Filters filters={filters} setFilters={setFilters} />
                </Grid>
                <Grid item xs={12} md={9}>
                  <CarList
                    cars={cars}
                    filters={filters}
                    searchQuery={searchQuery}
                    showFavorites={showFavorites}
                    toggleFavorite={toggleFavorite}
                  />
                </Grid>
              </Grid>
            } />

            {/* Car Details Page (Pass toggleFavorite) */}
            <Route path="/car/:id" element={<CarDetails cars={cars} toggleFavorite={toggleFavorite} />} />
          </Routes>
        </Container>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
