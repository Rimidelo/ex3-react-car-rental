import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import { Box, Container, Grid } from "@mui/material";

function App() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({ type: [], capacity: [], price: 100 });
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  // Fetch cars from JSON file
  useEffect(() => {
    fetch("./data/cars.json")
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error("Error loading cars:", error));
  }, []);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setCars(prevCars =>
      prevCars.map(car =>
        car.id === id ? { ...car, favorite: !car.favorite } : car
      )
    );
  };

  return (
    <Box>
      <Header onSearch={setSearchQuery} showFavorites={showFavorites} toggleFavorites={() => setShowFavorites(!showFavorites)} />
      <Container sx={{ display: "flex", mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Filters filters={filters} setFilters={setFilters} />
          </Grid>
          <Grid item xs={9}>
            <CarList cars={cars} filters={filters} searchQuery={searchQuery} showFavorites={showFavorites} toggleFavorite={toggleFavorite} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
