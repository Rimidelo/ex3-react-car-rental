import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import { Box, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import "./style/app.css";

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
              <Grid2 container spacing={3}> {/* ✅ Replace Grid with Grid2 */}
                <Grid2 xs={12} md={3}> {/* ✅ Replace Grid item with Grid2 */}
                  <Filters filters={filters} setFilters={setFilters} />
                </Grid2>
                <Grid2 xs={12} md={9}> {/* ✅ Replace Grid item with Grid2 */}
                  <CarList
                    cars={cars}
                    filters={filters}
                    searchQuery={searchQuery}
                    showFavorites={showFavorites}
                    toggleFavorite={toggleFavorite}
                  />
                </Grid2>
              </Grid2>
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
